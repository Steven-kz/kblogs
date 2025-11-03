import{_ as l,r as t,o as i,c as p,a as s,b as n,d as o,f as a}from"./app-314de074.js";const c={},r=a('<p>集群执行流程<br>会有很小的延迟，基本没有影响<br>1、从库不断试探主库二进制日志文件，如果发现有更新则发送请求到来获取主库中新的内容<br>2、向主库中写数据：包括添加，删除，修改，建库建表等<br>3、主库写的命令更新到二进制文件中日志的偏移量<br>4、如果从库试探二进制文件发现偏移量与从记录的偏移量值不同则表示主库有更新，就启动IO线程向主库请求从从某个偏移量开始到而二进制日期文件结束位置之间的所有数据<br>5、主库根据从库的请求的偏移量位置来推送数据到从库中，从库接受到数据后，会更新从库记录的偏移量位置<br>6、从库获取了主库的数据库以后，将这些命令数据写入日志文件中，然后唤醒sql线程同时让当前的IO线程挂起<br>7、sql线程根据记录中日志文件的偏移量读取日志文件中的命令<br>8、sql线程拿到命令以后在本地数据库进行回放（从库执行主库sql语句），回访完成当前sql线程挂机（休眠等待）</p><h2 id="一、安装mysql" tabindex="-1"><a class="header-anchor" href="#一、安装mysql" aria-hidden="true">#</a> 一、安装Mysql</h2>',2),d=s("strong",null,"CentOS7环境之RPM方式离线安装MySQL5.7",-1),m=s("br",null,null,-1),u={href:"https://downloads.mysql.com/archives/community/",target:"_blank",rel:"noopener noreferrer"},v=s("br",null,null,-1),b=s("img",{src:"https://steven-kz.github.io/BlogImgs/imgaes/mysql/1.png",alt:"image.png",loading:"lazy"},null,-1),k=a(`<h3 id="_1-1-删除mariadb" tabindex="-1"><a class="header-anchor" href="#_1-1-删除mariadb" aria-hidden="true">#</a> 1.1 删除mariadb</h3><p>CentOS7 一般yum安装包中有自带的mariadb，会导致依赖冲突<br>首先执行命令rpm -qa|grep mariadb查看是否有mariadb的安装包，若没有可以无视，直接进入第二，安装mysql 5.7。</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#查看</span>
rpm <span class="token operator">-</span>qa<span class="token punctuation">|</span>grep mariadb
<span class="token comment">#删除</span>
rpm <span class="token operator">-</span>e <span class="token operator">--</span>nodeps mariadb-libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-检查是否安装过mysql" tabindex="-1"><a class="header-anchor" href="#_1-2-检查是否安装过mysql" aria-hidden="true">#</a> 1.2 检查是否安装过mysql</h3><p>检查是否安装过mysql</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#安装前先检查下，是否之前安装过mysql服务</span>
<span class="token namespace">[root@192 mysql-5.7.42]</span><span class="token comment"># rpm -qa | grep mysql</span>
mysql-community-libs-compat-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64
mysql-community-client-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64
mysql-community-server-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64
mysql-community-libs-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64

<span class="token comment">#如果之前安装过，我们可以通过下面命令来卸载安装包</span>
<span class="token namespace">[root@192 mysql-5.7.42]</span><span class="token comment"># rpm -e --nodeps 安装包名称</span>
<span class="token comment">#如果之前安装过mysql，datadir目录下会有数据存在，需要清空该目录</span>

<span class="token comment">#查看 datadir 指定的目录</span>
<span class="token namespace">[root@192 mysql-5.7.42]</span><span class="token comment"># cat /etc/my.cnf | grep datadir</span>
datadir=<span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib/mysql

<span class="token comment">#删除 /var/lib/mysql 目录下的所有内容</span>
<span class="token namespace">[root@192 mysql-5.7.42]</span><span class="token comment"># cd /var/lib/mysql</span>
<span class="token comment">#执行rm命令前，一定要查看所在目录的位置</span>
<span class="token namespace">[root@192 mysql-5.7.42]</span><span class="token comment"># rm -rf ./* </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-安装mysql" tabindex="-1"><a class="header-anchor" href="#_1-3-安装mysql" aria-hidden="true">#</a> 1.3 安装mysql</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>cd <span class="token operator">/</span>usr/local
<span class="token comment"># 在当前目录下（mysql）下创建一个 mysql-5.7 文件夹</span>
mkdir mysql-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42
<span class="token comment"># 解压安装包到该目录下</span>
tar <span class="token operator">-</span>xvf mysql-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm-bundle<span class="token punctuation">.</span>tar <span class="token operator">-</span>C mysql-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压完成之后可以切换到 mysql-5.7 目录下查看解压后的文件<br>可以看到解压后的文件都是 rpm 文件，所以需要用到rpm包资源管理器相关的指令安装这些 rpm 的安装包<br>在安装执行 rpm 安装包之前先下载一些插件，因为 mysql 里面有些 rpm 的安装依赖于该插件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> openssl-devel
<span class="token comment"># 和</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> libaio perl net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完该插件之后，依次执行以下命令安装这些 rpm 包</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#按顺序执行下面命令</span>
rpm <span class="token operator">-</span>ivh mysql-community-common-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm
rpm <span class="token operator">-</span>ivh mysql-community-libs-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm
rpm <span class="token operator">-</span>ivh mysql-community-libs-compat-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm 
rpm <span class="token operator">-</span>ivh mysql-community-client-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm
rpm <span class="token operator">-</span>ivh mysql-community-server-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tips：按照顺序依次执行安装命令 （删除mariadb则不会出现当前问题）<br>如果在安装过程中遇到了缺少依赖的报错，我们可以通过添加 --force --nodeps，来跳过依赖检查，进行强制安装</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token namespace">[root@192 mysql-5.7.42]</span><span class="token comment"># rpm -ivh mysql-community-libs-5.7.42-1.el7.x86_64.rpm</span>
warning: mysql-community-libs-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64<span class="token punctuation">.</span>rpm: Header V4 RSA/SHA256 Signature<span class="token punctuation">,</span> key ID 3a79bd29: NOKEY
error: Failed dependencies:
	mysql-community-common<span class="token punctuation">(</span>x86-64<span class="token punctuation">)</span> &gt;= 5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>9 is needed by mysql-community-libs-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64
	mariadb-libs is obsoleted by mysql-community-libs-5<span class="token punctuation">.</span>7<span class="token punctuation">.</span>42-1<span class="token punctuation">.</span>el7<span class="token punctuation">.</span>x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-初始化mysql" tabindex="-1"><a class="header-anchor" href="#_1-4-初始化mysql" aria-hidden="true">#</a> 1.4 初始化mysql</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment">#初始化MySQL数据库</span>
mysqld <span class="token operator">--</span>initialize <span class="token operator">--</span>user=mysql
<span class="token comment">#查看root用户的临时密码</span>
<span class="token function">cat</span> <span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>log/mysqld<span class="token punctuation">.</span>log <span class="token punctuation">|</span> grep <span class="token string">&#39;temporary password&#39;</span>
<span class="token comment"># 登录mysql</span>
systemctl <span class="token function">start</span> mysqld 
mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">+</span>密码
<span class="token comment">#修改密码</span>
<span class="token function">set</span> password = password<span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 开启远程连接(任意ip使用root用户连接)</span>
update mysql<span class="token punctuation">.</span>user <span class="token function">set</span> host=<span class="token string">&#39;%&#39;</span> where user=<span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-添加防火墙" tabindex="-1"><a class="header-anchor" href="#_1-5-添加防火墙" aria-hidden="true">#</a> 1.5 添加防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打开防火墙                   </span>
systemctl start firewalld
<span class="token comment">#放开3306端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">3307</span>/tcp <span class="token parameter variable">--permanent</span>    
<span class="token comment">#重新加载配                                             </span>
firewall-cmd <span class="token parameter variable">--reload</span> 
<span class="token comment"># 查看防火墙所以开放端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tips ：mysql配置文件路径 /etc/my.cnf<br>mysql自动进行systemctl托管，自带自启，无需配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start mysqld  <span class="token comment"># 启动mysql服务</span>
systemctl status mysqld  <span class="token comment"># 查看mysql服务状态</span>
systemctl <span class="token builtin class-name">enable</span> mysqld  <span class="token comment">#设置开机启动</span>
systemctl daemon-reload  <span class="token comment"># 刷新所有修改过的配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、修改my-cnf" tabindex="-1"><a class="header-anchor" href="#二、修改my-cnf" aria-hidden="true">#</a> 二、修改my.cnf</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>client<span class="token punctuation">]</span>
port <span class="token operator">=</span> <span class="token number">3307</span>
socket <span class="token operator">=</span> /var/lib/mysql/mysql.sock
default-character-set<span class="token operator">=</span>utf8

<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
port <span class="token operator">=</span> <span class="token number">3307</span>
<span class="token comment">#数据存放路径</span>
<span class="token assign-left variable">datadir</span><span class="token operator">=</span>/var/lib/mysql 
<span class="token comment">#通信</span>
<span class="token assign-left variable">socket</span><span class="token operator">=</span>/var/lib/mysql/mysql.sock 
<span class="token comment">#多日志文件</span>
symbolic-links<span class="token operator">=</span><span class="token number">0</span> 
<span class="token comment">#日志存放路径</span>
log-error<span class="token operator">=</span>/var/log/mysqld.log      
pid-file<span class="token operator">=</span>/var/run/mysqld/mysqld.pid

character-set-server<span class="token operator">=</span>utf8
<span class="token comment">#不区分表名大小写</span>
<span class="token assign-left variable">lower_case_table_names</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment">#自动提交事物</span>
autocommit <span class="token operator">=</span> <span class="token number">1</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改端口号启动报错，被拦截添加一个新的SELinux策略</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@192 ~<span class="token punctuation">]</span><span class="token comment"># journalctl -xe</span>
-- Support: http://lists.freedesktop.org/mailman/listinfo/systemd-devel
-- 
-- Unit mysqld.service has failed.
-- 
-- The result is failed.
Jul <span class="token number">27</span> 02:40:51 <span class="token number">192.168</span>.47.132 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Unit mysqld.service entered failed state.
Jul <span class="token number">27</span> 02:40:51 <span class="token number">192.168</span>.47.132 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: mysqld.service failed.
Jul <span class="token number">27</span> 02:40:51 <span class="token number">192.168</span>.47.132 setroubleshoot<span class="token punctuation">[</span><span class="token number">8589</span><span class="token punctuation">]</span>: SELinux is preventing /usr/sbin/mysqld from name_bind access on the tcp_socket port <span class="token number">3307</span>. For complete SELinux messages run: sealert <span class="token parameter variable">-l</span> 040c1cb3-de34-4530-8723-cb5bcdb2e5fc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> semanage port <span class="token parameter variable">-a</span> <span class="token parameter variable">-t</span> mysqld_port_t <span class="token parameter variable">-p</span> tcp <span class="token number">3307</span>
<span class="token function">sudo</span> restorecon <span class="token parameter variable">-Rv</span> /etc/my.cnf  <span class="token comment"># 如果你的MySQL配置文件路径不同，请替换这里的路径</span>
<span class="token function">sudo</span> systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、主从配置" tabindex="-1"><a class="header-anchor" href="#三、主从配置" aria-hidden="true">#</a> 三、主从配置</h2><h3 id="_1-3-主库mysql配置" tabindex="-1"><a class="header-anchor" href="#_1-3-主库mysql配置" aria-hidden="true">#</a> 1.3 主库Mysql配置</h3><p>主服务器配置文件my.cnf里面加入</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>server-id = 1
log-bin=master-bin							<span class="token comment">#添加，主服务器开启二进制日志</span>
log-slave-updates=true						<span class="token comment">#添加，允许从服务器更新二进制日志</span>

systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行下面SQL，记录下结果中<strong>File</strong>和Position（偏移量）的值，用于后续复制开始的位置</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>show master status<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>创建数据同步的用户并授权</strong>SQL的作用是创建一个用户,并且给用户授予REPLICATION SLAVE权限。常用于建立复制时所需要用到的用户权限，也就是slave必须被master授权具有该权限的用户，才能通过该用户复制</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>GRANT REPLICATION SLAVE ON <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> to <span class="token string">&#39;copyUser&#39;</span>@<span class="token string">&#39;%&#39;</span> identified by <span class="token string">&#39;123456&#39;</span><span class="token punctuation">;</span>
<span class="token comment"># 重置偏移量 防止创建的用户也同步到从库中</span>
reset master<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-从库mysql配置" tabindex="-1"><a class="header-anchor" href="#_1-4-从库mysql配置" aria-hidden="true">#</a> 1.4 从库Mysql配置</h3><p>修改Mysql数据库的配置文件/etc/my.cnf 后重启mysql</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>vim <span class="token operator">/</span>etc/my<span class="token punctuation">.</span>cnf
server-id = 2						<span class="token comment">#修改，注意id与Master的不同，两个Slave的id也要不同</span>
relay-log=relay-log-bin						<span class="token comment">#添加，开启中继日志，从主服务器上同步日志文件记录到本地</span>
relay-log-index=slave-relay-bin<span class="token punctuation">.</span>index		<span class="token comment">#添加，定义中继日志文件的位置和名称</span>

systemctl restart mysqld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>登录Mysql数据库，设置主库地址及同步位置</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>change master to master_host=<span class="token string">&#39;192.168.47.132&#39;</span><span class="token punctuation">,</span>master_port=3307<span class="token punctuation">,</span>master_user=<span class="token string">&#39;copyUser&#39;</span><span class="token punctuation">,</span>master_password=<span class="token string">&#39;123456&#39;</span><span class="token punctuation">,</span>master_log_file=<span class="token string">&#39;master-bin.000001&#39;</span><span class="token punctuation">,</span>master_log_pos=154<span class="token punctuation">;</span>
<span class="token comment"># 启动从节点</span>
<span class="token function">start</span> slave<span class="token punctuation">;</span>

<span class="token comment"># 如果配置错了停止掉重新配置即可</span>
stop slave<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明<br>A. master_host : 主库的IP地址 ，master_port：指定端口<br>B. master_user : 访问主库进行主从复制的用户名(上面在主库创建的)<br>C. master_password : 访问主库进行主从复制的用户名对应的密码<br>D. master_log_file : 从哪个日志文件开始同步(上述查询master状态中展示的有)<br>E. master_log_pos : 从指定日志文件的哪个位置开始同步(上述查询master状态中展示的有)<br><strong>查看从数据库的状态</strong></p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>show slave status\\G<span class="token punctuation">;</span>	  <span class="token comment">#查看 Slave 状态</span>
<span class="token operator">/</span><span class="token operator">/</span>确保 IO 和 SQL 线程都是 Yes，代表同步正常。
Slave_IO_Running: Yes	  <span class="token comment">#负责与主机的io通信</span>
Slave_SQL_Running: Yes    <span class="token comment">#负责自己的slave mysql进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/mysql/12.png" alt="image.png" loading="lazy"><br>Tips：不要在从库进行写的操作，可能会导致Slave_SQL_Running sql回放失败，解决方案：根据show slave status\\G找到问题，删除相应数据，重新启动slave即可，或者重新删掉从库所有数据，重新配置从库即可。</p>`,41);function h(y,g){const e=t("ExternalLinkIcon");return i(),p("div",null,[r,s("p",null,[d,m,n("官网下载Mysql："),s("a",u,[n("https://downloads.mysql.com/archives/community/"),o(e)]),v,n(),b]),k])}const _=l(c,[["render",h],["__file","Mysql5.7.html.vue"]]);export{_ as default};
