/**
 * Solidity language definition for highlight.js 11
 * Ethereum smart contract language
 */
/** @type {import('highlight.js').LanguageFn} */
export function solidity(hljs) {
  const KEYWORDS = {
    keyword:
      'pragma solidity import contract interface library is abstract ' +
      'function modifier event struct enum mapping ' +
      'memory storage calldata payable view pure returns ' +
      'constructor receive fallback external internal public private ' +
      'emit indexed anonymous ' +
      'if else for while do break return continue ' +
      'try catch revert require assert ' +
      'true false ' +
      'uint int address bool string bytes ' +
      'uint8 uint16 uint24 uint32 uint40 uint48 uint56 uint64 uint72 uint80 uint88 uint96 uint104 uint112 uint120 uint128 uint136 uint144 uint152 uint160 uint168 uint176 uint184 uint192 uint200 uint208 uint216 uint224 uint232 uint240 uint248 uint256 ' +
      'int8 int16 int24 int32 int40 int48 int56 int64 int72 int80 int88 int96 int104 int112 int120 int128 int136 int144 int152 int160 int168 int176 int184 int192 int200 int208 int216 int224 int232 int240 int248 int256 ' +
      'bytes1 bytes2 bytes3 bytes4 bytes5 bytes6 bytes7 bytes8 bytes9 bytes10 bytes11 bytes12 bytes13 bytes14 bytes15 bytes16 bytes17 bytes18 bytes19 bytes20 bytes21 bytes22 bytes23 bytes24 bytes25 bytes26 bytes27 bytes28 bytes29 bytes30 bytes31 bytes32 ' +
      'fixed ufixed ' +
      'delete new this super ' +
      'unchecked type',
    literal: 'wei gwei ether',
    built_in:
      'block msg tx abi ' +
      'blockhash block gaslimit block number block timestamp block basefee block blobbasefee block prevrandao block chainid block coinbase ' +
      'msg data msg sender msg sig msg value msg gas ' +
      'tx origin tx gasprice tx gas ' +
      'abi encode abi encodePacked abi encodeWithSelector abi encodeWithSignature abi decode ' +
      'blockhash gasleft selfdestruct create create2 ' +
      'keccak256 sha256 sha512 ripemd160 ecrecover addmod mulmod'
  };

  const STRING = {
    className: 'string',
    variants: [
      { begin: '"', end: '"', illegal: '\\n', contains: [hljs.BACKSLASH_ESCAPE] },
      { begin: "'", end: "'", illegal: '\\n', contains: [hljs.BACKSLASH_ESCAPE] },
      { begin: '"""', end: '"""', contains: [hljs.BACKSLASH_ESCAPE] },
      { begin: "'''", end: "'''", contains: [hljs.BACKSLASH_ESCAPE] }
    ]
  };

  const NUMBERS = {
    className: 'number',
    variants: [
      { match: /\b0[xX][0-9A-Fa-f](_?[0-9A-Fa-f])*\b/ },
      { match: /\b0[0-7](_?[0-7])*\b/ },
      { match: /\b(?:[0-9](_?[0-9])*\.?[0-9]*(_?[0-9])*|[0-9](_?[0-9])*)(?:\s*(?:wei|gwei|ether)|[eE][+-]?[0-9](_?[0-9])*)?\b/ }
    ],
    relevance: 0
  };

  const COMMENT = {
    className: 'comment',
    variants: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      { begin: /\/\*\*/, end: /\*\//, contains: [{ begin: /\*\s*@\w+/, relevance: 0 }] }
    ]
  };

  const FUNCTION_DEF = {
    className: 'title.function',
    begin: /\bfunction\s+([a-zA-Z_][0-9a-zA-Z_]*)\s*\(/,
    end: /[{;]/,
    excludeEnd: true,
    returnBegin: true,
    contains: [
      { begin: /\bfunction\s+/, relevance: 0 },
      { className: 'params', begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true, keywords: KEYWORDS }
    ]
  };

  const MODIFIER_DEF = {
    className: 'title.function',
    begin: /\bmodifier\s+([a-zA-Z_][0-9a-zA-Z_]*)\s*\(/,
    end: /[{;]/,
    excludeEnd: true,
    returnBegin: true,
    contains: [
      { begin: /\bmodifier\s+/, relevance: 0 },
      { className: 'params', begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true }
    ]
  };

  const EVENT_DEF = {
    className: 'title.function',
    begin: /\bevent\s+([a-zA-Z_][0-9a-zA-Z_]*)\s*\(/,
    end: /\)/,
    excludeEnd: true,
    returnBegin: true,
    contains: [
      { begin: /\bevent\s+/, relevance: 0 },
      { className: 'params', begin: /\(/, end: /\)/, excludeBegin: true, excludeEnd: true }
    ]
  };

  const CONTRACT_DEF = {
    className: 'title.class',
    begin: /\b(contract|interface|library)\s+([a-zA-Z_][0-9a-zA-Z_]*)/,
    end: /\{/,
    excludeEnd: true,
    keywords: 'contract interface library is',
    contains: [
      { begin: /\b(contract|interface|library)\s+/, relevance: 0 },
      { begin: hljs.IDENT_RE, relevance: 0 },
      { begin: /\s+is\s+/, relevance: 0, contains: [{ begin: /[a-zA-Z_][0-9a-zA-Z_.]*/ }] }
    ]
  };

  const PRAGMA = {
    className: 'meta',
    begin: /pragma\s+solidity\s+/,
    end: /;/,
    keywords: 'pragma solidity',
    contains: [
      { begin: /[\d.]+/, className: 'number' },
      { begin: /[<>^=]+/, className: 'operator' }
    ]
  };

  return {
    name: 'Solidity',
    aliases: ['sol'],
    keywords: KEYWORDS,
    contains: [
      STRING,
      COMMENT,
      NUMBERS,
      PRAGMA,
      CONTRACT_DEF,
      FUNCTION_DEF,
      MODIFIER_DEF,
      EVENT_DEF,
      {
        className: 'operator',
        match: /(:=|=>|->|\+\+|--|\|\||&&|==|!=|<=|>=|<|>|\+|-|\*|\/|%|!|\||&|\^|~|\?\?|\.)/
      },
      {
        className: 'punctuation',
        match: /[{}[\]();,]/
      }
    ]
  };
}
