import{_ as l,r as i,o as t,c as o,a as s,b as a,d as r,f as n}from"./app-942d725a.js";const p={},c=n(`<h1 id="mysql数据恢复" tabindex="-1"><a class="header-anchor" href="#mysql数据恢复" aria-hidden="true">#</a> Mysql数据恢复</h1><h2 id="一、开启bin-log" tabindex="-1"><a class="header-anchor" href="#一、开启bin-log" aria-hidden="true">#</a> 一、开启BIN-LOG</h2><p><strong>binlog基本概念</strong><br><strong>binlog基本概念</strong>二进制日志(binnary log)以事件形式记录了对MySQL数据库执行更改的所有操作。 binlog是记录所有数据库表结构变更（例如CREATE、ALTER TABLE、DROP等）以及表数据修改（INSERT、UPDATE、DELETE、TRUNCATE等）的二进制日志。不会记录SELECT和SHOW这类操作，因为这类操作对数据本身并没有修改，但可以通过查询通用日志来查看MySQL执行过的所有语句。<br>登录MySQL后，查看binlog状态sql如下：<br>show variables like &#39;%log_bin%&#39;;<br>若未开启则需要开启<br>编辑配置文件配置开启binlog 放在mysqld下<br>编辑配置文件 vim /etc/my.cnf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#设置唯一id</span>
server-id<span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">##开启bin-log，产生的bin-log文件名即为bin-log.*</span>
log-bin<span class="token operator">=</span>mysql-bin
<span class="token comment">#指定bin-log为row类别，其他两种是statement、mixed</span>
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>row
<span class="token comment"># 在 binlog 中记录完整的行数据</span>
binlog_row_image <span class="token operator">=</span> full
<span class="token comment">#对全部数据库开启则注释掉binlog-do-db即可</span>
<span class="token comment">#对指定的数据库开启bin-log，这里是对food数据库开启bin-log服务</span>
binlog-do-db<span class="token operator">=</span>food
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后退出，然后重启我们的mysql服务<br>查看是否开启bin_log日志<br>mysql命令: show variables like &#39;log_%&#39;<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/mysql/3.png" alt="image.png" loading="lazy"></p><h2 id="二、数据恢复" tabindex="-1"><a class="header-anchor" href="#二、数据恢复" aria-hidden="true">#</a> 二、数据恢复</h2><p>自行模拟删除数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>查看我们当前使用的binlog
show master status;
查看日志列表
show master logs;
查看binlog日志信息包括位置
show variables like &#39;log_%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/mysql/4.png" alt="image.png" loading="lazy"><br><br><br> 当需要恢复数据时，为了防止恢复数据后影响最新业务，需要执行<span style="color:red;">flush logs</span><br> ，产生一个新的binlog文件，此时旧的binlog文件不会再有写入；<br><br> 进入到我们的binlog日志位置 /var/lib/mysql<br><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/mysql/5.png" alt="image.png" loading="lazy"><br> 下面具体通过mysql-bin.000001来进行数据恢复<br> 恢复时需要在binlog中找到两个位置：</p><ul><li>数据恢复的起始位置</li><li>数据恢复的结束位置</li></ul><h3 id="_2-1-mysqlbinlog" tabindex="-1"><a class="header-anchor" href="#_2-1-mysqlbinlog" aria-hidden="true">#</a> 2.1 mysqlbinlog</h3><p><strong>只能正向回滚，不适用</strong></p><p>在服务器内执行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>通过mysqlbinlog将binlog转为sql，以方便查询具体位置
mysqlbinlog --set-charset=utf-8 /var/lib/mysql/mysql-bin.000001&gt;backuptmp.sql
查看生成的backuptmp.sql，最终确定需要恢复的起始位置为的行数
执行恢复数据
mysqlbinlog -v /var/lib/mysql/mysql-bin.000005 --start-position=299 --stop-position=1305 | mysql -uroot -p999999
如果执行提示se you are using a --stop-position or --stop-datetime that refers to an event in the middle of a statement. The event(s) from the partial statement have not been written to output.
则表示个参数指向了一个语句中间的事件。部分语句的事件尚未被写入输出。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明如何定位起止行数：<br>并不是定位delete，drop的数据位置，而是寻找你create或Write的数据<br>举例：一条数据的inset如何定位<br><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/mysql/6.png" alt="image.png" loading="lazy"></p><h3 id="_2-2-binlog2-sql" tabindex="-1"><a class="header-anchor" href="#_2-2-binlog2-sql" aria-hidden="true">#</a> 2.2 binlog2.sql</h3><p>推荐使用</p><p>只针对于mysql5.6 5.7，必须开启binlog日志 ，配置请在官网查看</p><p><strong>优势：可反编译 直接回滚,可筛选库筛选表非常的方便</strong></p>`,19),d={href:"https://github.com/danfengcao/binlog2sql",target:"_blank",rel:"noopener noreferrer"},b=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装工具</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> <span class="token function">git</span> python-pip 

