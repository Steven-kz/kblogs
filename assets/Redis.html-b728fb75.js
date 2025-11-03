import{_ as i,r as l,o as r,c as d,a as n,b as s,d as a,f as c}from"./app-314de074.js";const t={},o={href:"https://redis.io/downloads/",target:"_blank",rel:"noopener noreferrer"},p=n("br",null,null,-1),v={href:"https://download.redis.io/releases/",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),u=n("code",null,"Redis6.0",-1),b=n("code",null,"gcc版本升级到5.3以上",-1),k=n("code",null,"gcc",-1),g=n("code",null,"4.8.5",-1),h=n("code",null,"gcc",-1),f=c(`<h2 id="一、安装redis" tabindex="-1"><a class="header-anchor" href="#一、安装redis" aria-hidden="true">#</a> 一、安装Redis</h2><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>cd <span class="token operator">/</span>usr/local
tar <span class="token operator">-</span>zxvf redis-7<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2<span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>由于redis是c语言编写的，所以我们需要先安装gcc，安装的命令如下：</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>yum install gcc-c+<span class="token operator">+</span>
gcc <span class="token operator">-</span>v  如果gcc版本太低，redis6<span class="token punctuation">.</span>0之后gcc需要升级
cd redis-7<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2/
<span class="token comment">#进行编译</span>
make &amp;&amp; make install
<span class="token comment">#启动指定配置文件 配置文件中daemonize改为yes</span>
vim redis<span class="token punctuation">.</span>conf
<span class="token comment">#存放redis配置文件</span>
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>usr/local/redis/6379/etc
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>usr/local/redis/6340/etc
mkdir <span class="token operator">-</span>p <span class="token operator">/</span>usr/local/redis/bin

<span class="token comment">#redis下的redis.conf复制/usr/local/redis/etc</span>
<span class="token function">cp</span> <span class="token operator">/</span>usr/local/redis-7<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2/redis<span class="token punctuation">.</span>conf <span class="token operator">/</span>usr/local/redis/6379/etc/
<span class="token function">cp</span> <span class="token operator">/</span>usr/local/redis-7<span class="token punctuation">.</span>0<span class="token punctuation">.</span>2/redis<span class="token punctuation">.</span>conf <span class="token operator">/</span>usr/local/redis/6340/etc/
<span class="token comment">#移动文件到/usr/local/redis/bin下</span>

sudo <span class="token function">mv</span> <span class="token operator">/</span>usr/local/bin/<span class="token operator">*</span> <span class="token operator">/</span>usr/local/redis/bin/
<span class="token comment">#启动指定配置文件 配置文件中daemonize改为yes</span>
<span class="token operator">/</span>usr/local/redis/bin/redis-server <span class="token operator">/</span>usr/local/redis/6379/etc/redis<span class="token punctuation">.</span>conf
<span class="token operator">/</span>usr/local/redis/bin/redis-server <span class="token operator">/</span>usr/local/redis/6340/etc/redis<span class="token punctuation">.</span>conf
<span class="token comment">#连接</span>
<span class="token punctuation">.</span><span class="token operator">/</span>redis-<span class="token function">cli</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、配置开机自启" tabindex="-1"><a class="header-anchor" href="#二、配置开机自启" aria-hidden="true">#</a> 二、配置开机自启</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/systemd/system/redis6379.service
# redis6379.service以下内容
[Unit]
Description=Redis Server
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/6379/etc/redis.conf
Restart=always
PrivateTmp=true
[Install]
WantedBy=multi-user.target


vim /etc/systemd/system/redis6340.service
# redis6340.service以下内容
[Unit]
Description=Redis Server
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/6340/etc/redis.conf
Restart=always
PrivateTmp=true
[Install]
WantedBy=multi-user.target

#重新加载 systemd 配置
sudo systemctl daemon-reload

#启动
sudo systemctl start redis6379
sudo systemctl start redis6340
systemctl status redis6340
systemctl stop redis6340
#设置开机自启
sudo systemctl enable redis6379
sudo systemctl enable redis6340
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/1.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="三、redis集群配置-三主三从" tabindex="-1"><a class="header-anchor" href="#三、redis集群配置-三主三从" aria-hidden="true">#</a> 三、redis集群配置（三主三从）</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>requirepass <span class="token number">123456</span>
<span class="token comment">#bind 192.168.56.103   # 注释</span>
port <span class="token number">6379</span>             <span class="token comment"># 监听端口号</span>
daemonize <span class="token function">yes</span>         <span class="token comment"># 启用守护进程模式，Redis 在后台运行</span>
pidfile /usr/local/redis/logs/redis_6379.pid   <span class="token comment"># 指定 PID 文件的路径</span>
logfile /usr/local/redis/logs/redis_6379.log   <span class="token comment"># 指定日志文件的路径</span>
appendonly <span class="token function">yes</span>        <span class="token comment"># 开启 AOF 持久化模式</span>
appendfilename <span class="token string">&quot;appendonly.aof&quot;</span>   <span class="token comment"># AOF 文件的文件名</span>
appendfsync everysec  <span class="token comment"># 每秒同步一次 AOF 文件到磁盘</span>
masterauth <span class="token number">123456</span>
<span class="token comment">#不配置集群无需以下配置</span>
cluster-enabled <span class="token function">yes</span>   <span class="token comment"># 开启 Redis 集群模式</span>
cluster-config-file nodes-6379.conf   <span class="token comment"># 集群配置文件的文件名</span>
cluster-node-timeout <span class="token number">5000</span>   <span class="token comment"># 节点超时时间，单位为毫秒</span>
cluster-migration-barrier <span class="token number">1</span>   <span class="token comment"># 集群迁移障碍，用于避免群集中的数据分区</span>
cluster-require-full-coverage <span class="token function">yes</span>   <span class="token comment"># 集群是否需要全覆盖（所有槽位都被分配）	</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis集群需要使用ruby</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> ruby
yum <span class="token function">install</span> rubygems
gem  <span class="token function">install</span> redis <span class="token parameter variable">--version</span> <span class="token number">3.0</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#放开3306端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">6379</span>/tcp <span class="token parameter variable">--permanent</span>    
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">6340</span>/tcp <span class="token parameter variable">--permanent</span>  
<span class="token comment">#开放redis集群总线端口。集群总线端口是redis客户端连接的端口+10000。</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">16379</span>/tcp <span class="token parameter variable">--permanent</span>    
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">16340</span>/tcp <span class="token parameter variable">--permanent</span> 
<span class="token comment">#重新加载配                                             </span>
firewall-cmd <span class="token parameter variable">--reload</span> 

<span class="token function">mkdir</span> /usr/local/redis/logs
/usr/local/redis/bin/redis-server /usr/local/redis/6379/etc/redis.conf
/usr/local/redis/bin/redis-server /usr/local/redis/6340/etc/redis.conf
<span class="token builtin class-name">cd</span> /usr/local/redis-7.0.2/src
<span class="token comment"># 启动集群模式  1 为主除从</span>
./redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">--cluster</span> create <span class="token number">192.168</span>.112.128:6379 <span class="token number">192.168</span>.112.129:6379 <span class="token number">192.168</span>.112.130:6379  <span class="token number">192.168</span>.112.128:6340 <span class="token number">192.168</span>.112.129:6340 <span class="token number">192.168</span>.112.130:6340 --cluster-replicas <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/2.png" alt="image.png" loading="lazy"><br> 验证集群</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#连接任意客户端</span>
./redis-cli <span class="token parameter variable">-a</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-h</span> <span class="token parameter variable">-p</span>
./redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> <span class="token parameter variable">-c</span> <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6379</span>
<span class="token comment">#查看集群信息</span>
cluster info 
<span class="token comment">#查看节点列表</span>
cluster nodes 
cluster slots
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、主从复制-一主二从" tabindex="-1"><a class="header-anchor" href="#四、主从复制-一主二从" aria-hidden="true">#</a> 四、主从复制（一主二从）</h2><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/3.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 一主两从</span>
<span class="token comment">#停止redis服务</span>
<span class="token builtin class-name">cd</span> /usr/local/redis-7.0.2/
<span class="token function">sudo</span> <span class="token function">find</span> / <span class="token parameter variable">-name</span>  nodes-6379.conf
<span class="token function">sudo</span> <span class="token function">find</span> / <span class="token parameter variable">-name</span>  dump.rdb
<span class="token comment">#删除dump.rdb nodes-6379.conf</span>
<span class="token comment">#三台机器redis数据需要删除</span>
<span class="token comment">#注释掉集群模式</span>
cluster-enabled <span class="token function">yes</span>
cluster-config-file nodes.conf
cluster-node-timeout <span class="token number">15000</span>

<span class="token comment">#添加从库配置</span>
replicaof <span class="token number">192.168</span>.112.128 <span class="token number">6379</span>			    <span class="token comment">#主要就是从库添加这个参数，指定主库的ip和端口</span>
masterauth <span class="token number">123456</span>								<span class="token comment">#主库上有密码的话，需要在从库添加这个参数</span>
<span class="token comment"># 查看</span>
./redis-cli <span class="token parameter variable">-a</span> <span class="token number">123456</span> info replication
<span class="token comment">#客户端命令报错 https://blog.csdn.net/liummmin/article/details/108580120</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/4.png" alt="image.png" loading="lazy"><br> 从库<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/5.png" alt="image.png" loading="lazy"></p><h2 id="五、哨兵模式配置" tabindex="-1"><a class="header-anchor" href="#五、哨兵模式配置" aria-hidden="true">#</a> 五、哨兵模式配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp /usr/local/redis-7.0.2/sentinel.conf /usr/local/redis/6379/etc/
cp /usr/local/redis-7.0.2/sentinel.conf /usr/local/redis/6340/etc/

cd /usr/local/redis/6379/etc/
vi sentinel.conf

cd /usr/local/redis/6340/etc/
vi sentinel.conf

#端口默认为26379。
port:26379
#关闭保护模式，可以外部访问。
protected-mode:no
#设置为后台启动。
daemonize:yes
#日志文件。
logfile /usr/local/redis/logs/sentinel_6379.log
#指定主机IP地址和端口，并且指定当有2台哨兵认为主机挂了，则对主机进行容灾切换。
sentinel monitor mymaster 192.168.231.130 6379 2
#当在Redis实例中开启了requirepass，这里就需要提供密码。
sentinel auth-pass mymaster 123456
#这里设置了主机多少秒无响应，则认为挂了。
sentinel down-after-milliseconds mymaster 3000
#主备切换时，最多有多少个slave同时对新的master进行同步，这里设置为默认的1。
sentinel parallel-syncs mymaster 1
#故障转移的超时时间，这里设置为三分钟。
sentinel failover-timeout mymaster 180000

firewall-cmd --add-port=26379/tcp --permanent --zone=public
firewall-cmd --add-port=26340/tcp --permanent --zone=public
firewall-cmd --reload


#启动
/usr/local/redis/bin/redis-sentinel  /usr/local/redis/6379/etc/sentinel.conf
/usr/local/redis/bin/redis-sentinel  /usr/local/redis/6340/etc/sentinel.conf
#验证
./redis-cli -p 26379 info sentinel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/6.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_4-1-配置哨兵自启" tabindex="-1"><a class="header-anchor" href="#_4-1-配置哨兵自启" aria-hidden="true">#</a> 4.1 配置哨兵自启</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/systemd/system/redis26379.service
[Unit]
Description=Redis Server
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-sentinel  /usr/local/redis/6379/etc/sentinel.conf
Restart=always
PrivateTmp=true
[Install]
WantedBy=multi-user.target


vim /etc/systemd/system/redis26340.service
[Unit]
Description=Redis Server
After=network.target
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-sentinel  /usr/local/redis/6340/etc/sentinel.conf
Restart=always
PrivateTmp=true
[Install]
WantedBy=multi-user.target

#重新加载 systemd 配置
sudo systemctl daemon-reload
#设置开机自启
sudo systemctl enable redis26379
sudo systemctl enable redis26340
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，哨兵已经监听到当前的主机IP端口和运行状态，并且有1台从机，6个哨兵。<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/redis/7.png" alt="image.png" loading="lazy"></p><h3 id="_4-2-容灾切换" tabindex="-1"><a class="header-anchor" href="#_4-2-容灾切换" aria-hidden="true">#</a> 4.2 容灾切换</h3><p>登陆6379</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./redis-cli -p 6379
auth 123456
#查看当前主服务器
./redis-cli -p 6379 -a 123456 info replication
./redis-cli -p 26379 info sentinel
#停止主节点
systemctl stop redis6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自行验证</p>`,29);function y(x,_){const e=l("ExternalLinkIcon");return r(),d("div",null,[n("p",null,[s("官网："),n("a",o,[s("https://redis.io/downloads/"),a(e)]),p,s(" 指定版本下载地址："),n("a",v,[s("https://download.redis.io/releases/"),a(e)]),m,s(" 千万别用redis6版本，很痛苦"),u,s("版本需要将"),b,s("，而我们的"),k,s("版本默认是"),g,s("，所有需要对"),h,s("版本进行升级")]),f])}const z=i(t,[["render",y],["__file","Redis.html.vue"]]);export{z as default};
