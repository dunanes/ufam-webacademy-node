Alguns comandos pra testar os containeres MySQL

```mysql
mysql> create schema if not exists webacademy;
Query OK, 1 row affected (0.01 sec)

mysql> use webacademy;
Database changed
mysql> create table if not exists alunos (id bigint primary key auto_increment, nome varchar(100) not null);
Query OK, 0 rows affected (0.07 sec)

mysql> insert into alunos (nome) values ('Daniel Nunes');
Query OK, 1 row affected (0.04 sec)

mysql> select * from alunos;
+----+--------------+
| id | nome         |
+----+--------------+
|  1 | Daniel Nunes |
+----+--------------+
1 row in set (0.00 sec)
```
