import{_ as l,r as t,o as r,c as d,a as n,b as s,d as i,f as e}from"./app-314de074.js";const c={},o=e('<h1 id="mysql进阶" tabindex="-1"><a class="header-anchor" href="#mysql进阶" aria-hidden="true">#</a> Mysql进阶</h1><h1 id="一、mysql进阶" tabindex="-1"><a class="header-anchor" href="#一、mysql进阶" aria-hidden="true">#</a> 一、Mysql进阶</h1><h3 id="_1-1mysql基础" tabindex="-1"><a class="header-anchor" href="#_1-1mysql基础" aria-hidden="true">#</a> 1.1Mysql基础</h3><p>DBMS：数据库管理系统<br> Mysql数据库的数据类型<br> 1.数字类型：int bigint tinyint double decimal(⻓度，⼩数点的位数)<br> 2.字符串类型：char varchar text<br> 3.⽇期类型：date datetime<br> Mysql约束条件：为字段添加约束条件<br> 1.主键约束<br> 2.外键约束<br> 3.⾮空约束<br> 4.唯⼀约束<br> 5.⾃增约束<br> 6.默认约束<br> SQL：结构化查询语⾔，操作数据库<br> SQL分类：<br> 1.DDL:数据定义 create drop alter<br> 2.DML:数据操作 insert update delete<br> 3.DQL:数据查询 select<br> 4.TPL(TCL):事务处理 commit rollback<br> 5.DCL:数据控制语⾔ grant<br> 6.CCL:指针控制语⾔ cursor</p><h4 id="_7大语句" tabindex="-1"><a class="header-anchor" href="#_7大语句" aria-hidden="true">#</a> 7⼤语句：</h4>',5),u=n("br",null,null,-1),p=n("br",null,null,-1),v=n("br",null,null,-1),m=n("br",null,null,-1),b=n("br",null,null,-1),k=n("br",null,null,-1),g=n("br",null,null,-1),h=n("br",null,null,-1),y=n("br",null,null,-1),_=n("br",null,null,-1),q=n("br",null,null,-1),f={href:"https://www.nowcoder.com/exam/oj?page=1&tab=SQL%E7%AF%87&topicId=268",target:"_blank",rel:"noopener noreferrer"},S=n("br",null,null,-1),E=n("br",null,null,-1),x=n("br",null,null,-1),L=n("br",null,null,-1),w=e(`<h3 id="_1-2-视图" tabindex="-1"><a class="header-anchor" href="#_1-2-视图" aria-hidden="true">#</a> 1.2 视图</h3><p>视图：对查询语句（临时表）的封装，简化操作，操作视图跟操作表⼀样<br> 创建视图：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create view 视图名 as 查询语句; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除视图：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop view 视图名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使⽤视图：<br> 操作视图就跟表⼀样;</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#视图：View 封装查询语句
select p.title ptitle,p.img,a.* from t_pc p inner join t_pcall a on p.id=a.pid
#创建视图 字段名不能一致
create view pcview as select p.title ptitle,p.img,a.* from t_pc p inner join t_pcall a on p.id=a.pid
#查看视图 只有group by后面可以跟聚合函数 where不可以
select * from pcview where title like&#39;%1%&#39;
#删除视图
drop view pcview
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3触发器" tabindex="-1"><a class="header-anchor" href="#_1-3触发器" aria-hidden="true">#</a> 1.3触发器</h3><p><strong>触发器：满⾜⼀定的条件，就会⾃动执⾏SQL语句。</strong><br> trigger 触发器<br> 触发器的分类：1.表级触发器，监听表的变化 2.⾏级触发器，监听表中数据的变化<br> 触发器的操作类型：insert(配合after) update delete(配合before)<br> 触发器的时间：after before<br> 语法格式：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>新建触发器：
delimiter $
create trigger 触发器名称 before|after insert|update|delete on 表名 for each row 
begin
    ⾃动执⾏的SQL语句
end$; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除触发器：drop trigger 触发器名称;<br> 测试触发器：满⾜条件</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 触发器：满足指定的条件（1.时间 before after 2.操作⽅式 新增、修改、删除）
-- 触发器创建 监听t_pcall表的新增，如果新增了，就自动在t_pc 新增数据
-- NEW相当于添加时得一个对象
-- 1.创建触发器
delimiter $
create TRIGGER t_pcall_trigger before insert on t_pcall for each row
BEGIN
 insert into t_pc(id,img,auto,title)
values(NEW.imgs,NEW.pid,&#39;kz&#39;,&#39;自动填充&#39;);
 insert into t_pc(id,img,auto,title)
values(NEW.imgs,NEW.pid,&#39;yy&#39;,&#39;可增加多条;隔开&#39;);
END$
-- 2.触发器 测试 
INSERT into t_pcall(pid,imgs) values(1231223,&quot;111&quot;);
-- 3.查询
select * from t_pc;
-- 4.删除触发器
drop TRIGGER t_pcall_trigger;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4sql语法" tabindex="-1"><a class="header-anchor" href="#_1-4sql语法" aria-hidden="true">#</a> 1.4SQL语法</h3><p>变量、分⽀、循环<br> 变量：mysql数据库中有3种变量，<br> 第⼀种：系统变量 @@变量名不能⾃定义，只能⽤系统提供<br> 第⼆种：⽤户变量 @变量名，可以直接 set @变量名=值<br> 第三种：局部变量（⾃定义变量）只能定义在函数、存储过程中。DECLARE 变量名 数据类型 ;</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查看所有全局系统变量  
show global variables;
-- 查询系统变量的值  
select @@version;
-- 用户变量，@开头  
set @user1 =1;  
select @user1;  

-- 函数+局部变量  
delimiter $  
create FUNCTION fun_test(num int) RETURNS int  
DETERMINISTIC  
BEGIN  
 -- 定义局部变量  
 DECLARE n int DEFAULT 100;  
 RETURN n+num;  
end$  
-- 使用函数  
select fun_test(20)      
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311002655.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_1-5自定义函数" tabindex="-1"><a class="header-anchor" href="#_1-5自定义函数" aria-hidden="true">#</a> 1.5自定义函数</h3><p>必须有返回值<br> 创建函数： function</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>delimiter $  
create function 函数名(参数名 数据类型,……) returns 数据类型   
begin  
DETERMINISTIC  
代码逻辑   
 return 返回值; 
end$  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除函数：drop function 函数名;<br> 使⽤函数：直接⽤，⽤在select</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 函数实现特定功能的代码块  
-- 创建函数
delimiter $
create FUNCTION f_add(num1 int,num2 int) RETURNS int  
DETERMINISTIC  
BEGIN  
 RETURN num1+num2;  
end$
-- 使⽤函数  
select f_add(1,1);
select f_add(id,100) from t_account;
-- 删除函数  
drop FUNCTION f_add;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5存储过程" tabindex="-1"><a class="header-anchor" href="#_1-5存储过程" aria-hidden="true">#</a> 1.5存储过程</h3><p>关键字：PROCEDURE procedure 程序 call 执行<br> 存储过程：实现特定功能的SQL语句块，其实就是⼀种特殊的函数，没有返回值函数<br> 参数类型有三种：<br><strong>1.输⼊参数 -只读 in</strong><br> 2.输出参数 -只写 out<br> 3.输⼊输出参数 -读写 inout<br> 创建存储过程</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create PROCEDURE 存储过程名称(参数类型 参数名 数据类型,……)   
begin 
实现逻辑处理   
end 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使⽤存储过程：call 存储过程名称(参数变量)<br> 删除存储过程：drop PROCEDURE 存储过程名称</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 存储过程：一种特殊的函数，没有返回值的函数，实现特定功能的SQL语句块  
-- 1.创建存储过程  
delimiter $  
create PROCEDURE p_add(in num1 int,in num2 int,out num3 int)
BEGIN
 set num3=num1+num2;
end$
-- 2.设置用户变量  
set @n = 0;
-- 3.调用存储过程 输入 输入 输出  
call p_add(1,1,@n);
-- 查询⽤户变量的内容  
select @n;

-- 1.定义存储过程，实现指定数量的账号数据添加  
delimiter $
create PROCEDURE p_accountadd(in num int)
BEGIN
 DECLARE i int DEFAULT 0;
 while i&lt;num
 DO
 set i=i+1;                               -- concat合并
 insert into t_pcall(pid,imgs) values(CONCAT(&#39;1851599&#39;,i),CONCAT(&#39;6666&#39;,i));
 end WHILE;
end$
-- 2.执行
call p_accountadd(100);  
-- 3.查看
select * from t_pcall;  
-- 删除存储过程
drop PROCEDURE p_add;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6索引" tabindex="-1"><a class="header-anchor" href="#_1-6索引" aria-hidden="true">#</a> 1.6索引</h3><p>索引：是⼀种可以提升查询效率的结构，⽬的就是为了提⾼查询的效率。<br> 如果把书⽐喻成表，那么书的⽬录就是索引。<br> 索引可以提⾼查询效率（⽣效），会影响新增、删除、修改的效率（涉及到索引字段）<br><strong>每个索引，都是⼀张表。实际上，⼀张表的索引的数量不能超过32个</strong><br> 索引的语法格式：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>创建索引：create  index 索引名 on 表名(字段名) ; （id性能最高）
查看索引是否⽣效：explain 查询语句 where 索引字段=值; 
删除索引：alter table 表名 drop index 索引名; 
查看表上的索引：show index from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>索引的分类：<br><strong>1.主键索引</strong><br><strong>2.普通索引</strong><br><strong>3.唯⼀索引</strong><br><strong>4.联合索引（复合索引）</strong><br><strong>没有索引之前：</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311002735.png" alt="image.png" loading="lazy"><br><strong>创建索引之后：</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311002943.png" alt="image.png" loading="lazy"><br> 由于数据不多，所以性能提升并不明显<br><strong>查看是否存在索引：</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311003034.png" alt="1" loading="lazy"><br> explain的结果说明：<br> type所显示的是查询使⽤了哪种类型，type包含的类型包括如下图所示的⼏种，从好到差依次是<br><strong>system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; all</strong><br><strong>查看表上的索引：</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show index from t_pcall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311003101.png" alt="image.png" loading="lazy"><strong>联合索引，最左侧原则：</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311003201.png" alt="image.png" loading="lazy"><br><strong>只有最左侧被当为索引</strong><br> 那么为什么还要创建联合索引呢？？<br><strong>减少开销。建一个联合索引(col1,col2,col3)，实际相当于建了(col1),(col1,col2),(col1,col2,col3)三个索引。每多一个索引，都会增加写操作的开销和磁盘空间的开销。对于大量数据的表，使用联合索引会大大的减少开销！</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>
-- 索引：提升查询效率  
-- 1.将原有表中的数据再次添加   
insert into t_pcall select * from t_pcall
select count(*) from t_pcall;
-- 2.没有索引的时候  
select * from t_pcall where \`title\`=&#39;第二十七章 有备无患&#39;;
-- 3.创建索引  
create index i_pcall on t_pcall(\`title\`);
-- 4.有索引之后  
select * from t_pcall where \`title\`=&#39;第二十七章 有备无患&#39;;
-- 5.分析查询语句，是否存在索引  
EXPLAIN select * from t_pcall where \`title\`=&#39;66664785&#39;;
-- 6.删除索引  
alter table t_pcall drop index i_pcall;
-- 7.查看表上的索引  
show index from t_pcall;
-- 8.创建联合索引  
create index i_pcallall on t_pcall(title,imgs);
-- 最左前缀原则  
EXPLAIN select * from t_pcall where title=&#39;第二十七章 有备无患&#39;;  
EXPLAIN select * from t_pcall where imgs=&#39;https://www.um16.cn//info/1/27.html&#39;;
EXPLAIN select * from t_pcall where id=100;
-- 覆盖索引 索引表，不用查询原表
select title,imgs from t_pcall where title=&#39;第二十七章 有备无患&#39;  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>explain的结果分析：  
id  
id相同，执⾏顺序由上⾄下  
id不同，如果是⼦查询，id的序号会递增，id值越⼤优先级越⾼，越先被执⾏  
id相同不同，同时存在 id相同的可以认为是⼀组，同⼀组中从上往下执⾏，所有组中id⼤的优先执⾏  
type  
type所显示的是查询使⽤了哪种类型，type包含的类型包括如下图所示的⼏种，从好到差依次是  
system &gt; const &gt; eq_ref &gt; ref &gt; range &gt; index &gt; all  
system 表只有⼀⾏记录（等于系统表），这是const类型的特列，平时不会出现，这个也可以忽略不计  
const 表示通过索引⼀次就找到了，const⽤于⽐较primary key 或者unique索引。因为只匹配⼀⾏数  
据，所以很快。如将主键置于where列表中，MySQL就能将该查询转换为⼀个常量。  
eq_ref 唯⼀性索引扫描，对于每个索引键，表中只有⼀条记录与之匹配。常⻅于主键或唯⼀索引扫描  
ref ⾮唯⼀性索引扫描，返回匹配某个单独值的所有⾏，本质上也是⼀种索引访问，它返回所有匹配某个单  
独值的⾏，然⽽，它可能会找到多个符合条件的⾏，所以他应该属于查找和扫描的混合体。  
range 只检索给定范围的⾏，使⽤⼀个索引来选择⾏，key列显示使⽤了哪个索引，⼀般就是在你的where  
语句中出现between、&lt; 、&gt;、in等的查询，这种范围扫描索引⽐全表扫描要好，因为它只需要开始于索引  
的某⼀点，⽽结束于另⼀点，不⽤扫描全部索引。  
index Full Index Scan，Index与All区别为index类型只遍历索引树。这通常⽐ALL快，因为索引  
⽂件通常⽐数据⽂件⼩。（也就是说虽然all和Index都是读全表，但index是从索引中读取的，⽽all是  
从硬盘读取的）  
all Full Table Scan 将遍历全表以找到匹配的⾏  
possible_keys 和 key  
possible_keys 显示可能应⽤在这张表中的索引，⼀个或多个。查询涉及到的字段上若存在索引，则该索  
引将被列出，但不⼀定被查询实际使⽤。  
key实际使⽤的索引，如果为NULL，则没有使⽤索引。（可能原因包括没有建⽴索引或索引失效）  
key_len  
表示索引中使⽤的字节数，可通过该列计算查询中使⽤的索引的⻓度，在不损失精确性的情况下，⻓度越短  
越好。  
rows  
根据表统计信息及索引选⽤情况，⼤致估算出找到所需的记录所需要读取的⾏数，也就是说，⽤的越少越好  
Extra  
Using filesort  
说明mysql会对数据使⽤⼀个外部的索引排序，⽽不是按照表内的索引顺序进⾏读取。MySQL中⽆法利⽤索  
引完成的排序操作称为“⽂件排序”。  
Using temporary  
使⽤了⽤临时表保存中间结果，MySQL在对查询结果排序时使⽤临时表。常⻅于排序order by和分组查询  
group by。  
Using index  
表示相应的select操作中使⽤了覆盖索引（Covering Index），避免访问了表的数据⾏，效率不错。如  
果同时出现using where，表明索引被⽤来执⾏索引键值的查找；如果没有同时出现using where，表明  
索引⽤来读取数据⽽⾮执⾏查找动作。  
Using join buffer  
表明使⽤了连接缓存,⽐如说在查询的时候，多表join的次数⾮常多，那么将配置⽂件中的缓冲区的join  
buffer调⼤⼀些  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、sql优化" tabindex="-1"><a class="header-anchor" href="#二、sql优化" aria-hidden="true">#</a> 二、SQL优化</h2><h2 id="注-springboot配置sql监控" tabindex="-1"><a class="header-anchor" href="#注-springboot配置sql监控" aria-hidden="true">#</a> 注：SpringBoot配置sql监控</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8888</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> dev
  <span class="token key atrule">mvc</span><span class="token punctuation">:</span>
    <span class="token key atrule">pathmatch</span><span class="token punctuation">:</span>
      <span class="token key atrule">matching-strategy</span><span class="token punctuation">:</span> ant_path_matcher
<span class="token comment"># 全局日期格式</span>
  <span class="token key atrule">jackson</span><span class="token punctuation">:</span>
    <span class="token key atrule">date-format</span><span class="token punctuation">:</span> yyyy<span class="token punctuation">-</span>MM<span class="token punctuation">-</span>dd HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss

  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>3306/code<span class="token punctuation">?</span>serverTimezone=Asia/Shanghai
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> kzkzkz
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
    <span class="token comment">########## Druid连接池 配置 ##########</span>
    <span class="token key atrule">druid</span><span class="token punctuation">:</span>
      <span class="token comment"># 配置初始化大小、最小、最大</span>
      <span class="token key atrule">initial-size</span><span class="token punctuation">:</span> <span class="token number">5</span>
      <span class="token key atrule">minIdle</span><span class="token punctuation">:</span> <span class="token number">10</span>
      <span class="token key atrule">max-active</span><span class="token punctuation">:</span> <span class="token number">20</span>
      <span class="token comment"># 配置获取连接等待超时的时间(单位：毫秒)</span>
      <span class="token key atrule">max-wait</span><span class="token punctuation">:</span> <span class="token number">60000</span>
      <span class="token comment"># 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒</span>
      <span class="token key atrule">time-between-eviction-runs-millis</span><span class="token punctuation">:</span> <span class="token number">2000</span>
      <span class="token comment"># 配置一个连接在池中最小生存的时间，单位是毫秒</span>
      <span class="token key atrule">min-evictable-idle-time-millis</span><span class="token punctuation">:</span> <span class="token number">600000</span>
      <span class="token key atrule">max-evictable-idle-time-millis</span><span class="token punctuation">:</span> <span class="token number">900000</span>
      <span class="token comment"># 用来测试连接是否可用的SQL语句,默认值每种数据库都不相同,这是mysql</span>
      <span class="token key atrule">validationQuery</span><span class="token punctuation">:</span> select 1
      <span class="token comment"># 应用向连接池申请连接，并且testOnBorrow为false时，连接池将会判断连接是否处于空闲状态，如果是，则验证这条连接是否可用</span>
      <span class="token key atrule">testWhileIdle</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment"># 如果为true，默认是false，应用向连接池申请连接时，连接池会判断这条连接是否是可用的</span>
      <span class="token key atrule">testOnBorrow</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token comment"># 如果为true（默认false），当应用使用完连接，连接池回收连接的时候会判断该连接是否还可用</span>
      <span class="token key atrule">testOnReturn</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token comment"># 是否缓存preparedStatement，也就是PSCache。PSCache对支持游标的数据库性能提升巨大，比如说oracle</span>
      <span class="token key atrule">poolPreparedStatements</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment"># 要启用PSCache，必须配置大于0，当大于0时， poolPreparedStatements自动触发修改为true，</span>
      <span class="token comment"># 在Druid中，不会存在Oracle下PSCache占用内存过多的问题，</span>
      <span class="token comment"># 可以把这个数值配置大一些，比如说100</span>
      <span class="token key atrule">maxOpenPreparedStatements</span><span class="token punctuation">:</span> <span class="token number">20</span>
      <span class="token comment"># 连接池中的minIdle数量以内的连接，空闲时间超过minEvictableIdleTimeMillis，则会执行keepAlive操作</span>
      <span class="token key atrule">keepAlive</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token comment"># Spring 监控，利用aop 对指定接口的执行时间，jdbc数进行记录</span>
      <span class="token key atrule">aop-patterns</span><span class="token punctuation">:</span> <span class="token string">&quot;com.feri.boot.dao.*&quot;</span>
      <span class="token comment">########### 启用内置过滤器（第一个 stat必须，否则监控不到SQL）##########</span>
      <span class="token key atrule">filters</span><span class="token punctuation">:</span> stat<span class="token punctuation">,</span>wall<span class="token punctuation">,</span>log4j2
      <span class="token comment"># 自己配置监控统计拦截的filter</span>
      <span class="token key atrule">filter</span><span class="token punctuation">:</span>
        <span class="token comment"># 开启druiddatasource的状态监控</span>
        <span class="token key atrule">stat</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">db-type</span><span class="token punctuation">:</span> mysql
          <span class="token comment"># 开启慢sql监控，超过2s 就认为是慢sql，记录到日志中</span>
          <span class="token key atrule">log-slow-sql</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">slow-sql-millis</span><span class="token punctuation">:</span> <span class="token number">2000</span>
        <span class="token comment"># 日志监控，使用slf4j 进行日志输出</span>
        <span class="token key atrule">slf4j</span><span class="token punctuation">:</span>
          <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">statement-log-error-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">statement-create-after-log-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">statement-close-after-log-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">result-set-open-after-log-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
          <span class="token key atrule">result-set-close-after-log-enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
      <span class="token comment">########## 配置WebStatFilter，用于采集web关联监控的数据 ##########</span>
      <span class="token key atrule">web-stat-filter</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                   <span class="token comment"># 启动 StatFilter</span>
        <span class="token key atrule">url-pattern</span><span class="token punctuation">:</span> /* <span class="token comment"># 过滤所有url</span>
        <span class="token key atrule">exclusions</span><span class="token punctuation">:</span> <span class="token string">&quot;*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*&quot;</span> <span class="token comment"># 排除一些不必要的url</span>
        <span class="token key atrule">session-stat-enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>       <span class="token comment"># 开启session统计功能</span>
        <span class="token key atrule">session-stat-max-count</span><span class="token punctuation">:</span> <span class="token number">1000</span> <span class="token comment"># session的最大个数,默认100</span>
      <span class="token comment">########## 配置StatViewServlet（监控页面），用于展示Druid的统计信息 ##########</span>
      <span class="token key atrule">stat-view-servlet</span><span class="token punctuation">:</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>                   <span class="token comment"># 启用StatViewServlet</span>
        <span class="token key atrule">url-pattern</span><span class="token punctuation">:</span> /druid/* <span class="token comment"># 访问内置监控页面的路径，内置监控页面的首页是/druid/index.html</span>
        <span class="token key atrule">reset-enable</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>              <span class="token comment"># 不允许清空统计数据,重新计算</span>
        <span class="token key atrule">login-username</span><span class="token punctuation">:</span> root <span class="token comment"># 配置监控页面访问密码</span>
        <span class="token key atrule">login-password</span><span class="token punctuation">:</span> <span class="token number">666666</span>
        <span class="token key atrule">allow</span><span class="token punctuation">:</span> 127.0.0.1 <span class="token comment"># 允许访问的地址，如果allow没有配置或者为空，则允许所有访问</span>
        <span class="token key atrule">deny</span><span class="token punctuation">:</span> <span class="token comment"># 拒绝访问的地址，deny优先于allow，如果在deny列表中，就算在allow列表中，也会被拒绝</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),I={href:"http://localhost:8888/druid/sql.html",target:"_blank",rel:"noopener noreferrer"},N=e(`<h3 id="_2-1-sql执行顺序" tabindex="-1"><a class="header-anchor" href="#_2-1-sql执行顺序" aria-hidden="true">#</a> 2.1 SQL执⾏顺序</h3><p>Mysql中⼀个查询语句的执⾏顺序：<br> select distinct *或字段 from 表名 inner|left|right join 表名 on 条件 where 条件 group by 字段<br> having 条件 order by 字段 asc|desc limit 起始⾏索引,数量<br> 依次出现的关键词的顺序：<br><strong>a.select</strong><br><strong>b.distinct (去重)</strong><br><strong>c.from</strong><br><strong>d.join</strong><br> possible_keys 和 key<br> possible_keys 显示可能应⽤在这张表中的索引，⼀个或多个。查询涉及到的字段上若存在索引，则该索<br> 引将被列出，但不⼀定被查询实际使⽤。<br> key实际使⽤的索引，如果为NULL，则没有使⽤索引。（可能原因包括没有建⽴索引或索引失效）<br> key_len<br> 表示索引中使⽤的字节数，可通过该列计算查询中使⽤的索引的⻓度，在不损失精确性的情况下，⻓度越短<br> 越好。<br> rows<br> 根据表统计信息及索引选⽤情况，⼤致估算出找到所需的记录所需要读取的⾏数，也就是说，⽤的越少越好<br> Extra<br> Using filesort<br> 说明mysql会对数据使⽤⼀个外部的索引排序，⽽不是按照表内的索引顺序进⾏读取。MySQL中⽆法利⽤索<br> 引完成的排序操作称为“⽂件排序”。<br> Using temporary<br> 使⽤了⽤临时表保存中间结果，MySQL在对查询结果排序时使⽤临时表。常⻅于排序order by和分组查询<br> group by。<br> Using index<br> 表示相应的select操作中使⽤了覆盖索引（Covering Index），避免访问了表的数据⾏，效率不错。如<br> 果同时出现using where，表明索引被⽤来执⾏索引键值的查找；如果没有同时出现using where，表明<br> 索引⽤来读取数据⽽⾮执⾏查找动作。<br> Using join buffer<br> 表明使⽤了连接缓存,⽐如说在查询的时候，多表join的次数⾮常多，那么将配置⽂件中的缓冲区的join<br> buffer调⼤⼀些</p><p><strong>e.on</strong><br><strong>f.where</strong><br><strong>g.group by</strong><br><strong>h.having</strong><br><strong>i.order by</strong><br><strong>j.limit</strong><br> Mysql中的执⾏顺序：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1.from   
笛卡尔积计算 ⽣成虚拟表v1   笛卡尔积计算()  
2.on   
过滤数据 再次⽣成虚拟表v2 
3.join 
添加外部数据 v3 
4.where 
条件过滤 v4 
5.group by 
分组 
6.聚合函数 
avg max min sum count 
7.having 
条件过滤，可以使⽤聚合函数的结果或使⽤聚合函数 
8.select 
查询需要的字段 
9.distinct 
去重重复结果 
10.order by 
排序 
11.limit 
分⻚ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),T=n("br",null,null,-1),R=n("strong",null,"笛卡尔积乘积指在数学上，两个",-1),D={href:"https://so.csdn.net/so/search?q=%E9%9B%86%E5%90%88&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},Q=n("strong",null,"集合",-1),C=n("strong",null,"X和Y的笛卡尔积 (Cartesian product)，又称直积，表示 X x Y，第一个对象是 X 的成员而第二个对象是 Y 的所有可能有序对的其中一个成员。",-1),M=e(`<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>eg1:
	假设集合A = {a,b}，集合B = {0,1,2}，则两个集合的笛卡尔积为：
    {(a,0),(a,1),(a,2),(b,0),(b,1),(b,2)}
eg2:
	设A,B为集合，用A中元素为第一元素，B中元素为第二元素构成有序对，
	所有这样的有序对组成的集合叫做A与B的笛卡尔积，记作AxB.
    笛卡尔积的符号化为：
    A×B={(x,y)|x∈A ∧ y∈B}
    例如，A = {a,b}, B = {0,1,2}，则
    A×B = {(a, 0), (a, 1), (a, 2), (b, 0), (b, 1), (b, 2)}
    B×A = {(0, a), (0, b), (1, a), (1, b), (2, a), (2, b)}
    转载： http://t.csdn.cn/38tIL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL优化三部曲：定位、分析、解决开发中遇到问题解决三部曲：<br> **定位（⽇志、debug） **<br> **分析（根据异常，和定位的点，去分析代码） **<br> **解决（根据分析结果，因果而异） **</p><h3 id="_2-2-sql优化之定位" tabindex="-1"><a class="header-anchor" href="#_2-2-sql优化之定位" aria-hidden="true">#</a> 2.2 SQL优化之定位</h3><p>定位：找到执⾏慢的sql语句<br> ⽅式，任选其⼀：<br><strong>1.Mysql的慢查询⽇志</strong><br> 在mysql的配置⽂件中：windows:my.ini linux:my.cnf<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311003244.png" alt="image.png" loading="lazy"><br> 每次只需要，查看slow.log⽇志⽂件，记录就是执⾏超过2秒的sql语句<br><strong>2.Spring AOP实现查询语句的记录</strong><br> aop的环绕通知，去记录查询的sql语句的执⾏时间，如果执⾏超过2秒，就记录sql语句<br><strong>3.Druid的SQL监控</strong><br> 配置Druid的SQL监控，获取执⾏慢的SQL语句<br><strong>4.借助⼯具，软件实现</strong><br> 阿⾥云-Mysql等等</p><h3 id="_2-3-sql优化之分析" tabindex="-1"><a class="header-anchor" href="#_2-3-sql优化之分析" aria-hidden="true">#</a> 2.3 SQL优化之分析</h3><p>分析：根据执⾏慢的SQL语句，进⾏分析，找到慢的原因<br> 汇总⼀些常⻅：</p><blockquote><p>1.SQL语句有业务逻辑，影响性能<br> 2.SQL语句，联合查询的多表关系不是最短路径<br> 3.SQL语句索引失效<br> 4.SQL语句查询条件的顺序不对<br> 5.Mysql并发量过⼤<br> 6.SQL语句对应的表的数据量太⼤<br> 7.SQL语句太⻓<br><strong>8.SQL语句查询条件函数计算</strong></p></blockquote><h3 id="_2-4-sql优化之解决" tabindex="-1"><a class="header-anchor" href="#_2-4-sql优化之解决" aria-hidden="true">#</a> 2.4 SQL优化之解决</h3><p>解决：对号⼊座，尝试处理<br><strong>1.SQL语句有业务逻辑，影响性能</strong><br> 拆分业务逻辑，可以把逻辑放到Java代码中解决，改SQL语句<br><strong>2.SQL语句，联合查询的多表关系不是最短路径</strong><br> 分析涉及到的多表关系，查看能不能找到最短路径，⼲掉没⽤的表连接<br><strong>3.SQL语句索引失效</strong><br> 想办法让索引⽣效，⽐如合理设计索引，采⽤联合索引，使⽤最左前缀原则，索引的数量、索引的字段<br><strong>4.SQL语句查询条件的顺序不对</strong><br> on先执⾏，再执⾏where,最后执⾏having<br> 所以可以把有些查询条件放到on那⾥进⾏筛选<br><strong>5.Mysql并发量过⼤</strong><br> 2种⽅案：</p><p>1.舍弃连接，数据库连接池，设置最⼤连接<br> 2.搭建Mysql的集群（多主多从）-中间件解决 （Mycat、Sharding-Jdbc）<br><strong>6.SQL语句对应的表的数据量太⼤</strong><br> 实现数据分⽚，采⽤第三⽅技术：Sharding-Jdbc<br><strong>7.SQL语句太⻓</strong><br> 拆分为多个sql语句，在Java代码中整合数据<br><strong>8.SQL语句查询条件函数计算</strong><br> 避免在sql的查询条件中使⽤函数进⾏计算处理，可以考虑Java代码中实现数据处理<br> 结合项⽬模块</p><h3 id="_2-5-常用的sql优化方案" tabindex="-1"><a class="header-anchor" href="#_2-5-常用的sql优化方案" aria-hidden="true">#</a> 2.5 常⽤的SQL优化⽅案</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1、你必须选择记录条数最少的表作为基础表  
from 是从前往后检索的，所以要最少记录的表放在最前⾯   
2、采⽤⾃下⽽上的顺序解析WHERE⼦句,根据这个原理,表之间的连接必须写在其他WHERE条件之前, 那些  
可以过滤掉最⼤数量记录的条件必须写在WHERE⼦句的末尾。同时在链接的表中能过滤的就应该先进⾏过  
滤。   
where是从后往前检索，所以能过滤最多数据的条件应放到最后。  
3、SELECT⼦句中避免使⽤ &#39;*&#39;  
4、尽量多使⽤COMMIT  
5、计算记录条数时候，第⼀快：count(索引列)，第⼆快：count(*)  
6、⽤WHERE⼦句替换HAVING⼦句  
7、通过内部函数代替⾃定义函数提⾼SQL效率  
8、使⽤表的别名(Alias)  
9、⽤EXISTS替代IN  
10、⽤NOT EXISTS替代NOT IN  
11、⽤表连接替换EXISTS  
12、⽤索引提⾼效率  
13、尽量避免在索引列上使⽤计算，  
包括在SELECT后⾯ WHERE后⾯等任何地⽅，因为在索引列上计算会导致索引失效。  
14、避免在索引列上使⽤NOT  
在索引列使⽤not会导致索引失效。  
15、⽤&gt;=替代&gt;  
16、⽤UNION替换OR (适⽤于索引列)  
17、⽤IN来替换OR  
18、避免在索引列上使⽤IS NULL和IS NOT NULL  
19、总是使⽤索引的第⼀个列  
20、尽量⽤UNION-ALL 替换UNION ( 如果有可能的话)  
21、ORDER BY ⼦句只在两种严格的条件下使⽤索引.  
22、避免改变索引列的类型  
23、需要当⼼的WHERE⼦句  
24、避免使⽤耗费资源的操作（如DISTINCT,UNION,MINUS,INTERSECT,ORDER BY等）  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、mysql集群" tabindex="-1"><a class="header-anchor" href="#三、mysql集群" aria-hidden="true">#</a> 三、Mysql集群</h2><p>在⾼并发下、海量数据下，在所难免就要实现Mysql的集群搭建<br> Mysql本身可以实现主从复制，我们需要完成配置，就可以实现数据从主库⾃动到从库。</p><h3 id="_1-sharding-jdbc实现mysql集群" tabindex="-1"><a class="header-anchor" href="#_1-sharding-jdbc实现mysql集群" aria-hidden="true">#</a> 1. Sharding-JDBC实现Mysql集群</h3>`,15),A=n("strong",null,"当当⽹",-1),B=n("br",null,null,-1),j=n("br",null,null,-1),O=n("br",null,null,-1),U=n("br",null,null,-1),z=n("br",null,null,-1),P={href:"https://shardingsphere.apache.org/document/current/cn/quick-start/shardingsphere-jdbc-quick",target:"_blank",rel:"noopener noreferrer"},$=n("br",null,null,-1),W=n("br",null,null,-1),F=e(`<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.shardingsphere<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>shardingsphere-jdbc-core-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.application.yml</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">shardingsphere</span><span class="token punctuation">:</span>
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token comment">#1.配置模式 单机或集群</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> Standalone
    <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
      <span class="token key atrule">names</span><span class="token punctuation">:</span> ds <span class="token comment">#2.配置数据源 根据实际情况</span>
      <span class="token key atrule">ds</span><span class="token punctuation">:</span>
        <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver
        <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//rm<span class="token punctuation">-</span>bp1fi52ghqu598b39lo.mysql.rds.aliyuncs.com/db_login<span class="token punctuation">?</span>serverTimezone=Asia/Shanghai
        <span class="token key atrule">username</span><span class="token punctuation">:</span> self
        <span class="token key atrule">password</span><span class="token punctuation">:</span> Tws123456
        <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource
        <span class="token key atrule">jackson</span><span class="token punctuation">:</span>
          <span class="token key atrule">date-format</span><span class="token punctuation">:</span> yyyy<span class="token punctuation">-</span>MM<span class="token punctuation">-</span>ss HH<span class="token punctuation">:</span>mm<span class="token punctuation">:</span>ss

    <span class="token key atrule">rules</span><span class="token punctuation">:</span> <span class="token comment">#3.配置分片规则</span>
      <span class="token key atrule">sharding</span><span class="token punctuation">:</span> <span class="token comment">#设置分片信息：水平分片：一库多表，垂直分片：多库</span>
        <span class="token key atrule">tables</span><span class="token punctuation">:</span>
          <span class="token key atrule">t_user</span><span class="token punctuation">:</span>
            <span class="token key atrule">actual-data-nodes</span><span class="token punctuation">:</span> ds.t_user$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>0..2<span class="token punctuation">}</span>
            <span class="token key atrule">table-strategy</span><span class="token punctuation">:</span>
              <span class="token key atrule">standard</span><span class="token punctuation">:</span>
                <span class="token key atrule">sharding-column</span><span class="token punctuation">:</span> id
                <span class="token key atrule">sharding-algorithm-name</span><span class="token punctuation">:</span> t<span class="token punctuation">-</span>user<span class="token punctuation">-</span>inline
            <span class="token key atrule">key-generate-strategy</span><span class="token punctuation">:</span>
              <span class="token key atrule">column</span><span class="token punctuation">:</span> id
              <span class="token key atrule">key-generator-name</span><span class="token punctuation">:</span> snowflake

        binding<span class="token punctuation">-</span>tables<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span> t_user
        <span class="token key atrule">sharding-algorithms</span><span class="token punctuation">:</span>
          <span class="token key atrule">t-user-inline</span><span class="token punctuation">:</span>
            <span class="token key atrule">type</span><span class="token punctuation">:</span> INLINE
            <span class="token key atrule">props</span><span class="token punctuation">:</span>
              <span class="token key atrule">algorithm-expression</span><span class="token punctuation">:</span> t_user$<span class="token punctuation">-</span><span class="token punctuation">&gt;</span><span class="token punctuation">{</span>id % 3<span class="token punctuation">}</span>

        <span class="token key atrule">key-generators</span><span class="token punctuation">:</span>
          <span class="token key atrule">snowflake</span><span class="token punctuation">:</span>
            <span class="token key atrule">type</span><span class="token punctuation">:</span> SNOWFLAKE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/20230311104645.png" alt="image.png" loading="lazy"><br> 这⾥遇到⼀个bug:<br> Sharding-jdbc使⽤Drud不能依赖druid-spring-boot-starter<br> 只能依赖:druid,否则就会遇到⼀个坑，报 Property &#39;sqlSessionFactory&#39; or &#39;sqlSessionTemplate&#39;<br> are requi<br> 后来查阅⽂档，官⽅⽂档，发现原来Sharding-jdbc4.0之后。就不能依赖这个包，会引起冲突。因为我<br> 们使⽤的Sharding-jdbc5.0以后的版本</p>`,4);function H(G,X){const a=t("ExternalLinkIcon");return r(),d("div",null,[o,n("p",null,[s("1.创建表：CREATE table 表名 (字段 数据类型 约束条件,……)"),u,s(" 2.修改表：ALTER TABLE 表名 ADD 字段名 数据类型 约束条件"),p,s(" 3.删除表：DROP TABLE 表名"),v,s(" 4.新增数据：INSERT INTO 表名(字段名,……) values(值,……)"),m,s(" 5.修改数据：UPDATE 表名 set 字段=值,…… [where 条件]"),b,s(" 6.删除数据：DELETE FROM 表名 [where 条件]"),k,s(" 7.查询数据：SELECT 字段|* FROM 表名 [where 条件]"),g,s(" 查询条件：and or in like between and not is null order by limit group by having"),h,s(" 聚合函数：avg max min count sum"),y,s(" 复杂查询：⼦查询、笛卡尔积查询（⾃然查询）、内连接、左外连接、右外连接、全连接（Mysql不⽀"),_,s(" 持）"),q,s(" 需要刷题："),n("a",f,[s("https://www.nowcoder.com/exam/oj?page=1&tab=SQL篇&topicId=268"),i(a)]),S,s(" 数据删除：drop（把表都删除）、delete（删除表中数据）、truncate（删除表中的数据，并删除⾃增"),E,s(" 器）"),x,s(" 单位：分 bigint 好处：避免四舍五⼊ 缺陷：⻚⾯需要处理"),L,s(" 单位：元 decimal 好处：单位元，不需要额外处理 缺陷：四舍五⼊")]),w,n("p",null,[s("登录地址："),n("a",I,[s("http://localhost:8888/druid/sql.html"),i(a)])]),N,n("p",null,[s("笛卡尔积是什么？"),T,R,n("a",D,[Q,i(a)]),C]),M,n("p",null,[s("Sharding-JDBC 是"),A,s("开源的适⽤于微服务的分布式数据访问基础类库，完整的实现了分库分表，读"),B,s(" 写分离和分布式主键功能，并初步实现了柔性事务。从 2016 年开源⾄今，在经历了整体架构的数次精"),j,s(" 炼以及稳定性打磨后，如今它已积累了⾜够的底蕴。"),O,s(" ShardingSphere是⼀套开源的分布式数据库中间件解决⽅案组成的⽣态圈，它由Sharding-JDBC、"),U,s(" Sharding-Proxy 和 Sharding-Sidecar这3款相互独⽴的产品组成。"),z,n("a",P,[s("https://shardingsphere.apache.org/document/current/cn/quick-start/shardingsphere-jdbc-quick"),i(a)]),s(""),$,s(" start/"),W,s(" 1.maven配置")]),F])}const V=l(c,[["render",H],["__file","Mysql.html.vue"]]);export{V as default};
