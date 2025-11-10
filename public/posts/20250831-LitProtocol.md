---
title: Lit Protocol 上手指南：Web3 的链上权限控制
date: 2025/08/31
tags: [Lit-protocol,访问控制,Web3]
excerpt: "Lit Protocol 是一个去中心化的密钥管理网络，为 Web3 应用提供强大的加密和访问控制功能。它允许开发者基于区块链条件（如持有特定 NFT、代币余额或钱包地址）来控制数据的访问权限。"
---

# Lit Protocol 上手指南

## 什么是 Lit Protocol？

Lit Protocol 是一个去中心化的密钥管理网络，为 Web3 应用提供强大的加密和访问控制功能。它允许开发者基于区块链条件（如持有特定 NFT、代币余额或钱包地址）来控制数据的访问权限。

### 核心功能

- **条件加密/解密**：基于链上条件控制数据访问
- **去中心化访问控制**：无需中心化服务器管理权限
- **跨链支持**：支持 Ethereum、Polygon、Solana 等多条链
- **可编程签名**：基于条件的数字签名

## 环境准备

### 安装依赖

```bash
npm install @lit-protocol/lit-node-client \
            @lit-protocol/encryption \
            @lit-protocol/auth-helpers \
            @lit-protocol/constants \
            ethers@5
```
### 基础配置

```javascript
import { LitNodeClient } from '@lit-protocol/lit-node-client'
import { encryptString, decryptToString } from '@lit-protocol/encryption'
import { LIT_NETWORK, LIT_ABILITY } from '@lit-protocol/constants'
import { 
  createSiweMessage, 
  generateAuthSig, 
  LitAccessControlConditionResource 
} from '@lit-protocol/auth-helpers'

// 初始化 Lit 客户端
const litNodeClient = new LitNodeClient({
  litNetwork: LIT_NETWORK.DatilDev, // 测试网
  debug: false
})
await litNodeClient.connect()
```

### 测试网配置
```javascript
// 测试网配置建议
const TESTNET_CONFIG = {
  litNetwork: LIT_NETWORK.DatilDev,    // 开发测试网
  chain: "mumbai",                     // Polygon 测试网
  faucet: "https://faucet.polygon.technology/" // 获取测试币
}
```

## 核心功能代码示例

### 1.连接Lit网络

```javascript
async function connectToLitNetwork() {
  const client = new LitNodeClient({
    litNetwork: LIT_NETWORK.DatilDev
  })
  await client.connect()
  return client
}
```

### 2.定义访问控制条件 (ACCs)

```javascript
// 基于钱包地址的条件
const walletAddressConditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: "ethereum",
    method: "",
    parameters: [":userAddress"],
    returnValueTest: {
      comparator: "=",
      value: "0xYourWalletAddressHere" // 替换为实际地址
    }
  }
]

// 基于 ETH 余额的条件
const ethBalanceConditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: "ethereum",
    method: "eth_getBalance",
    parameters: [":userAddress", "latest"],
    returnValueTest: {
      comparator: ">=",
      value: "1000000000000000" // 0.001 ETH
    }
  }
]
```

### 3.加密数据

```javascript
async function encryptData(message, accessControlConditions) {
  const { ciphertext, dataToEncryptHash } = await encryptString(
    {
      accessControlConditions,
      dataToEncrypt: message
    },
    litNodeClient
  )
  
  return { ciphertext, dataToEncryptHash }
}

// 使用示例
const data = "敏感数据：用户个人信息"
const encryptionResult = await encryptData(data, walletAddressConditions)
```

### 4.获取钱包签名

```javascript
async function getWalletSignature() {
  if (!window.ethereum) throw new Error('请安装 MetaMask')
  
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", [])
  const signer = provider.getSigner()
  const address = await signer.getAddress()
  
  const authSig = await LitJsSdk.checkAndSignAuthMessage({
    chain: 'ethereum',
    signer: signer
  })
  
  return { authSig, address }
}
```

### 5.生成会话签名

```javascript
async function getSessionSignatures(accessControlConditions, dataToEncryptHash) {
  const resourceString = await LitAccessControlConditionResource.generateResourceString(
    accessControlConditions,
    dataToEncryptHash
  )

  const sessionSigs = await litNodeClient.getSessionSigs({
    chain: "ethereum",
    expiration: new Date(Date.now() + 1000 * 60 * 10).toISOString(), // 10分钟有效期
    resourceAbilityRequests: [
      {
        resource: new LitAccessControlConditionResource(resourceString),
        ability: LIT_ABILITY.AccessControlConditionDecryption
      }
    ],
    authNeededCallback: async (params) => {
      const toSign = await createSiweMessage({
        uri: window.location.origin,
        expiration: params.expiration,
        resources: params.resourceAbilityRequests,
        walletAddress: await signer.getAddress(),
        nonce: await litNodeClient.getLatestBlockhash()
      })
      return generateAuthSig({ signer, toSign })
    }
  })
  
  return sessionSigs
}
```

### 6.解密数据

```javascript
async function decryptData(encryptionResult, sessionSigs, accessControlConditions) {
  const decryptedText = await decryptToString(
    {
      chain: "ethereum",
      ciphertext: encryptionResult.ciphertext,
      dataToEncryptHash: encryptionResult.dataToEncryptHash,
      accessControlConditions,
      sessionSigs
    },
    litNodeClient
  )
  
  return decryptedText
}
```

### 完整工作流程示例

```javascript
// 1. 连接网络和钱包
const client = await connectToLitNetwork()
const { address } = await getWalletSignature()

// 2. 动态设置访问条件
const conditions = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: "ethereum",
    method: "",
    parameters: [":userAddress"],
    returnValueTest: { comparator: "=", value: address }
  }
]

// 3. 加密数据
const message = "这是只有我能访问的秘密数据"
const encrypted = await encryptData(message, conditions)

// 4. 获取会话签名
const sessionSigs = await getSessionSignatures(conditions, encrypted.dataToEncryptHash)

// 5. 解密数据
const decrypted = await decryptData(encrypted, sessionSigs, conditions)
console.log("解密结果:", decrypted)
```

## 资源链接
官方文档 https://developer.litprotocol.com/

github仓库 https://github.com/Lit-Protocol
