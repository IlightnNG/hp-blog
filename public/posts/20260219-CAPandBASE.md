---
title: "A Brief Introduction to CAP & BASE Theorems"
date: 2026/02/20
tags: []
excerpt: "CAP Theorem focuses on the trade-offs during a partition, while BASE provides a practical implementation model for highly available distributed systems."
---


# A Brief Introduction to CAP & BASE Theorems

## 1. The CAP Theorem

The CAP theorem, also known as **Brewer's Theorem**, states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:

- **C onsistency (一致性)**: Every read receives the most recent write or an error. All nodes see the same data at the same time.
- **A vailability (可用性)**: Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
- **P artition Tolerance (分区容错性)**: The system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.

**Key Takeaway:**
In a distributed system, network partitions are inevitable. Therefore, you must choose between **CP** (Consistency + Partition Tolerance) or **AP** (Availability + Partition Tolerance). You cannot have all three (CA is impossible in a distributed system).

> 在分布式系统中，网络分区是不可避免的。因此，我们必须在 **CP (一致性+容错)** 和 **AP (可用性+容错)** 之间做出权衡。

## 2. The BASE Theorem

BASE is an alternative approach to the ACID (Atomicity, Consistency, Isolation, Durability) model often used in traditional databases. It is commonly applied in systems that prioritize availability (AP systems from the CAP theorem). BASE stands for:

- **B asically Available (基本可用)**: The system guarantees availability. Some parts of the system may be degraded, but the system as a whole remains usable.
- **S oft State (软状态)**: The state of the system could change over time, even without input. This is due to the eventual consistency model.
- **E ventual Consistency (最终一致性)**: The system will become consistent over time, given that the system doesn't receive input during that interval. Data will propagate and eventually all replicas will be consistent.

**Key Takeaway:**
BASE sacrifices strong consistency for availability. It accepts that the data might not be immediately consistent but will be so eventually.

> BASE 理论是对 ACID 的一种权衡。它通过允许系统暂时处于不一致的状态（软状态），来换取更高的可用性（基本可用），并保证数据最终会达到一致状态（最终一致性）。

## Summary

- **CAP** helps you decide **what to prioritize** (Consistency vs. Availability) when a network failure occurs.
- **BASE** describes **how an AP system behaves** in practice (focusing on availability with eventual consistency).

CAP Theorem focuses on the trade-offs during a partition, while BASE provides a practical implementation model for highly available distributed systems.
