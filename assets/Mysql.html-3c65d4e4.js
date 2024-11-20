import{_ as r,o as t,c as e,f as s}from"./app-942d725a.js";const n={},o=s('<h1 id="mysql基础" tabindex="-1"><a class="header-anchor" href="#mysql基础" aria-hidden="true">#</a> Mysql基础</h1><p>DBMS：数据库管理系统<br><strong>Mysql数据库的数据类型</strong><br>1.数字类型：int bigint tinyint double decimal(⻓度，⼩数点的位数)<br>2.字符串类型：char varchar text<br>3.⽇期类型：date datetime<br><strong>SQL分类：</strong><br>1.DDL:数据定义 create drop alter<br>2.DML:数据操作 insert update delete<br>3.DQL:数据查询 select<br>4.TPL(TCL):事务处理 commit rollback<br>5.DCL:数据控制语⾔ grant<br>6.CCL:指针控制语⾔ cursor</p><h2 id="一、事物" tabindex="-1"><a class="header-anchor" href="#一、事物" aria-hidden="true">#</a> 一、事物 :</h2><p>原子性：原子性就是最小单位，不可分割。事物中的所有元素必须作为一个整体提交或回滚<br>一致性：对事物的操作，状态必须是一致的，要么都成功，要么都失败<br>隔离性：两个事物之间是相互隔离的，互不干扰<br>持久性：一个事物成功完成后它对于数据库的改变是永久性的，事物的效果就会永久地保留在数据库中<br><strong>MySQL默认的事物隔离级别是：可重复读</strong><br><strong>第一种隔离级别：可序化</strong><br>序列化是最高的事物隔离级别，性能低，避免脏读，幻读，不可重复读。<br><strong>第二种隔离级别：可重复读</strong><br>可重复读是指在一个事务内，多次读同一个数据，在这个事物还未结束时，其它事物不能访问该数据。（可以防止脏读和不可重复读） <br><strong>第三种隔离级别：读已提交</strong><br>如果是一个读事物，则允许其他事物读写，如果是写事物，将会禁止其他事物访问该行数据，避免了脏读，但可能出现不可重复读，事务A事先读取了数据，事务B紧接着更新了数据，并提交了事务，而事务A再次读取该数据时，数据已经发生了改变。（可以避免脏读）<br><strong>第四种隔离级别：读未提交</strong><br>如果一个事物已经开始写数据，则另外一个事物不允许同时进行写操作，但允许其他事物读取此行数据，避免更新丢失，也就是事物B读取到了事物A未提交的数据。（最低隔离）<br><strong>脏读：<strong>脏读指的是一个事务读到了</strong>其他事务未提交的数据</strong><br>**幻读：**幻读指的是一个事务被其他事务插入或者删除的数据有影响，重点在于事务开始后，<strong>其他事务插入或删除了数据。</strong><br><strong>不可重复读：<strong>不可重复读指的是一个事务中多次读到同一条数据发生了变化，重点在于表中</strong>已经存在的数据被其他事务修改了</strong><br> 脏写 脏读 不可重复读 幻读<br> 读未提交 √ × × ×<br> 读已提交 √ √ × ×<br> 可重复度 √ √ √ ×<br> 可串行化 √ √ √ √</p><h2 id="二、约束" tabindex="-1"><a class="header-anchor" href="#二、约束" aria-hidden="true">#</a> 二、约束</h2><p>概念： 对表中的数据进行限定，保证数据的正确性、有效性和完整性。<br>1.主键约束<br>2.外键约束<br>3.⾮空约束<br>4.唯⼀约束<br>5.⾃增约束</p>',6),a=[o];function b(c,d){return t(),e("div",null,a)}const g=r(n,[["render",b],["__file","Mysql.html.vue"]]);export{g as default};
