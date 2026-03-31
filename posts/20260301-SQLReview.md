---
title: "SQL 语法与知识点复习"
date: 2026/03/01
tags: [SQL]
excerpt: "本文旨在快速回顾 SQL 的核心语法、重要概念以及面试中常见的高频考点。内容按模块组织，力求简明扼要，适合已有一定基础的复习使用。"
---

# SQL 语法与知识点复习（面试向）

本文旨在快速回顾 SQL 的核心语法、重要概念以及面试中常见的高频考点。内容按模块组织，力求简明扼要，适合已有一定基础的同学复习使用。

---

## 1. SQL 分类

| 类型 | 全称 | 常见命令 | 说明 |
|------|------|----------|------|
| **DDL** | Data Definition Language | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | 定义或修改数据库对象（表、索引、视图等） |
| **DML** | Data Manipulation Language | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | 操作表中数据 |
| **DCL** | Data Control Language | `GRANT`, `REVOKE` | 控制访问权限 |
| **TCL** | Transaction Control Language | `COMMIT`, `ROLLBACK`, `SAVEPOINT` | 事务管理 |

---

## 2. 查询基础（DQL）

### 2.1 SELECT 语法顺序（逻辑执行顺序）
```sql
SELECT [DISTINCT] 字段, 聚合函数
FROM 表
[JOIN ...]
[WHERE 条件]
[GROUP BY 分组字段]
[HAVING 分组后条件]
[ORDER BY 排序字段 [ASC|DESC]]
[LIMIT {[offset,] row_count | row_count OFFSET offset}]
```
**执行顺序**：  
`FROM` → `JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `DISTINCT` → `ORDER BY` → `LIMIT`

### 2.2 WHERE 与 HAVING 区别
- `WHERE`：在分组前过滤，不能使用聚合函数。
- `HAVING`：在分组后过滤，可以使用聚合函数。

### 2.3 NULL 的处理
- `NULL` 代表未知，任何与 `NULL` 的算术比较结果均为 `NULL`（即 false）。
- 判断空：`IS NULL` / `IS NOT NULL`，不能用 `= NULL`。
- 聚合函数通常忽略 `NULL`（`COUNT(*)` 除外）。

---

## 3. 多表连接（JOIN）

- **INNER JOIN**：只返回两表匹配的行。
- **LEFT JOIN** / **RIGHT JOIN**：返回左（右）表所有行，右（左）表无匹配则填充 NULL。
- **FULL OUTER JOIN**：MySQL 不直接支持，可用 `UNION` 模拟。
- **CROSS JOIN**：笛卡尔积，慎用。

**注意事项**：
- 连接条件尽量用 `ON`，过滤条件用 `WHERE`，逻辑清晰且可能影响性能。
- 多表连接时注意表别名，避免字段歧义。

---

## 4. 子查询

- **标量子查询**：返回单个值，可用在 `SELECT`、`WHERE` 等。
- **行子查询**：返回一行多列，用 `=`、`IN` 等。
- **表子查询**：返回多行多列，常用于 `FROM` 子句（派生表）。
- **EXISTS / NOT EXISTS**：常用于判断存在性，比 `IN` 高效（尤其子查询表大时），因为可以提前终止。

**相关点**：
- 子查询可以用在 `SELECT`、`FROM`、`WHERE`、`HAVING`、`ORDER BY`。
- 注意子查询的嵌套深度，避免性能问题。

---

## 5. 集合操作（UNION / INTERSECT / EXCEPT）

- **UNION**：合并两个结果集，自动去重。`UNION ALL` 不去重。
- **INTERSECT**：返回共同行（MySQL 不支持，可用 `IN` + 子查询模拟）。
- **EXCEPT**（或 `MINUS`）：返回第一个结果集减去第二个（MySQL 不支持，可用 `NOT IN` 或 `LEFT JOIN` 模拟）。

**要求**：各结果集列数相同且数据类型兼容。

---

## 6. 常用函数

### 6.1 聚合函数
`COUNT(*)`、`COUNT(列)`、`SUM`、`AVG`、`MAX`、`MIN`  
注意：`COUNT(列)` 忽略 NULL，`COUNT(*)` 包含 NULL 行。

### 6.2 字符串函数
`CONCAT`、`SUBSTRING`、`LENGTH`/`CHAR_LENGTH`、`UPPER`/`LOWER`、`TRIM`、`REPLACE`、`LOCATE` 等。

### 6.3 日期函数
`NOW()`、`CURDATE()`、`DATE_ADD`、`DATEDIFF`、`YEAR()`、`DATE_FORMAT` 等。

### 6.4 数学函数
`ROUND`、`CEIL`、`FLOOR`、`ABS`、`MOD` 等。

### 6.5 窗口函数（MySQL 8.0+，面试重点）
- `ROW_NUMBER()`、`RANK()`、`DENSE_RANK()`、`NTILE()`
- 与 `OVER (PARTITION BY ... ORDER BY ...)` 配合使用，不减少行数。
- 常用于分组排序、求 Top N、移动平均等。

---

## 7. 数据定义（DDL）

### 7.1 数据类型
- 数值：`INT`、`DECIMAL`、`FLOAT`、`DOUBLE`
- 字符串：`CHAR`（定长）、`VARCHAR`（变长）、`TEXT`、`BLOB`
- 日期时间：`DATE`、`TIME`、`DATETIME`、`TIMESTAMP`
- 枚举：`ENUM`、`SET`

### 7.2 约束
- `PRIMARY KEY`（主键）：唯一且非空，一张表只有一个。
- `FOREIGN KEY`（外键）：保持引用完整性，注意影响性能。
- `UNIQUE`：值唯一，允许一个 NULL。
- `NOT NULL`：不能为空。
- `CHECK`：检查约束（MySQL 8.0.16+ 开始支持）。
- `DEFAULT`：默认值。

### 7.3 索引
- 目的：加快查询速度，但会降低写操作性能。
- 类型：`B-Tree`（默认）、`Hash`（Memory 引擎）、`Fulltext`、`R-Tree`（空间索引）。
- 创建：`CREATE INDEX idx_name ON table (col1, col2)`。
- 复合索引最左前缀原则：查询条件必须使用索引的最左列，索引才会生效。
- 索引失效场景：
  - 对索引列使用函数或计算（`WHERE YEAR(date) = 2020`）
  - 隐式类型转换
  - 使用 `!=` 或 `<>`（有时不一定失效，取决于优化器）
  - `LIKE` 以通配符开头（`'%abc'`）
  - 使用 `OR` 且左右列不是同一索引
  - 数据分布特殊（优化器认为全表扫描更快）

---

## 8. 视图

- 虚拟表，不存储数据，只保存定义。
- 作用：简化复杂查询、增强安全性（隐藏敏感字段）。
- 更新视图有限制：若视图包含聚合、`DISTINCT`、`GROUP BY`、`UNION` 等，一般不可更新。

---

## 9. 存储过程与函数

- **存储过程**：可以包含多条 SQL，支持输入输出参数，用 `CALL` 调用。
- **函数**：必须有返回值，用于表达式计算。
- 优点：减少网络流量，封装业务逻辑；缺点：调试困难，移植性差。

**注意**：不要过度使用，否则影响应用扩展性。

---

## 10. 触发器

- 自动执行：在 `INSERT`、`UPDATE`、`DELETE` 操作前后触发。
- 每行触发（`FOR EACH ROW`）。
- 用途：审计、数据一致性维护。
- 缺点：隐式逻辑，不易排查，可能影响性能。

---

## 11. 事务与并发控制

### 11.1 ACID 特性
- **原子性**：事务要么全做，要么全不做。
- **一致性**：事务前后数据完整性约束一致。
- **隔离性**：并发事务互不干扰。
- **持久性**：提交后永久保存。

### 11.2 事务隔离级别（从低到高）
| 隔离级别 | 脏读 | 不可重复读 | 幻读 |
|----------|------|------------|------|
| READ UNCOMMITTED | 可能 | 可能 | 可能 |
| READ COMMITTED   | 否   | 可能 | 可能 |
| REPEATABLE READ  | 否   | 否   | 可能（MySQL InnoDB 通过 MVCC + Next-Key Lock 可防止幻读） |
| SERIALIZABLE     | 否   | 否   | 否   |

- MySQL 默认：`REPEATABLE READ`。
- Oracle / PostgreSQL 默认：`READ COMMITTED`。

### 11.3 并发问题
- **脏读**：读到其他事务未提交的数据。
- **不可重复读**：同一事务内两次读取同一数据，结果不同（因其他事务已提交修改）。
- **幻读**：同一事务内两次查询，结果集行数不同（其他事务插入/删除）。

### 11.4 锁机制
- **共享锁（S锁）**：读锁，允许多个事务同时读，阻止写。
- **排他锁（X锁）**：写锁，阻止其他事务读写。
- **行锁**、**表锁**、**间隙锁（Gap Lock）**：InnoDB 在 RR 级别下使用 Next-Key Lock（行锁+间隙锁）防止幻读。
- 死锁：两个事务互相等待对方释放锁，数据库会自动检测并回滚一个事务。

---

## 12. 性能优化要点

1. **合理使用索引**：为频繁查询的列、连接条件、排序分组列建索引；避免过多索引。
2. **避免 SELECT \***：只取需要的列。
3. **使用 EXISTS 替代 IN**（子查询数据量大时）。
4. **分页优化**：大偏移量时，`LIMIT 100000,20` 很慢，可通过子查询先获取主键再关联。
5. **分析慢查询**：开启慢查询日志，使用 `EXPLAIN` 分析执行计划（关注 `type`、`key`、`rows`、`Extra` 等）。
6. **数据类型优化**：使用合适的数据类型，如用 `INT` 存 IP，`CHAR` 定长优于 `VARCHAR` 等。
7. **读写分离、分库分表**：应对大数据量。
8. **避免在 WHERE 中对列进行函数操作**，导致索引失效。
9. **批量操作**：使用 `INSERT INTO ... VALUES (...), (...)` 代替多条 INSERT。

---

## 13. 常见面试题点

- **三值逻辑**：`NULL` 的处理，与 `NULL` 比较的结果是 `UNKNOWN`。
- **COUNT(*) 与 COUNT(列) 的区别**。
- **HAVING 与 WHERE 的执行顺序**。
- **UNION 和 UNION ALL 的区别**。
- **主键、唯一索引、普通索引的区别**。
- **最左前缀原则**。
- **事务隔离级别的选择及实现原理（MVCC、锁）**。
- **如何避免死锁**：按固定顺序访问资源，减少锁持有时间。
- **存储过程与函数的区别**。
- **视图的优缺点**。
- **CHAR 与 VARCHAR 的区别**（定长/变长、存储开销、检索效率）。
- **JOIN 与子查询的优劣**。
- **三大范式**：1NF（原子列）、2NF（消除部分依赖）、3NF（消除传递依赖），以及反范式化的应用场景。
- **数据库设计中的索引选择**。
- **数据库优化从哪些层面入手**（SQL、索引、表结构、硬件、架构）。

---

## 14. 常用元数据查询

- 查看所有表：`SHOW TABLES;`
- 查看表结构：`DESC table_name;` 或 `SHOW COLUMNS FROM table_name;`
- 查看索引：`SHOW INDEX FROM table_name;`
- 查看建表语句：`SHOW CREATE TABLE table_name;`
- 查看当前数据库：`SELECT DATABASE();`

---

## 15. 注意事项总结

- **SQL 注入**：永远不要直接拼接用户输入，使用参数化查询或 ORM。
- **备份**：生产环境操作前先备份。
- **测试**：在大表上执行 DDL（如加索引、删列）需谨慎，可能会锁表导致服务中断（可使用工具如 pt-online-schema-change）。
- **字符集与排序规则**：统一使用 `utf8mb4` 避免乱码和 emoji 支持问题。

---

希望这份提纲能帮助你快速回顾 SQL 的核心知识点。面试中除了语法，更看重对原理的理解和实际场景的应用能力，建议结合具体案例深入思考。