import{_ as e,o as i,c as n,f as t}from"./app-314de074.js";const d={},l=t(`<h1 id="mysql基础" tabindex="-1"><a class="header-anchor" href="#mysql基础" aria-hidden="true">#</a> Mysql基础</h1><h3 id="一、什么是sql" tabindex="-1"><a class="header-anchor" href="#一、什么是sql" aria-hidden="true">#</a> 一、什么是SQL</h3><blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1.什么是SQL？
	Structured Query Language：结构化查询语言
	其实就是定义了操作所有关系型数据库的规则。每一种数据库操作的方式存在不一样的地方，称为“方言”。
	
2.SQL通用语法
	1. SQL 语句可以单行或多行书写，以分号结尾。
	2. 可使用空格和缩进来增强语句的可读性。
	3. MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。
	4. 3 种注释
		* 单行注释: -- 注释内容 或 # 注释内容(mysql 特有) 
		* 多行注释: /* 注释 */
	
3. SQL分类
	1) DDL(Data Definition Language)数据定义语言
		用来定义数据库对象：数据库，表，列等。关键字：create, drop,alter 等
	2) DML(Data Manipulation Language)数据操作语言
		用来对数据库中表的数据进行增删改。关键字：insert, delete, update 等
	3) DQL(Data Query Language)数据查询语言
		用来查询数据库中表的记录(数据)。关键字：select, where 等
	4) DCL(Data Control Language)数据控制语言(了解)
		用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT， REVOKE 等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="二、ddl-操作数据库、表-列" tabindex="-1"><a class="header-anchor" href="#二、ddl-操作数据库、表-列" aria-hidden="true">#</a> 二、DDL:操作数据库、表 列</h3><h4 id="操作数据库crud" tabindex="-1"><a class="header-anchor" href="#操作数据库crud" aria-hidden="true">#</a> 操作数据库CRUD</h4><h5 id="_1-创建数据库" tabindex="-1"><a class="header-anchor" href="#_1-创建数据库" aria-hidden="true">#</a> 1 创建数据库</h5><blockquote><p>创建 create</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. 操作数据库：CRUD
	1. C(Create):创建
		* 创建数据库：
			* create database 数据库名称;
		* 创建数据库，判断不存在，再创建：
			* create database if not exists 数据库名称;
		* 创建数据库，并指定字符集
			* create database 数据库名称 character set 字符集名;

		* 练习： 创建db4数据库，判断是否存在，并制定字符集为gbk
			* create database if not exists db4 character set gbk;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-查询" tabindex="-1"><a class="header-anchor" href="#_2-查询" aria-hidden="true">#</a> 2 查询</h5><blockquote><p>查询 show</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. R(Retrieve)：查询
		* 查询所有数据库的名称:
			* show databases;
		* 查询某个数据库的字符集:查询某个数据库的创建语句
			* show create database 数据库名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_3-修改" tabindex="-1"><a class="header-anchor" href="#_3-修改" aria-hidden="true">#</a> 3 修改</h5><blockquote><p>修改 alter</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>3. U(Update):修改
		* 修改数据库的字符集
			* alter database 数据库名称 character set 字符集名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_4-删除" tabindex="-1"><a class="header-anchor" href="#_4-删除" aria-hidden="true">#</a> 4 删除</h5><blockquote><p>删除 drop</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>4. D(Delete):删除
		* 删除数据库
			* drop database 数据库名称;
		* 判断数据库存在，存在再删除
			* drop database if exists 数据库名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_5-使用" tabindex="-1"><a class="header-anchor" href="#_5-使用" aria-hidden="true">#</a> 5 使用</h5><blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>5. 使用数据库
		* 查询当前正在使用的数据库名称
			* select database();
		* 使用数据库
			* use 数据库名称;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="操作表crud" tabindex="-1"><a class="header-anchor" href="#操作表crud" aria-hidden="true">#</a> 操作表CRUD</h4><h5 id="_1-创建表" tabindex="-1"><a class="header-anchor" href="#_1-创建表" aria-hidden="true">#</a> 1. 创建表</h5><blockquote><p>创建表 create</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. 操作表
	1. C(Create):创建
		1. 语法：
			create table 表名(
				列名1 数据类型1,
				列名2 数据类型2,
				....
				列名n 数据类型n
			);
			* 注意：最后一列，不需要加逗号（,）
			* 数据库类型：
				1. int：整数类型
					* age int,
				2. double:小数类型
					* score double(5,2)
				3. date:日期，只包含年月日，yyyy-MM-dd
				4. datetime:日期，包含年月日时分秒	 yyyy-MM-dd HH:mm:ss
				5. timestamp:时间错类型	包含年月日时分秒	 yyyy-MM-dd HH:mm:ss	
					* 如果将来不给这个字段赋值，或赋值为null，则默认使用当前的系统时间，来自动赋值

				6. varchar：字符串
					* name varchar(20):姓名最大20个字符
					* zhangsan 8个字符  张三 2个字符
                  	* 创建表
			create table student(
				id int,
				name varchar(32),
				age int ,
				score double(4,1),
				birthday date,
				insert_time timestamp
			);

		* 复制表：
			* create table 表名 like 被复制的表名;	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-查询表" tabindex="-1"><a class="header-anchor" href="#_2-查询表" aria-hidden="true">#</a> 2. 查询表</h5><blockquote><p>查询 show</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. R(Retrieve)：查询
		* 查询某个数据库中所有的表名称
			* show tables;
		* 查询表结构
			* desc 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_3-修改表" tabindex="-1"><a class="header-anchor" href="#_3-修改表" aria-hidden="true">#</a> 3. 修改表</h5><blockquote><p>修改表名 alter</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>3. U(Update):修改
		1. 修改表名
			alter table 表名 rename to 新的表名;
		2. 修改表的字符集
			alter table 表名 character set 字符集名称;
		3. 添加一列
			alter table 表名 add 列名 数据类型;
		4. 修改列名称 类型
			alter table 表名 change 列名 新列别 新数据类型;
			alter table 表名 modify 列名 新数据类型;
		5. 删除列
			alter table 表名 drop 列名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_4-删除表" tabindex="-1"><a class="header-anchor" href="#_4-删除表" aria-hidden="true">#</a> 4. 删除表</h5><blockquote><p>删除表 drop table 表名;</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>4. D(Delete):删除
		* drop table 表名;
		* drop table  if exists 表名 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="三、-dml-增删改表中数据" tabindex="-1"><a class="header-anchor" href="#三、-dml-增删改表中数据" aria-hidden="true">#</a> 三、 DML：增删改表中数据</h3><h5 id="_1-添加数据" tabindex="-1"><a class="header-anchor" href="#_1-添加数据" aria-hidden="true">#</a> 1. 添加数据</h5><blockquote><p>添加数据：insert into 表名(列名1,列名2,...列名n) values(值1,值2,...值n);</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. 添加数据：
	* 语法：
		* insert into 表名(列名1,列名2,...列名n) values(值1,值2,...值n);
	* 注意：
		1. 列名和值要一一对应。
		2. 如果表名后，不定义列名，则默认给所有列添加值
			insert into 表名 values(值1,值2,...值n);
		3. 除了数字类型，其他类型需要使用引号(单双都可以)引起来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-删除数据" tabindex="-1"><a class="header-anchor" href="#_2-删除数据" aria-hidden="true">#</a> 2. 删除数据</h5><blockquote><p>删除数据： delete from 表名 [where 条件]</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. 删除数据：
	* 语法：
		* delete from 表名 [where 条件]
	* 注意：
		1. 如果不加条件，则删除表中所有记录。
		2. 如果要删除所有记录
			1. delete from 表名; -- 不推荐使用。有多少条记录就会执行多少次删除操作
			2. TRUNCATE TABLE 表名; -- 推荐使用，效率更高 先删除表，然后再创建一张一样的表。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_3-修改数据" tabindex="-1"><a class="header-anchor" href="#_3-修改数据" aria-hidden="true">#</a> 3. 修改数据</h5><blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>3. 修改数据：
	* 语法：
		* update 表名 set 列名1 = 值1, 列名2 = 值2,... [where 条件];

	* 注意：
		1. 如果不加任何条件，则会将表中所有记录全部修改。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="四、dql-查询表中的记录" tabindex="-1"><a class="header-anchor" href="#四、dql-查询表中的记录" aria-hidden="true">#</a> 四、DQL：查询表中的记录</h3><blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. 语法：
	select
		字段列表
	from
		表名列表
	where
		条件列表
	group by
		分组字段
	having
		分组之后的条件限定
	order by
		排序
	limit
		分页限定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_1-基础查询" tabindex="-1"><a class="header-anchor" href="#_1-基础查询" aria-hidden="true">#</a> 1 基础查询</h5><blockquote><p>基础查询 select 字段名1，字段名2... from 表名；</p><p>或者 select * frome 表名； 查询当前表的所有字段</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. 基础查询
	1. 多个字段的查询
		select 字段名1，字段名2... from 表名；
		* 注意：
			* 如果查询所有字段，则可以使用*来替代字段列表。
	2. 去除重复：
		* distinct
	3. 计算列
		* 一般可以使用四则运算计算一些列的值。（一般只会进行数值型的计算）
		* ifnull(表达式1,表达式2)：null参与的运算，计算结果都为null
			* 表达式1：哪个字段需要判断是否为null
			* 如果该字段为null后的替换值。
	4. 起别名：
		* as：as也可以省略
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-条件查询" tabindex="-1"><a class="header-anchor" href="#_2-条件查询" aria-hidden="true">#</a> 2 条件查询</h5><blockquote><p>条件查询 where子句后跟条件</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>3. 条件查询
	1. where子句后跟条件
	2. 运算符
		* &gt; 、&lt; 、&lt;= 、&gt;= 、= 、&lt;&gt;
		* BETWEEN...AND  
		* IN( 集合) 
		* LIKE：模糊查询
			* 占位符：
				* _:单个任意字符
				* %：多个任意字符
		* IS NULL  
		* and  或 &amp;&amp;
		* or  或 || 
		* not  或 !
		枚举 in   满足任意一个条件
           or 
		
			-- 查询年龄大于20岁

			SELECT * FROM student WHERE age &gt; 20;
			
			SELECT * FROM student WHERE age &gt;= 20;
			
			-- 查询年龄等于20岁
			SELECT * FROM student WHERE age = 20;
			
			-- 查询年龄不等于20岁
			SELECT * FROM student WHERE age != 20;
			SELECT * FROM student WHERE age &lt;&gt; 20;
			
			-- 查询年龄大于等于20 小于等于30
			
			SELECT * FROM student WHERE age &gt;= 20 &amp;&amp;  age &lt;=30;
			SELECT * FROM student WHERE age &gt;= 20 AND  age &lt;=30;
			SELECT * FROM student WHERE age BETWEEN 20 AND 30;
			
			-- 查询年龄22岁，18岁，25岁的信息
			SELECT * FROM student WHERE age = 22 OR age = 18 OR age = 25
			SELECT * FROM student WHERE age IN (22,18,25);
			
			-- 查询英语成绩为null
			SELECT * FROM student WHERE english = NULL; -- 不对的。null值不能使用 = （!=） 判断
			
			SELECT * FROM student WHERE english IS NULL;
			
			-- 查询英语成绩不为null
			SELECT * FROM student WHERE english  IS NOT NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_3-分支条件查询" tabindex="-1"><a class="header-anchor" href="#_3-分支条件查询" aria-hidden="true">#</a> 3.分支条件查询</h5><blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>语法：
 case 
      when 条件1  then 结果1
      when 条件2  then 结果2
      when 条件3  then 结果3
      else 结果
 end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_4-时间查询" tabindex="-1"><a class="header-anchor" href="#_4-时间查询" aria-hidden="true">#</a> 4. 时间查询</h5><blockquote><p>语法：SELECT [ 时间函数 ( [参数列表] ) ]</p><table><thead><tr><th>时间函数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td>sysdate)</td><td style="text-align:left;">当前系统时间（日、月、年、时、分、秒）</td></tr><tr><td>curdate()</td><td style="text-align:left;">获取当前日期</td></tr><tr><td>curtime()</td><td style="text-align:left;">获取当前时间</td></tr><tr><td>week(DATE)</td><td style="text-align:left;">获取指定日期为一年中的第几周</td></tr><tr><td>year(DATE)</td><td style="text-align:left;">获取指定日期的年份</td></tr><tr><td>hour(TIME)</td><td style="text-align:left;">获取指定时间的小时值</td></tr><tr><td>minute(TIME)</td><td style="text-align:left;">获取时间的分钟值</td></tr><tr><td>datediff(DATE1,DATE2)</td><td style="text-align:left;">获取DATE1 和 DATE2 之间相隔的天数</td></tr><tr><td>adddtae(DATE,N)</td><td style="text-align:left;">计算DATE 加上 N 天后的日期</td></tr></tbody></table></blockquote><h5 id="_5-字串查询" tabindex="-1"><a class="header-anchor" href="#_5-字串查询" aria-hidden="true">#</a> 5.字串查询</h5><blockquote><p>语法： SELECT [ 字符串函数 ( [参数列表]) ]</p><table><thead><tr><th>字符串函数</th><th>说明</th></tr></thead><tbody><tr><td>concat(str1,str2,str....)</td><td>将 多个字符串连接</td></tr><tr><td>insert(str,pos,len,newStr)</td><td>将str 中指定 pos 位置开始 len 长度的内容替换为 newStr</td></tr><tr><td>lower(str)</td><td>将指定字符串转换为小写</td></tr><tr><td>upper(str)</td><td>将指定字符串转换为大写</td></tr><tr><td>substring(str,num,len)</td><td>将str 字符串指定num位置开始截取 len 个内容</td></tr></tbody></table></blockquote><h4 id="dql-查询语句" tabindex="-1"><a class="header-anchor" href="#dql-查询语句" aria-hidden="true">#</a> DQL:查询语句</h4><h5 id="_1-排序查询" tabindex="-1"><a class="header-anchor" href="#_1-排序查询" aria-hidden="true">#</a> 1. 排序查询</h5><blockquote><p>排序查询 order by</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. 排序查询
	* 语法：order by 子句
		* order by 排序字段1 排序方式1 ，  排序字段2 排序方式2...

	* 排序方式：
		* ASC：升序，默认的。
		* DESC：降序。

	* 注意：
		* 如果有多个排序条件，则当前边的条件值一样时，才会判断第二条件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-聚合函数" tabindex="-1"><a class="header-anchor" href="#_2-聚合函数" aria-hidden="true">#</a> 2. 聚合函数</h5><blockquote><ol start="2"><li>聚合函数：将一列数据作为一个整体，进行纵向的计算</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>	1. count：计算个数
		1. 一般选择非空的列：主键
		2. count(*)
	2. max：计算最大值
	3. min：计算最小值
	4. sum：计算和
	5. avg：计算平均值
		* 注意：聚合函数的计算，排除null值。
		解决方案：
			1. 选择不包含非空的列进行计算
			2. IFNULL函数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_3-分组查询" tabindex="-1"><a class="header-anchor" href="#_3-分组查询" aria-hidden="true">#</a> 3. 分组查询</h5><blockquote><p>分组查询:</p><ol><li>语法：group by 分组字段</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>	2. 注意：
		1. 分组之后查询的字段：分组字段、聚合函数
		2. where 和 having 的区别？
			1. where 在分组之前进行限定，如果不满足条件，则不参与分组。having在分组之后进行限定，如果不满足结果，则不会被查询出来
			2. where 后不可以跟聚合函数，having可以进行聚合函数的判断。

		-- 按照性别分组。分别查询男、女同学的平均分

		SELECT sex , AVG(math) FROM student GROUP BY sex;
		
		-- 按照性别分组。分别查询男、女同学的平均分,人数
		
		SELECT sex , AVG(math),COUNT(id) FROM student GROUP BY sex;
		
		--  按照性别分组。分别查询男、女同学的平均分,人数 要求：分数低于70分的人，不参与分组
		SELECT sex , AVG(math),COUNT(id) FROM student WHERE math &gt; 70 GROUP BY sex;
		
		--  按照性别分组。分别查询男、女同学的平均分,人数 要求：分数低于70分的人，不参与分组,分组之后。人数要大于2个人
		SELECT sex , AVG(math),COUNT(id) FROM student WHERE math &gt; 70 GROUP BY sex HAVING COUNT(id) &gt; 2;
		
		SELECT sex , AVG(math),COUNT(id) 人数 FROM student WHERE math &gt; 70 GROUP BY sex HAVING 人数 &gt; 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_4-分页查询" tabindex="-1"><a class="header-anchor" href="#_4-分页查询" aria-hidden="true">#</a> 4. 分页查询</h5><blockquote><p>分页查询 limit</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>4. 分页查询    
1. 语法：limit 开始的索引,每页查询的条数;    
2. 公式：开始的索引 = （当前的页码 - 1） * 每页显示的条数        
    -- 每页显示3条记录        
    SELECT * FROM student LIMIT 0,3; -- 第1页                
    SELECT * FROM student LIMIT 3,3; -- 第2页                
    SELECT * FROM student LIMIT 6,3; -- 第3页   
3. limit 是一个MySQL&quot;方言&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_5-子查询-作为条件判断" tabindex="-1"><a class="header-anchor" href="#_5-子查询-作为条件判断" aria-hidden="true">#</a> 5. 子查询 （作为条件判断）</h5><blockquote><p>select 列名 from 表名 where 条件（子查询结果）</p><p>注意 ：</p><pre><code>  1. 将子查询的结果作为外部查询的一张表，做第二次查询
     2. 子查询作为临时表，为其赋予一个临时表名
</code></pre></blockquote><h5 id="_6-合并查询" tabindex="-1"><a class="header-anchor" href="#_6-合并查询" aria-hidden="true">#</a> 6. 合并查询</h5><blockquote><p>合并两张表的结果（去除重复记录）</p><p>语法： select * from 表名1 union select * from 表名2</p><p>注意： 合并结果的两张表，列数必须相同，列的数据类型可以不同</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#合并两张表的结果，去除重复记录
SELECT * FROM t1 UNION SELECT * FROM t2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>合并向张表的结果（保留重复记录）</p><p>语法：select * from 表名1 unino all select * from 表名2</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#合并两张表的结果，不去除重复记录（显示所有）
SELECT * FROM t1 UNION ALL SELECT * FROM t2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="五、-约束" tabindex="-1"><a class="header-anchor" href="#五、-约束" aria-hidden="true">#</a> 五、 约束</h3><blockquote><ul><li>概念： 对表中的数据进行限定，保证数据的正确性、有效性和完整性。</li><li>分类： <ol><li>主键约束：primary key</li><li>非空约束：not null</li><li>唯一约束：unique</li><li>外键约束：foreign key</li></ol></li></ul></blockquote><h5 id="_1-非空约束" tabindex="-1"><a class="header-anchor" href="#_1-非空约束" aria-hidden="true">#</a> 1. 非空约束</h5><blockquote><p>非空约束：not null，某一列的值不能为null</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>*  1. 创建表时添加约束
		CREATE TABLE stu(
			id INT,
			NAME VARCHAR(20) NOT NULL -- name为非空
		);
	2. 创建表完后，添加非空约束
		ALTER TABLE stu MODIFY NAME VARCHAR(20) NOT NULL;

	3. 删除name的非空约束
		ALTER TABLE stu MODIFY NAME VARCHAR(20);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-唯一约束" tabindex="-1"><a class="header-anchor" href="#_2-唯一约束" aria-hidden="true">#</a> 2. 唯一约束</h5><blockquote><p>唯一约束：unique，某一列的值不能重复</p><ol><li>注意： <ul><li>唯一约束可以有NULL值，但是只能有一条记录为null</li></ul></li><li>在创建表时，添加唯一约束</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>		CREATE TABLE stu(
			id INT,
			phone_number VARCHAR(20) UNIQUE -- 手机号
		);
	3. 删除唯一约束
		ALTER TABLE stu DROP INDEX phone_number;
	4. 在表创建完后，添加唯一约束
		ALTER TABLE stu MODIFY phone_number VARCHAR(20) UNIQUE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_3-主键约束" tabindex="-1"><a class="header-anchor" href="#_3-主键约束" aria-hidden="true">#</a> 3. 主键约束</h5><blockquote><ul><li>主键约束：primary key</li></ul><p>1.注意:</p><ol><li><p>含义：非空且唯一</p></li><li><p>一张表只能有一个字段为主键</p></li><li><p>主键就是表中记录的唯一标识</p></li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. 在创建表时，添加主键约束
		create table stu(
			id int primary key,-- 给id添加主键约束
			name varchar(20)
		);

	3. 删除主键
		-- 错误 alter table stu modify id int ;
		ALTER TABLE stu DROP PRIMARY KEY;

	4. 创建完表后，添加主键
		ALTER TABLE stu MODIFY id INT PRIMARY KEY;

	5. 自动增长：
		1.  概念：如果某一列是数值类型的，使用 auto_increment 可以来完成值得自动增长

		2. 在创建表时，添加主键约束，并且完成主键自增长
		create table stu(
			id int primary key auto_increment,-- 给id添加主键约束
			name varchar(20)
		);
		3. 删除自动增长
		ALTER TABLE stu MODIFY id INT;
		4. 添加自动增长
		ALTER TABLE stu MODIFY id INT AUTO_INCREMENT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_4-外键约束" tabindex="-1"><a class="header-anchor" href="#_4-外键约束" aria-hidden="true">#</a> 4. 外键约束</h5><blockquote><p>外键约束 foreign key</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>* 外键约束：foreign key,让表于表产生关系，从而保证数据的正确性。
	1. 在创建表时，可以添加外键
		* 语法：
			create table 表名(
				....
				外键列u
	constraint 外键名称 foreign key (外键列名称) references 主表名称(主表列名称)
			);

	2. 删除外键
		ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;

	3. 创建表之后，添加外键
		ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称);
	4. 级联操作
		1. 添加级联操作
			语法：ALTER TABLE 表名 ADD CONSTRAINT 外键名称 
					FOREIGN KEY (外键字段名称) REFERENCES 主表名称(主表列名称) ON UPDATE CASCADE ON DELETE CASCADE  ;
		2. 分类：
			1. 级联更新：ON UPDATE CASCADE 
			2. 级联删除：ON DELETE CASCADE 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="六、多表查询" tabindex="-1"><a class="header-anchor" href="#六、多表查询" aria-hidden="true">#</a> 六、多表查询</h3><h4 id="_1-内连接查询" tabindex="-1"><a class="header-anchor" href="#_1-内连接查询" aria-hidden="true">#</a> 1.内连接查询</h4><h5 id="_1-1-内连接查询" tabindex="-1"><a class="header-anchor" href="#_1-1-内连接查询" aria-hidden="true">#</a> 1.1 内连接查询：</h5><blockquote><pre><code>  	1. 从哪些表中查询数据
  	2. 条件是什么
  	3. 查询哪些字段
</code></pre><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. 内连接查询：
		1. 隐式内连接：使用where条件消除无用数据
			* 例子：
				-- 查询员工表的名称，性别。部门表的名称
	       SELECT 
				t1.name, -- 员工表的姓名
				t1.gender,-- 员工表的性别
				t2.name -- 部门表的名称
			FROM
				emp t1,
				dept t2
			WHERE 
				t1.\`dept_id\` = t2.\`id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_1-2-显示内连接" tabindex="-1"><a class="header-anchor" href="#_1-2-显示内连接" aria-hidden="true">#</a> 1.2 显示内连接：</h5><blockquote><ol start="2"><li><p>显式内连接：</p><p>语法：</p><p>​ select 字段列表 from 表名1 [inner] join 表名2 on 条件</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>例如：

* SELECT * FROM emp JOIN dept ON emp.\`dept_id\` = dept.\`id\`;	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></blockquote><h4 id="_2-外连接查询" tabindex="-1"><a class="header-anchor" href="#_2-外连接查询" aria-hidden="true">#</a> 2. 外连接查询：</h4><h5 id="_2-1-左外连接" tabindex="-1"><a class="header-anchor" href="#_2-1-左外连接" aria-hidden="true">#</a> 2.1 左外连接：</h5><blockquote><p>语法：select 字段列表 from 表1 left [outer] join 表2 on 条件；</p><p>查询的是左表所有数据以及其交集部分。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>例子：
				-- 查询所有员工信息，如果员工有部门，则查询部门名称，没有部门，则不显示部门名称
				SELECT 	t1.*,t2.\`name\` FROM emp t1 LEFT JOIN dept t2 ON例子：
				-- 查询所有员工信息，如果员工有部门，则查询部门名称，没有部门，则不显示部门名称
				SELECT 	t1.*,t2.\`name\` FROM emp t1 LEFT JOIN dept t2 ONt1.\`dept_id\` = t2.\`id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h5 id="_2-2-右外连接" tabindex="-1"><a class="header-anchor" href="#_2-2-右外连接" aria-hidden="true">#</a> 2.2 右外连接：</h5><blockquote><p>语法：</p><p>​ select 字段列表 from 表1 right [outer] join 表2 on 条件；<br> ​ 查询的是右表所有数据以及其交集部分。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>例子：
				SELECT 	* FROM dept t2 RIGHT JOIN emp t1 ON t1.\`dept_id\` = t2.\`id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h4 id="_3-子查询" tabindex="-1"><a class="header-anchor" href="#_3-子查询" aria-hidden="true">#</a> 3. 子查询</h4><blockquote><p>子查询：（作为判断条件）</p><p>​ 语法： select 列名 from 表名 where 条件 (子查询结果)</p><p>注意： 将子查询一行一列的结果作为外部查询的条件做第二次查询</p><p>​ 子查询得到的结果 才能作为外部查询的等职判断条件或不等值条件判断</p><p>​</p><hr><p>子查询： （作为枚举查询条件）</p><p>​ 语法: select 列名 from 表名 where 列名 in（子查询结果）</p><hr><p>子查询: (作为一张表)</p><p>​ 语法： select 列明 from (子查询的结果集) whrer 条件</p><p>注意将子查询 多行多列 的结果作为外部查询的一张表 做第二次查询</p><p>子表查询作为临时表，为其赋予一个临时表名</p></blockquote><h3 id="七、事务" tabindex="-1"><a class="header-anchor" href="#七、事务" aria-hidden="true">#</a> 七、事务</h3><h5 id="_1-事务的基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-事务的基本介绍" aria-hidden="true">#</a> 1.事务的基本介绍</h5><blockquote><ol><li>概念：</li></ol><ul><li>如果一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败。</li></ul><ol start="2"><li>操作:</li></ol><p>​ 1.开启事务： start transaction;</p><p>​ 2.回滚：rollback;</p><p>​ 3.提交：commit;</p><p>3.列子:</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE account (
			id INT PRIMARY KEY AUTO_INCREMENT,
			NAME VARCHAR(10),
			balance DOUBLE
		);
		-- 添加数据
		INSERT INTO account (NAME, balance) VALUES (&#39;zhangsan&#39;, 1000), (&#39;lisi&#39;, 1000);
		SELECT * FROM account;
		UPDATE account SET balance = 1000;
		-- 张三给李四转账 500 元
		
		-- 0. 开启事务
		START TRANSACTION;
		-- 1. 张三账户 -500
		
		UPDATE account SET balance = balance - 500 WHERE NAME = &#39;zhangsan&#39;;
		-- 2. 李四账户 +500
		-- 出错了...
		UPDATE account SET balance = balance + 500 WHERE NAME = &#39;lisi&#39;;
		
		-- 发现执行没有问题，提交事务
		COMMIT;
		
		-- 发现出问题了，回滚事务
		ROLLBACK;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>MySQL数据库中事务默认自动提交</li></ol><p>​ 事务提交的两种方式：<br> ​ * 自动提交：<br> ​ 1. mysql就是自动提交的<br> ​ 2. 一条DML(增删改)语句会自动提交一次事务。<br> ​ * 手动提交：<br> ​ 1.Oracle 数据库默认是手动提交事务<br> ​ 2. 需要先开启事务，再提交<br> ​ * 修改事务的默认提交方式：<br> ​ 1. 查看事务的默认提交方式：SELECT @@autocommit; -- 1 代表自动提交 0 代表手动提交<br> ​ 2. 修改默认提交方式： set @@autocommit = 0;</p></blockquote><h5 id="_2-事务的四大特征" tabindex="-1"><a class="header-anchor" href="#_2-事务的四大特征" aria-hidden="true">#</a> 2. 事务的四大特征：</h5><blockquote><ol start="2"><li>事务的四大特征：</li><li>原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败。</li><li>持久性：当事务提交或回滚后，数据库会持久化的保存数据。</li><li>隔离性：多个事务之间。相互独立。</li><li>一致性：事务操作前后，数据总量不变</li></ol></blockquote><h5 id="_3-事务的隔离级别-了解" tabindex="-1"><a class="header-anchor" href="#_3-事务的隔离级别-了解" aria-hidden="true">#</a> 3. 事务的隔离级别（了解）</h5><blockquote><ul><li>概念：多个事务之间隔离的，相互独立的。但是如果多个事务操作同一批数据，则会引发一些问题，设置不同的隔离级别就可以解决这些问题。 <ul><li><p>存在问题：</p><ol><li>脏读：一个事务，读取到另一个事务中没有提交的数据</li><li>不可重复读(虚读)：在同一个事务中，两次读取到的数据不一样。</li><li>幻读：一个事务操作(DML)数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改。</li></ol></li><li><p>隔离级别：</p><ol><li>read uncommitted：读未提交 <ul><li>产生的问题：脏读、不可重复读、幻读</li></ul></li><li>read committed：读已提交 （Oracle） <ul><li>产生的问题：不可重复读、幻读</li></ul></li><li>repeatable read：可重复读 （MySQL默认） <ul><li>产生的问题：幻读</li></ul></li><li>serializable：串行化 <ul><li>可以解决所有的问题</li></ul></li></ol><ul><li>注意：隔离级别从小到大安全性越来越高，但是效率越来越低</li><li>数据库查询隔离级别： <ul><li>select @@tx_isolation;</li></ul></li><li>数据库设置隔离级别： <ul><li>set global transaction isolation level 级别字符串;</li></ul></li></ul></li></ul></li></ul><p>​ 演示</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>set global transaction isolation level read uncommitted;
		start transaction;
		-- 转账操作
		update account set balance = balance - 500 where id = 1;
		update account set balance = balance + 500 where id = 2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="八、dcl" tabindex="-1"><a class="header-anchor" href="#八、dcl" aria-hidden="true">#</a> 八、DCL</h3><blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>* SQL分类：
	1. DDL：操作数据库和表
	2. DML：增删改表中数据
	3. DQL：查询表中数据
	4. DCL：管理用户，授权

* DBA：数据库管理员

* DCL：管理用户，授权
	1. 管理用户
		1. 添加用户：
			* 语法：CREATE USER &#39;用户名&#39;@&#39;主机名&#39; IDENTIFIED BY &#39;密码&#39;;
		2. 删除用户：
			* 语法：DROP USER &#39;用户名&#39;@&#39;主机名&#39;;
		3. 修改用户密码：
			
			UPDATE USER SET PASSWORD = PASSWORD(&#39;新密码&#39;) WHERE USER = &#39;用户名&#39;;
			UPDATE USER SET PASSWORD = PASSWORD(&#39;abc&#39;) WHERE USER = &#39;lisi&#39;;
			
			SET PASSWORD FOR &#39;用户名&#39;@&#39;主机名&#39; = PASSWORD(&#39;新密码&#39;);
			SET PASSWORD FOR &#39;root&#39;@&#39;localhost&#39; = PASSWORD(&#39;123&#39;);

			* mysql中忘记了root用户的密码？
				1. cmd -- &gt; net stop mysql 停止mysql服务
					* 需要管理员运行该cmd

				2. 使用无验证方式启动mysql服务： mysqld --skip-grant-tables
				3. 打开新的cmd窗口,直接输入mysql命令，敲回车。就可以登录成功
				4. use mysql;
				5. update user set password = password(&#39;你的新密码&#39;) where user = &#39;root&#39;;
				6. 关闭两个窗口
				7. 打开任务管理器，手动结束mysqld.exe 的进程
				8. 启动mysql服务
				9. 使用新密码登录。
		4. 查询用户：
			-- 1. 切换到mysql数据库
			USE myql;
			-- 2. 查询user表
			SELECT * FROM USER;
			
			* 通配符： % 表示可以在任意主机使用用户登录数据库

	2. 权限管理：
		1. 查询权限：
			-- 查询权限
			SHOW GRANTS FOR &#39;用户名&#39;@&#39;主机名&#39;;
			SHOW GRANTS FOR &#39;lisi&#39;@&#39;%&#39;;

		2. 授予权限：
			-- 授予权限
			grant 权限列表 on 数据库名.表名 to &#39;用户名&#39;@&#39;主机名&#39;;
			-- 给张三用户授予所有权限，在任意数据库任意表上
			
			GRANT ALL ON *.* TO &#39;zhangsan&#39;@&#39;localhost&#39;;
		3. 撤销权限：
			-- 撤销权限：
			revoke 权限列表 on 数据库名.表名 from &#39;用户名&#39;@&#39;主机名&#39;;
			REVOKE UPDATE ON db3.\`account\` FROM &#39;lisi&#39;@&#39;%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="九、-数据库的设计" tabindex="-1"><a class="header-anchor" href="#九、-数据库的设计" aria-hidden="true">#</a> 九、 数据库的设计</h3><blockquote><ol><li>多表之间的关系</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. 多表之间的关系
	1. 分类：
		1. 一对一(了解)：
			* 如：人和身份证
			* 分析：一个人只有一个身份证，一个身份证只能对应一个人
		2. 一对多(多对一)：
			* 如：部门和员工
			* 分析：一个部门有多个员工，一个员工只能对应一个部门
		3. 多对多：
			* 如：学生和课程
			* 分析：一个学生可以选择很多门课程，一个课程也可以被很多学生选择
	2. 实现关系：
		1. 一对多(多对一)：
			* 如：部门和员工
			* 实现方式：在多的一方建立外键，指向一的一方的主键。
		2. 多对多：
			* 如：学生和课程
			* 实现方式：多对多关系实现需要借助第三张中间表。中间表至少包含两个字段，这两个字段作为第三张表的外键，分别指向两张表的主键
		3. 一对一(了解)：
			* 如：人和身份证
			* 实现方式：一对一关系实现，可以在任意一方添加唯一外键指向另一方的主键。

	3. 案例
		-- 创建旅游线路分类表 tab_category
		-- cid 旅游线路分类主键，自动增长
		-- cname 旅游线路分类名称非空，唯一，字符串 100
		CREATE TABLE tab_category (
			cid INT PRIMARY KEY AUTO_INCREMENT,
			cname VARCHAR(100) NOT NULL UNIQUE
		);
		
		-- 创建旅游线路表 tab_route
		/*
		rid 旅游线路主键，自动增长
		rname 旅游线路名称非空，唯一，字符串 100
		price 价格
		rdate 上架时间，日期类型
		cid 外键，所属分类
		*/
		CREATE TABLE tab_route(
			rid INT PRIMARY KEY AUTO_INCREMENT,
			rname VARCHAR(100) NOT NULL UNIQUE,
			price DOUBLE,
			rdate DATE,
			cid INT,
			FOREIGN KEY (cid) REFERENCES tab_category(cid)
		);
		
		/*创建用户表 tab_user
		uid 用户主键，自增长
		username 用户名长度 100，唯一，非空
		password 密码长度 30，非空
		name 真实姓名长度 100
		birthday 生日
		sex 性别，定长字符串 1
		telephone 手机号，字符串 11
		email 邮箱，字符串长度 100
		*/
		CREATE TABLE tab_user (
			uid INT PRIMARY KEY AUTO_INCREMENT,
			username VARCHAR(100) UNIQUE NOT NULL,
			PASSWORD VARCHAR(30) NOT NULL,
			NAME VARCHAR(100),
			birthday DATE,
			sex CHAR(1) DEFAULT &#39;男&#39;,
			telephone VARCHAR(11),
			email VARCHAR(100)
		);
		
		/*
		创建收藏表 tab_favorite
		rid 旅游线路 id，外键
		date 收藏时间
		uid 用户 id，外键
		rid 和 uid 不能重复，设置复合主键，同一个用户不能收藏同一个线路两次
		*/
		CREATE TABLE tab_favorite (
			rid INT, -- 线路id
			DATE DATETIME,
			uid INT, -- 用户id
			-- 创建复合主键
			PRIMARY KEY(rid,uid), -- 联合主键
			FOREIGN KEY (rid) REFERENCES tab_route(rid),
			FOREIGN KEY(uid) REFERENCES tab_user(uid)
		);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.数据库设计的范式</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>2. 数据库设计的范式
	* 概念：设计数据库时，需要遵循的一些规范。要遵循后边的范式要求，必须先遵循前边的所有范式要求

		设计关系数据库时，遵从不同的规范要求，设计出合理的关系型数据库，这些不同的规范要求被称为不同的范式，各种范式呈递次规范，越高的范式数据库冗余越小。
		目前关系数据库有六种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。

	* 分类：
		1. 第一范式（1NF）：每一列都是不可分割的原子数据项
		2. 第二范式（2NF）：在1NF的基础上，非码属性必须完全依赖于码（在1NF基础上消除非主属性对主码的部分函数依赖）
			* 几个概念：
				1. 函数依赖：A--&gt;B,如果通过A属性(属性组)的值，可以确定唯一B属性的值。则称B依赖于A
					例如：学号--&gt;姓名。  （学号，课程名称） --&gt; 分数
				2. 完全函数依赖：A--&gt;B， 如果A是一个属性组，则B属性值得确定需要依赖于A属性组中所有的属性值。
					例如：（学号，课程名称） --&gt; 分数
				3. 部分函数依赖：A--&gt;B， 如果A是一个属性组，则B属性值得确定只需要依赖于A属性组中某一些值即可。
					例如：（学号，课程名称） -- &gt; 姓名
				4. 传递函数依赖：A--&gt;B, B -- &gt;C . 如果通过A属性(属性组)的值，可以确定唯一B属性的值，在通过B属性（属性组）的值可以确定唯一C属性的值，则称 C 传递函数依赖于A
					例如：学号--&gt;系名，系名--&gt;系主任
				5. 码：如果在一张表中，一个属性或属性组，被其他所有属性所完全依赖，则称这个属性(属性组)为该表的码
					例如：该表中码为：（学号，课程名称）
					* 主属性：码属性组中的所有属性
					* 非主属性：除过码属性组的属性
					
		3. 第三范式（3NF）：在2NF基础上，任何非主属性不依赖于其它非主属性（在2NF基础上消除传递依赖）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="常用单词" tabindex="-1"><a class="header-anchor" href="#常用单词" aria-hidden="true">#</a> 常用单词</h3><p>databases 数据库</p><p>character 角色</p><p>exists 目标存在</p><p>alter 改变</p><p>insert 增</p><p>delete 删</p><p>update 更新</p><p>select 选择</p><p>between 在两者之间</p><p>count 计数</p><p>avg 平均</p><p>group by 分组</p><p>HAVING 分组之后过滤 (具有)</p><p>order by 排序</p><p>asc 升序</p><p>desc 降序</p><p>limit 限度(分页)</p><p>concat 合并多个数组(拼接字符串)</p><p>lower 降低</p><p>upper 上面</p><p>lpad 左填充<br> rpad 右填充</p><p>ceil 向上取整</p><p>floor 地板</p><p>rand 随机数</p><p>round 四舍五入</p><p>curdate 当前日期</p><p>curtime 当前时间</p><p>now() 现在</p><p>year 年</p><p>month 月</p><p>day 天</p><p>interval 间隔</p><p>datediff 两日期差</p><p>unique 唯一</p><p>primarykey 主键</p><p>default 默认</p><p>check 检查</p><p>foreign key 外键</p><p>auto_increment 自增</p><p>constraint 约束</p><p>references 参考</p><p>restrict 限制</p><p>cascade 级联</p><p>action 行为</p>`,135),s=[l];function a(r,v){return i(),n("div",null,s)}const u=e(d,[["render",a],["__file","MySQLBasic.html.vue"]]);export{u as default};
