import{_ as i,r as l,o as p,c,a as n,b as s,d as t,f as a}from"./app-314de074.js";const o={},r=a(`<h2 id="一、jdk安装" tabindex="-1"><a class="header-anchor" href="#一、jdk安装" aria-hidden="true">#</a> 一、JDK安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u411-linux-x64.tar.gz
<span class="token comment">#配置环境变量</span>
<span class="token function">vim</span> /etc/profile
<span class="token comment">#添加内容</span>
<span class="token builtin class-name">set</span> <span class="token function">java</span> environment
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_411
<span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span>/usr/local/jdk1.8.0_411/jre
<span class="token assign-left variable">CLASS_PATH</span><span class="token operator">=</span>.:<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:<span class="token variable">$JRE_HOME</span>/lib
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JRE_HOME</span>/bin
<span class="token builtin class-name">export</span> JAVA_HOME JRE_HOME CLASS_PATH <span class="token environment constant">PATH</span>
<span class="token comment">#使配置生效</span>
<span class="token builtin class-name">source</span> /etc/profile 
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、nacos单机" tabindex="-1"><a class="header-anchor" href="#二、nacos单机" aria-hidden="true">#</a> 二、Nacos单机</h2>`,3),d={href:"https://github.com/alibaba/nacos/releases",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nacos-server-2.4.0.1.tar.gz 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-配置自启脚本" tabindex="-1"><a class="header-anchor" href="#_2-1-配置自启脚本" aria-hidden="true">#</a> 2.1 配置自启脚本</h3><p>#编辑命令<br>vim /usr/lib/systemd/system/nacos.service</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nacos
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token comment">#单节点方式启动</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/nacos/bin/startup.sh <span class="token parameter variable">-m</span> standalone
<span class="token comment"># 集群方式启动</span>
<span class="token comment"># ExecStart=/home/nacos/bin/startup.sh</span>
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/home/nacos/bin/shutdown.sh
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/home/nacos/bin/shutdown.sh
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#刷新配置<br>systemctl daemon-reload<br>systemctl enable nacos.service</p><h3 id="_2-2-配置nacos-jdk目录" tabindex="-1"><a class="header-anchor" href="#_2-2-配置nacos-jdk目录" aria-hidden="true">#</a> 2.2 配置Nacos JDK目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#切换目录</span>
<span class="token builtin class-name">cd</span> /home/nacos/bin/
<span class="token comment">#编辑</span>
<span class="token function">vim</span> startup.sh
<span class="token comment">#获取JAVA_HOME</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$JAVA_HOME</span>
/usr/local/jdk1.8.0_411
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/nacos/1.png" alt="image.png" loading="lazy"><br>sudo firewall-cmd --permanent --add-port=8848/tcp<br>sudo firewall-cmd --reload<br>systemctl start nacos<br>systemctl status nacos</p><h2 id="三、nacos集群" tabindex="-1"><a class="header-anchor" href="#三、nacos集群" aria-hidden="true">#</a> 三、Nacos集群</h2><table><thead><tr><th>IP Address</th><th>Port</th></tr></thead><tbody><tr><td>192.168.47.132</td><td>8848</td></tr><tr><td>192.168.47.133</td><td>8848</td></tr><tr><td>192.168.47.134</td><td>8848</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>create database nacos_config charset utf8
执行文件到数据库 /home/nacos/conf - mysql-schema.sql 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-配置nacos节点信息" tabindex="-1"><a class="header-anchor" href="#_3-1-配置nacos节点信息" aria-hidden="true">#</a> 3.1 配置Nacos节点信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#切换目录</span>
<span class="token builtin class-name">cd</span> /home/nacos/conf
<span class="token comment">#拷贝文件</span>
<span class="token function">cp</span> cluster.conf.example cluster.conf

<span class="token comment">#编辑</span>
<span class="token function">vim</span> cluster.conf

<span class="token comment">#加入节点信息</span>
<span class="token number">192.168</span>.47.132:8848
<span class="token number">192.168</span>.47.133:8848
<span class="token number">192.168</span>.47.134:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-配置数据库节点信息" tabindex="-1"><a class="header-anchor" href="#_3-2-配置数据库节点信息" aria-hidden="true">#</a> 3.2 配置数据库节点信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#切换目录</span>
<span class="token builtin class-name">cd</span> /home/nacos/conf
<span class="token comment">#编辑</span>
<span class="token function">vim</span> application.properties

<span class="token comment"># 表明用MySQL作为后端存储</span>
<span class="token assign-left variable">spring.datasource.platform</span><span class="token operator">=</span>mysql
<span class="token comment"># 有几个数据库实例</span>
<span class="token assign-left variable">db.num</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 第1个实例【从0开始】</span>
<span class="token assign-left variable">db.url.0</span><span class="token operator">=</span>jdbc:mysql://192.168.21.3:3306/nacos_config?characterEncoding<span class="token operator">=</span>utf8<span class="token operator">&amp;</span><span class="token assign-left variable">connectTimeout</span><span class="token operator">=</span><span class="token number">1000</span><span class="token operator">&amp;</span><span class="token assign-left variable">socketTimeout</span><span class="token operator">=</span><span class="token number">3000</span><span class="token operator">&amp;</span><span class="token assign-left variable">autoReconnect</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">useUnicode</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">useSSL</span><span class="token operator">=</span>false<span class="token operator">&amp;</span><span class="token assign-left variable">serverTimezone</span><span class="token operator">=</span>UTC
<span class="token assign-left variable">db.user.0</span><span class="token operator">=</span>nacos
<span class="token assign-left variable">db.password.0</span><span class="token operator">=</span><span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/nacos/2.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-3-修改启动方式" tabindex="-1"><a class="header-anchor" href="#_3-3-修改启动方式" aria-hidden="true">#</a> 3.3 修改启动方式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#编辑命令</span>
<span class="token function">vim</span> /usr/lib/systemd/system/nacos.service

修改
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/nacos/bin/startup.sh <span class="token parameter variable">-m</span> standalone
为：
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/home/nacos/bin/startup.sh

<span class="token comment">#刷新配置</span>
systemctl daemon-reload
systemctl start nacos
systemctl status nacos

日志查看
<span class="token punctuation">[</span>root@192 conf<span class="token punctuation">]</span><span class="token comment"># tail -f  /home/nacos/logs/start.out</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/nacos/3.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-4-开启鉴权" tabindex="-1"><a class="header-anchor" href="#_3-4-开启鉴权" aria-hidden="true">#</a> 3.4 开启鉴权</h3>`,20),v={href:"https://nacos.io/zh-cn/docs/v2/guide/user/auth.html",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#切换目录</span>
<span class="token builtin class-name">cd</span> /home/nacos/conf
<span class="token comment">#编辑</span>
<span class="token function">vim</span> application.properties
systemctl restart nacos
<span class="token function">tail</span> <span class="token parameter variable">-f</span>  /home/nacos/logs/start.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/nacos/4.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="四、nginx转发" tabindex="-1"><a class="header-anchor" href="#四、nginx转发" aria-hidden="true">#</a> 四、Nginx转发</h2><p>vim /etc/hosts</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>47<span class="token punctuation">.</span>132 middleware-01
192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>47<span class="token punctuation">.</span>133 middleware-02
192<span class="token punctuation">.</span>168<span class="token punctuation">.</span>47<span class="token punctuation">.</span>134 middleware-03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># 反向代理配置</span>
upstream nacos-cluster<span class="token punctuation">{</span>
    ip_hash<span class="token punctuation">;</span>
    server middleware-01:8848<span class="token punctuation">;</span>
    server middleware-02:8848<span class="token punctuation">;</span>
    server middleware-03:8848<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
    listen       8848<span class="token punctuation">;</span>
    access_log  <span class="token operator">/</span>home/nginx/logs/8848<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>
    client_max_body_size 50M<span class="token punctuation">;</span>

    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header Remote_Addr <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_pass http:<span class="token operator">/</span><span class="token operator">/</span>nacos-cluster/nacos/<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
		
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、java连接" tabindex="-1"><a class="header-anchor" href="#五、java连接" aria-hidden="true">#</a> 五、Java连接</h2><p>修改密码</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>&lt;dependency&gt;
       &lt;groupId&gt;org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot&lt;<span class="token operator">/</span>groupId&gt;
       &lt;artifactId&gt;spring-boot-starter-security&lt;<span class="token operator">/</span>artifactId&gt;
&lt;<span class="token operator">/</span>dependency&gt;
执行下边这个代码
System<span class="token punctuation">.</span>err<span class="token punctuation">.</span>println<span class="token punctuation">(</span>new BCryptPasswordEncoder<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&quot;nacos&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
使用的数据库为 nacos， 用户表 users
修改用户账号密码就是替换users表的账户密码信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profiles</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>profile</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>test-dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring.profiles.active</span><span class="token punctuation">&gt;</span></span>test-dev<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring.profiles.active</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nacos-server-addr</span><span class="token punctuation">&gt;</span></span>ip:8848<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nacos-server-addr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>nacos<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activation</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activeByDefault</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>activation</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profile</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>profiles</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span> 
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token comment"># 应用名称</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> service<span class="token punctuation">-</span>feel
  <span class="token key atrule">profiles</span><span class="token punctuation">:</span>
    <span class="token comment"># 环境配置</span>
    <span class="token key atrule">active</span><span class="token punctuation">:</span> @spring.profiles.active@
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>
        <span class="token comment"># 服务注册地址</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>nacos<span class="token punctuation">-</span>server<span class="token punctuation">-</span>addr<span class="token punctuation">}</span>
        <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>username<span class="token punctuation">}</span>
        <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>password<span class="token punctuation">}</span>
      <span class="token key atrule">config</span><span class="token punctuation">:</span>
        <span class="token key atrule">namespace</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>
        <span class="token comment"># 配置中心地址</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>nacos<span class="token punctuation">-</span>server<span class="token punctuation">-</span>addr<span class="token punctuation">}</span>
        <span class="token comment"># 配置文件格式</span>
        <span class="token key atrule">file-extension</span><span class="token punctuation">:</span> yml
        <span class="token key atrule">username</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>username<span class="token punctuation">}</span>
        <span class="token key atrule">password</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>password<span class="token punctuation">}</span>
        <span class="token comment"># 共享配置</span>
        <span class="token key atrule">shared-configs</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> application<span class="token punctuation">-</span>$<span class="token punctuation">{</span>spring.profiles.active<span class="token punctuation">}</span>.$<span class="token punctuation">{</span>spring.cloud.nacos.config.file<span class="token punctuation">-</span>extension<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function k(b,g){const e=l("ExternalLinkIcon");return p(),c("div",null,[r,n("p",null,[s("下载地址："),n("a",d,[s("https://github.com/alibaba/nacos/releases"),t(e)])]),u,n("p",null,[s("参考文档："),n("a",v,[s("https://nacos.io/zh-cn/docs/v2/guide/user/auth.html"),t(e)])]),m])}const f=i(o,[["render",k],["__file","Nacos.html.vue"]]);export{f as default};
