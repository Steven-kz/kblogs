import{_ as n,o as s,c as a,f as e}from"./app-314de074.js";const i={},l=e(`<p>分布式Minio采用 纠删码来防范多个节点宕机和位衰减 bit rot 。<br>分布式Minio至少需要4个硬盘，使用分布式Minio自动引入了纠删码功能。</p><h2 id="一、前置条件" tabindex="-1"><a class="header-anchor" href="#一、前置条件" aria-hidden="true">#</a> 一、前置条件</h2><table><thead><tr><th><strong>host</strong></th><th><strong>ip</strong></th></tr></thead><tbody><tr><td>minio-01</td><td>192.168.112.128</td></tr><tr><td>minio-02</td><td>192.168.112.129</td></tr><tr><td>minio-03</td><td>192.168.112.130</td></tr><tr><td>minio-04</td><td>192.168.112.131</td></tr></tbody></table><p>在所有服务器分别执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ hostnamectl set-hostname minio-01
$ hostnamectl set-hostname minio-02
$ hostnamectl set-hostname minio-03
$ hostnamectl set-hostname minio-04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在所有服务器全部执行<br>vim /etc/hosts</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.112.128 minio-01
<span class="token number">192.168</span>.112.129 minio-02
<span class="token number">192.168</span>.112.130 minio-03
<span class="token number">192.168</span>.112.131 minio-04
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop firewalld.service

<span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">9000</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">9001</span>/tcp <span class="token parameter variable">--permanent</span>
<span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改系统最大文件数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 查看系统最大文件数</span>
$ <span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> 
<span class="token comment">## 查看系统最大文件数</span>
$ <span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-a</span>
<span class="token comment">## 修改系统最大文件数</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;*   soft    nofile  65535&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;*   hard    nofile  65535&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf
$ <span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
<span class="token comment">## 重启服务器</span>
$ <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、下载并安装" tabindex="-1"><a class="header-anchor" href="#二、下载并安装" aria-hidden="true">#</a> 二、下载并安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">groupadd</span> <span class="token parameter variable">-r</span> minio-user
<span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-g</span> minio-user minio-user

<span class="token function">mkdir</span> /home/minio
<span class="token function">mkdir</span> /home/minio/data
<span class="token function">chown</span> minio-user:minio-user /home/minio/
<span class="token function">chown</span> minio-user:minio-user /home/minio/data
<span class="token function">chown</span> <span class="token parameter variable">-R</span> minio-user:minio-user /home/minio/
<span class="token function">chown</span> <span class="token parameter variable">-R</span> minio-user:minio-user /home/minio/data
<span class="token builtin class-name">cd</span> /home/minio
<span class="token function">wget</span> https://dl.min.io/server/minio/release/linux-amd64/archive/minio-20240113075303.0.0-1.x86_64.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-i</span> minio-20240113075303.0.0-1.x86_64.rpm

<span class="token comment">#查看是否有权限</span>
<span class="token function">ls</span> <span class="token parameter variable">-ld</span> /home/minio/data
drwxr-xr-x. <span class="token number">2</span> minio-user minio-user <span class="token number">6</span> Aug <span class="token number">18</span> <span class="token number">17</span>:44 /home/minio/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-minio集群配置" tabindex="-1"><a class="header-anchor" href="#_2-1-minio集群配置" aria-hidden="true">#</a> 2.1 minio集群配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/default/minio
/etc/default/minio 文件中找到以下字段，修改其中的配置

<span class="token comment">## 这块是文件磁盘的位置 因为我们之前配置了hosts,所以直接使用host,{1...4} 这边是一种池化写法</span>
<span class="token assign-left variable">MINIO_VOLUMES</span><span class="token operator">=</span><span class="token string">&quot;http://minio-0{1...4}/home/minio/data&quot;</span>
<span class="token comment">## minio-console的地址 就是web界面控制台</span>
<span class="token assign-left variable">MINIO_OPTS</span><span class="token operator">=</span><span class="token string">&quot;--console-address :9001&quot;</span>
<span class="token comment"># console的登陆账号</span>
<span class="token assign-left variable">MINIO_ROOT_USER</span><span class="token operator">=</span>admin
<span class="token comment"># console的登陆密码 密码有长度限制</span>
<span class="token assign-left variable">MINIO_ROOT_PASSWORD</span><span class="token operator">=</span>minioadmin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-minio-service配置" tabindex="-1"><a class="header-anchor" href="#_2-2-minio-service配置" aria-hidden="true">#</a> 2.2 minio.service配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /usr/lib/systemd/system/minio.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>MinIO
<span class="token assign-left variable">Documentation</span><span class="token operator">=</span>https://docs.min.io
<span class="token assign-left variable">Wants</span><span class="token operator">=</span>network-online.target
<span class="token assign-left variable">After</span><span class="token operator">=</span>network-online.target
<span class="token assign-left variable">AssertFileIsExecutable</span><span class="token operator">=</span>/usr/local/bin/minio

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>notify

<span class="token assign-left variable">WorkingDirectory</span><span class="token operator">=</span>/home/minio

<span class="token assign-left variable">User</span><span class="token operator">=</span>minio-user
<span class="token assign-left variable">Group</span><span class="token operator">=</span>minio-user
<span class="token assign-left variable">ProtectProc</span><span class="token operator">=</span>invisible

<span class="token assign-left variable">EnvironmentFile</span><span class="token operator">=</span>-/etc/default/minio
<span class="token assign-left variable">ExecStartPre</span><span class="token operator">=</span>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;if [ -z <span class="token entity" title="\\&quot;">\\&quot;</span><span class="token variable">\${MINIO_VOLUMES}</span><span class="token entity" title="\\&quot;">\\&quot;</span> ]; then echo <span class="token entity" title="\\&quot;">\\&quot;</span>Variable MINIO_VOLUMES not set in /etc/default/minio<span class="token entity" title="\\&quot;">\\&quot;</span>; exit 1; fi&quot;</span>
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/minio server <span class="token variable">$MINIO_OPTS</span> <span class="token variable">$MINIO_VOLUMES</span>

<span class="token comment"># Let systemd restart this service always</span>
<span class="token assign-left variable">Restart</span><span class="token operator">=</span>always

<span class="token comment"># Specifies the maximum file descriptor number that can be opened by this process</span>
<span class="token assign-left variable">LimitNOFILE</span><span class="token operator">=</span><span class="token number">1048576</span>

<span class="token comment"># Specifies the maximum number of threads this process can create</span>
<span class="token assign-left variable">TasksMax</span><span class="token operator">=</span>infinity

<span class="token comment"># Disable timeout logic and wait until process is stopped</span>
<span class="token assign-left variable">TimeoutStopSec</span><span class="token operator">=</span>infinity
<span class="token assign-left variable">SendSIGKILL</span><span class="token operator">=</span>no

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> minio.service
systemctl daemon-reload 
systemctl start minio.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-启动报错" tabindex="-1"><a class="header-anchor" href="#_2-3-启动报错" aria-hidden="true">#</a> 2.3 启动报错</h3><p>Error: Drive <code>/home/minio/data</code> is part of root drive, will not be used (*errors.errorString)<br>为Minio只能使用新的磁盘<br>lsblk _lsblk_命令的功能是查看系统中硬盘,闪存盘,CD-ROM等块设备的信息,包括这些设备之间的依赖关系<br>查看日志：sudo journalctl -u minio.service</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#格式化</span>
mkfs.xfs /dev/sdb
<span class="token comment">#挂载</span>
<span class="token function">mount</span> /dev/sdb /home/minio/data
<span class="token comment">#查看磁盘</span>
lsblk

<span class="token comment">#配置自启</span>
<span class="token function">vim</span> /etc/fstab
/dev/sdb    /home/data    xfs    defaults     <span class="token number">0</span>    <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/minio/1.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_2-4-查看状态" tabindex="-1"><a class="header-anchor" href="#_2-4-查看状态" aria-hidden="true">#</a> 2.4 查看状态</h3><p>4台无ERROR则集群搭建成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl status minio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/minio/2.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="三、nginx转发" tabindex="-1"><a class="header-anchor" href="#三、nginx转发" aria-hidden="true">#</a> 三、Nginx转发</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 反向代理配置</span>
upstream minio-cluster<span class="token punctuation">{</span>
    ip_hash<span class="token punctuation">;</span>
    server minio-01:9001<span class="token punctuation">;</span>
    server minio-02:9001<span class="token punctuation">;</span>
    server minio-03:9001<span class="token punctuation">;</span>
    server minio-04:9001<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


upstream minio<span class="token punctuation">{</span>
    server minio-01:9000<span class="token punctuation">;</span>
    server minio-02:9000<span class="token punctuation">;</span>
    server minio-03:9000<span class="token punctuation">;</span>
    server minio-04:9000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


server <span class="token punctuation">{</span>
    listen       <span class="token number">9001</span> ssl<span class="token punctuation">;</span>

        server_name  域名<span class="token punctuation">;</span>
        charset utf-8<span class="token punctuation">;</span>
        <span class="token comment"># ssl证书地址</span>
        ssl_certificate      /etc/nginx/cert/.pem<span class="token punctuation">;</span> <span class="token comment"># pem文件的路径</span>
        ssl_certificate_key  /etc/nginx/cert/.key<span class="token punctuation">;</span>  <span class="token comment"># key文件的路径</span>

        <span class="token comment"># ssl验证相关配置</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>    <span class="token comment">#缓存有效期</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>    <span class="token comment">#加密算法</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>    <span class="token comment">#安全链接可选的加密协议</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>   <span class="token comment">#使用服务器端的首选算法</span>


    access_log  /home/nginx/logs/minio.log  main<span class="token punctuation">;</span>
    client_max_body_size 10G<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header REMOTE-HOST <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
        proxy_http_version      <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
        proxy_next_upstream     http_500 http_502 http_503 http_504 error <span class="token function">timeout</span> invalid_header<span class="token punctuation">;</span>
        proxy_pass http://minio-cluster<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
        listen <span class="token number">9000</span> ssl<span class="token punctuation">;</span>
        server_name  域名<span class="token punctuation">;</span>
	charset utf-8<span class="token punctuation">;</span>
        <span class="token comment"># ssl证书地址</span>
        ssl_certificate      /etc/nginx/cert/.pem<span class="token punctuation">;</span> <span class="token comment"># pem文件的路径</span>
        ssl_certificate_key  /etc/nginx/cert/.key<span class="token punctuation">;</span>  <span class="token comment"># key文件的路径</span>

        <span class="token comment"># ssl验证相关配置</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>    <span class="token comment">#缓存有效期</span>
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:<span class="token operator">!</span>NULL:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5:<span class="token operator">!</span>ADH:<span class="token operator">!</span>RC4<span class="token punctuation">;</span>    <span class="token comment">#加密算法</span>
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span>    <span class="token comment">#安全链接可选的加密协议</span>
        ssl_prefer_server_ciphers on<span class="token punctuation">;</span>   <span class="token comment">#使用服务器端的首选算法</span>
        <span class="token comment">#add_header &#39;Cross-Origin-Embedder-Policy&#39; &#39;require-corp&#39;;</span>
        <span class="token comment">#add_header &#39;Cross-Origin-Opener-Policy&#39; &#39;same-origin&#39;;</span>
        <span class="token comment">#add_header Access-Control-Allow-Credentials: true;</span>
        <span class="token comment">#add_header Access-Control-Allow-Origin *;</span>
        <span class="token comment">#add_header Access-Control-Allow-Methods &#39;GET, POST, OPTIONS&#39;;</span>
        <span class="token comment">#add_header Access-Control-Allow-Headers &#39;DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization&#39;;</span>
        client_max_body_size 10G<span class="token punctuation">;</span>

location / <span class="token punctuation">{</span>
	              proxy_set_header Host <span class="token variable">$http_host</span><span class="token punctuation">;</span>
                proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                proxy_set_header REMOTE-HOST <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
                proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
                proxy_pass http://minio<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/minio/3.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,30),t=[l];function o(c,r){return s(),a("div",null,t)}const d=n(i,[["render",o],["__file","Minio.html.vue"]]);export{d as default};