<span class="token comment"># 克隆binlog2sql</span>
<span class="token function">git</span> clone https://github.com/danfengcao/binlog2sql.git <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> binlog2sql
用pip命令来下载binlog2sql所需要的“requirements.txt”这个文本
pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt

<span class="token comment"># 安装位置</span>
<span class="token builtin class-name">cd</span> /mydata/binlog2sql/binlog2sql
<span class="token comment"># 执行回滚 配置在官网查看</span>
<span class="token comment"># 可根据mysqlbinlog找到删除的偏移量 根据偏移量去执行反编译sql，若不知偏移量也可直接全部反编译</span>
python binlog2sql.py <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">-P3307</span> <span class="token parameter variable">-uroot</span> -p****** <span class="token parameter variable">-dfood</span> <span class="token parameter variable">-t</span> jjjfood_order <span class="token parameter variable">-B</span> <span class="token parameter variable">--flashback</span>  --start-file<span class="token operator">=</span>mysql-bin.000012 <span class="token operator">&gt;</span> rollback.sql --start-position<span class="token operator">=</span><span class="token number">3270</span> --stop-position<span class="token operator">=</span><span class="token number">4335</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>若误删整表，该如何操作</strong></p><p><strong>针对于delete from 表 删除表中所有数据</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#根据时间去查看是否为当时删除的数据</span>
python binlog2sql.py <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">-P3307</span> <span class="token parameter variable">-uroot</span> -p****** <span class="token parameter variable">-dfood</span> <span class="token parameter variable">-t</span> jjjfood_center_menu  --start-file<span class="token operator">=</span><span class="token string">&#39;mysql-bin.000013&#39;</span>   --start-datetime<span class="token operator">=</span><span class="token string">&#39;2024-4-17 00:00:00&#39;</span>   --stop-datetime<span class="token operator">=</span><span class="token string">&#39;2024-04-17 16:51:58&#39;</span> 
<span class="token comment">#根据时间进行反编译执行sql</span>
python binlog2sql.py <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">-P3307</span> <span class="token parameter variable">-uroot</span> -p****** <span class="token parameter variable">-dfood</span> <span class="token parameter variable">-t</span> jjjfood_center_menu  --start-file<span class="token operator">=</span><span class="token string">&#39;mysql-bin.000012&#39;</span>   <span class="token parameter variable">-B</span> <span class="token operator">&gt;</span> rollback.sql --start-datetime<span class="token operator">=</span><span class="token string">&#39;2024-4-17 00:00:00&#39;</span>   --stop-datetime<span class="token operator">=</span><span class="token string">&#39;2024-04-17 16:51:58&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>针对于DROP删除</strong></p><p>1.被drop删除之后，binlog2无法查询和反编译到增删改语句</p><p>2.执行flush logs</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>python binlog2sql.py <span class="token parameter variable">-h127.0.0.1</span> <span class="token parameter variable">-P3307</span> <span class="token parameter variable">-uroot</span> <span class="token parameter variable">-p999999</span> <span class="token parameter variable">-dfood</span> <span class="token parameter variable">-t</span> jjjfood_product_unit --start-file<span class="token operator">=</span><span class="token string">&#39;mysql-bin.000016&#39;</span>  <span class="token operator">&gt;</span> rollback.sql --start-datetime<span class="token operator">=</span><span class="token string">&#39;2024-4-17 00:00:00&#39;</span>   --stop-datetime<span class="token operator">=</span><span class="token string">&#39;2024-04-17 16:51:58&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.从最初的binlog日志开始找create 表语句/或者是备份的表结构在数据库中添加(有表结构才会进行编译)</p><p>4.在flush logs之前所有的binlog日志文件执行上述命令，讲sql copy 一次执行恢复数据</p>`,10);function m(g,v){const e=i("ExternalLinkIcon");return t(),o("div",null,[c,s("p",null,[a("官网："),s("a",d,[a("https://github.com/danfengcao/binlog2sql"),r(e)])]),b])}const k=l(p,[["render",m],["__file","MysqlRestore.html.vue"]]);export{k as default};
