import{_ as l,r as t,o as r,c,a as n,b as s,d as e,f as i}from"./app-314de074.js";const o={},p=n("h2",{id:"一、-nginx是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、-nginx是什么","aria-hidden":"true"},"#"),s(" 一、 Nginx是什么")],-1),d={href:"http://nginx.p2hp.com/",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),u=n("br",null,null,-1),m=n("br",null,null,-1),b=n("br",null,null,-1),g=i(`<blockquote><p>**稳定性极强。 7*24⼩时不间断运⾏。 **<br> **Nginx提供了⾮常丰富的配置实例。 **<br><strong>占⽤内存⼩，并发能⼒强。</strong><br> tomcat 默认线程池线程线程数数 150 可以认为 tomcat 只能承受150个并发， nginx 最高承受50000以上并发</p></blockquote><p><strong>在搭建集群后，使用Nginx</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/1.png" alt="image.png" loading="lazy"></p><h2 id="二、nginx的安装" tabindex="-1"><a class="header-anchor" href="#二、nginx的安装" aria-hidden="true">#</a> 二、Nginx的安装</h2><p><strong>1.安装依赖包</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">//</span>一键安装上面四个依赖
yum <span class="token operator">-</span>y install gcc zlib zlib<span class="token operator">-</span>devel pcre<span class="token operator">-</span>devel openssl openssl<span class="token operator">-</span>devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.下载并解压安装包</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">//</span>创建一个文件夹
cd <span class="token operator">/</span>usr<span class="token operator">/</span>local
mkdir nginx
cd nginx
<span class="token operator">//</span>下载tar包
wget http<span class="token punctuation">:</span><span class="token operator">//</span>nginx<span class="token punctuation">.</span>org<span class="token operator">/</span>download<span class="token operator">/</span>nginx<span class="token operator">-</span><span class="token number">1.13</span><span class="token number">.7</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
tar <span class="token operator">-</span>xvf nginx<span class="token operator">-</span><span class="token number">1.13</span><span class="token number">.7</span><span class="token punctuation">.</span>tar<span class="token punctuation">.</span>gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.安装nginx</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//进入nginx目录
<span class="token builtin class-name">cd</span> /usr/local/nginx
//进入目录
<span class="token builtin class-name">cd</span> nginx-1.13.7
//执行命令 考虑到后续安装ssl证书 添加两个模块
./configure --with-http_stub_status_module --with-http_ssl_module
//执行make命令
<span class="token function">make</span>
//执行make install命令
<span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.启动nginx服务</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5.配置nginx.conf</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>vim <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>nginx<span class="token punctuation">.</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开放80端口：<br>firewall-cmd --zone=public --add-port=80/tcp --permanent<br>查询端口号80 是否开启：<br>firewall-cmd --query-port=80/tcp<br>重启防火墙：<br>firewall-cmd --reload<br>命令： cd /usr/local/nginx/sbin<br>启动，关闭，重启，命令：<br>./nginx 启动<br>./nginx -s stop 关闭<br>./nginx -s reload 重启<br>nignx.conf<strong>文件说明</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user  nginx<span class="token punctuation">;</span>     <span class="token comment"># Nginx用户  </span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment"># 工作进程：数目。根据硬件调整，通常等于CPU数量或者2倍于CPU</span>

error_log  /var/log/nginx/error.log warn<span class="token punctuation">;</span>
pid        /var/run/nginx.pid<span class="token punctuation">;</span>    <span class="token comment"># pid（进程标识符）：存放路径。</span>
<span class="token comment"># 以上统称为全局块， </span>
<span class="token comment"># worker_processes他的数值越大，Nginx的并发能力就越强</span>
<span class="token comment"># error_log 代表Nginx的错误日志存放的位置</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>   <span class="token comment">#每个工作进程的最大连接数量。根据硬件调整，和前面工作进程配合起来用，尽量大，但是别把cpu跑到100%就行</span>
<span class="token punctuation">}</span>
<span class="token comment"># events块</span>
<span class="token comment"># worker_connections他的数值越大，Nignx并发能力越强</span>

http <span class="token punctuation">{</span>   <span class="token comment"># http块</span>
    include       /etc/nginx/mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	<span class="token comment"># include代表引入一个外部的文件 -&gt; /mime.types中放着大量的媒体类型</span>
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.log  main<span class="token punctuation">;</span>   <span class="token comment"># 日志</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>    <span class="token comment"># keepalive超时时间  单位是秒</span>

    <span class="token comment">#gzip  on;</span>
	<span class="token comment">#include /etc/nginx/conf.d/*.conf; -&gt; 引入了conf.d目录下的以.conf为结尾的配置文件</span>
    <span class="token comment"># 相当于引入外部的配置文件  咱们主要关注这个文件</span>
    include /etc/nginx/conf.d/*.conf<span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.开机自启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/systemd/system/nginx.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>Nginx - high performance web server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
 
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/./nginx
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/./nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/./nginx <span class="token parameter variable">-s</span> quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
 
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target


<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl start nginx
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nginx
<span class="token function">sudo</span> systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、nginx代理" tabindex="-1"><a class="header-anchor" href="#三、nginx代理" aria-hidden="true">#</a> 三、Nginx代理</h2><p><strong>正向代理和反向代理介绍</strong><br>正向代理：</p><ul><li>正向代理服务是由客户端设立的。</li><li>客户端了解代理服务器和目标服务器都是谁。</li><li>帮助咱们实现突破访问权限，提高访问的速度，对目标服务器隐藏客户端的ip地址。</li></ul><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/2.png" alt="image.png" loading="lazy"><br>反向代理：</p><ul><li>反向代理服务器是配置在服务端的。</li><li>客户端是不知道访问的到底是哪一台服务器。</li><li>达到负载均衡，并且可以隐藏服务器真正的ip地址</li></ul><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/3.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_3-1-关于localtion路径映射" tabindex="-1"><a class="header-anchor" href="#_3-1-关于localtion路径映射" aria-hidden="true">#</a> 3.1 关于localtion路径映射</h3><p>上面已经准备了两个tomcat</p><blockquote><p>优先级关系如下：</p><ul><li>location = /路径：优先级最高，精准匹配，一旦匹配， 不再去找其他匹配项。</li><li>location ^~ /路径：优先级次之，字符串匹配，一旦匹配， 不再去找其他匹配项。</li><li>location ~ 正则表达式：如果有多个location的正则能匹配的话，则使用正则表达式最长的那个。</li><li>location ~* 正则表达式：和location ~ 正则表达式相同，不过当前方式不区分大小写。</li><li>location /路径：常规方式，匹配前缀，优先级最低。</li></ul></blockquote><p><strong>注意：有没有映射（匹配）上 是一回事 映射上了location 有没有找到 对应的资源 是另外一回事</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接匹配 优先级最高
location = / {
  # 精准匹配，主机名后面不能带任何的字符串
}

# 完全匹配 精确匹配 a
location /aaa/bbb/ccc/d.html {
    proxy_pass http://39.106.47.23:8080;
}

# 匹配开头路径 正则匹配 b
location ^~ /aaa/bbb {
  # 匹配所有以/aaa/bbb开头的路径，匹配后，不再筛选其他选项
}

# 正则匹配优先级 c
location ~ /aaa/bbb { 
  # 匹配所有以/aaa/bbb开头的路径
}

location ~ /aaa/bbb/ccc {
    proxy_pass http://39.106.47.23:8081;
}

# 正则匹配后缀    优先级4
location ~* \\.(gif|jpg|png|js|css)$ {
  # 匹配以gif或者jpg或者png为结尾的路径
}

# 常规匹配   通用匹配   优先级5
location /xxx {
  # 匹配所有以/xxx开头的路径
}

# 全部通配     优先级6
location / {
  # 匹配全部路径  
}

TIPS：
^~ 和直接写路径的两种方式，不同同时存在！比如： ^~ /abc 和 /abc 同时存在会出错！
总结：
^~ /路径 &gt; ~ /路径 &gt; /路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、nginx负载均衡" tabindex="-1"><a class="header-anchor" href="#四、nginx负载均衡" aria-hidden="true">#</a> 四、Nginx负载均衡</h2><p>Nginx为我们默认提供了三种负载均衡的策略：</p><ul><li><strong>轮询</strong>：将客户端发起的请求，平均的分配给每一台服务器。 默认策略</li><li><strong>权重</strong>：会将客户端的请求，根据服务器的权重值不同，分配不同的数量。</li><li><strong>ip_hash</strong>：基于发起请求的客户端的ip地址不同，他始终会将请求发送到指定的服务器上。 根据ip地址计算出一个结果 根据这个结果找对应的服务器<img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/4.png" alt="image.png" loading="lazy"></li></ul><h3 id="_4-1-轮询" tabindex="-1"><a class="header-anchor" href="#_4-1-轮询" aria-hidden="true">#</a> 4.1 轮询</h3><p>轮询访问 一次8080 一次8081<br>vim /usr/local/nginx/conf/nginx.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># nginx/usr/local/nginx/conf/nginx.conf
#负载均衡 
upstream food {
  server 123.56.114.90:8892;
  server 8.139.254.175:8892;
}

server {
    listen       80;
    server_name  localhost;

	#  负载均衡
    location / {
         proxy_pass http://food;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-权重" tabindex="-1"><a class="header-anchor" href="#_4-2-权重" aria-hidden="true">#</a> 4.2 权重</h3><p>weight=权重比例 根据配置的权重比例访问相应服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream sso {
    server 39.106.47.23:8080 weight=2;   #weight=权重比例
    server 39.106.47.23:8081 weight=1;
}

server {    # server 块是http 块中的 内容
    listen       80;    # nginx 默认监听的端口号
    listen  [::]:80;
    server_name  localhost;  # ip

    location / {
        proxy_pass http://sso;
    }

    #50x 错误页面跳转
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-ip-hash" tabindex="-1"><a class="header-anchor" href="#_4-3-ip-hash" aria-hidden="true">#</a> 4.3 ip_hash</h3><p>ip_hash实现 根据hash 算法 固定访问某个地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream sso {
    ip_hash;
    server 39.106.47.23:8080;
    server 39.106.47.23:8081;
}

server {    # server 块是http 块中的 内容
    listen       80;    # nginx 默认监听的端口号
    listen  [::]:80;
    server_name  localhost;  # ip

    location / {
        proxy_pass http://sso;
    }

    #50x 错误页面跳转
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、nginx动静分离" tabindex="-1"><a class="header-anchor" href="#五、nginx动静分离" aria-hidden="true">#</a> 五、Nginx动静分离</h2><p>Nginx的并发能力公式：<br>worker_processes * worker_connections / 4 | 2 = Nginx最终的并发能力<br>动态资源需要/4，静态资源需要/2.<br>Nginx通过动静分离，来提升Nginx的并发能力，更快的给用户响应。</p><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/5.png" alt="image.png" loading="lazy"><br>上图是动态资源的请求工程 四个连接数 ，咱们把静态资源放在nginx 上面 就只需要两个连接数， 同时也减轻了后面服务器的压力 ， 如下图 静态资源直接放在nginx<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/6.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/7.png" alt="image.png" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 修改配置文件
upstream emp {
  ip_hash;
  server 39.106.47.23:8081;
  server 39.106.47.23:8080;
}

server{
	listen 80;
	server_name localhost;
    
    location ~* \\.(gif|jpg|png|js|css|html)$ {
        # 匹配以gif|jpg|png|js|css|html为结尾的路径 静态资源
        root /usr/share/nginx/statics;
    }
	
	location / {
		proxy_pass http://emp/;
	}

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、nginx实战" tabindex="-1"><a class="header-anchor" href="#六、nginx实战" aria-hidden="true">#</a> 六、Nginx实战</h2><p>demo反向代理，负载均衡<br><strong>前端访问后端地址请指向Nginx服务器地址</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/nginx/8.png" alt="image.png" loading="lazy"><br>nginx.conf配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>

events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>

    <span class="token comment">#负载均衡 </span>
    upstream food<span class="token punctuation">{</span>
       server <span class="token number">8.139</span>.254.***:8892<span class="token punctuation">;</span>
       server <span class="token number">123.56</span>.114.**:8892<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">8988</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            root   /mydata/food/food_web/dist<span class="token punctuation">;</span>
            try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span> //如果文件存在则直接返回该文件内容，如果文件不存在则在同一目录下查找同名的目录
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

     
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    server <span class="token punctuation">{</span>
        listen       <span class="token number">8892</span><span class="token punctuation">;</span>
        server_name  food<span class="token punctuation">;</span>

        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
   

        location /api/shop/ <span class="token punctuation">{</span>
           proxy_pass http://food<span class="token punctuation">;</span>
           client_max_body_size    100m<span class="token punctuation">;</span>
           proxy_connect_timeout 180s<span class="token punctuation">;</span>
           proxy_read_timeout 180s<span class="token punctuation">;</span>
           proxy_send_timeout 180s<span class="token punctuation">;</span>
           proxy_next_upstream error <span class="token function">timeout</span> invalid_header<span class="token punctuation">;</span>
           add_header X-Slave <span class="token variable">$upstream_addr</span><span class="token punctuation">;</span>
           proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
           proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
           proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
           proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
           proxy_set_header Upgrade <span class="token variable">$http_upgrade</span><span class="token punctuation">;</span>
           proxy_set_header Connection <span class="token string">&quot;upgrade&quot;</span><span class="token punctuation">;</span>
           proxy_buffer_size 2M<span class="token punctuation">;</span>
                 proxy_buffers <span class="token number">256</span> 2M<span class="token punctuation">;</span>
                 proxy_busy_buffers_size 2M<span class="token punctuation">;</span>
                 proxy_temp_file_write_size 2M<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47),k={href:"http://restart.sh",target:"_blank",rel:"noopener noreferrer"},h=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token builtin class-name">getopts</span> f: OPT<span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">case</span> <span class="token variable">\${OPT}</span> <span class="token keyword">in</span>
    f<span class="token punctuation">)</span> <span class="token assign-left variable">tail_flag</span><span class="token operator">=</span><span class="token variable">\${OPTARG}</span>
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token punctuation">\\</span>?<span class="token punctuation">)</span>
       <span class="token builtin class-name">exit</span> <span class="token number">1</span>
  <span class="token keyword">esac</span>
<span class="token keyword">done</span>

<span class="token assign-left variable">jar_name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-name</span> *$v.jar <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot;/&quot;</span> <span class="token string">&#39;{ print $2 }&#39;</span><span class="token variable">)</span></span><span class="token punctuation">;</span>

<span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token number">8892</span>

<span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">netstat</span> <span class="token parameter variable">-nlp</span> <span class="token operator">|</span> <span class="token function">grep</span> :$port <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $7}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&quot;/&quot;</span> <span class="token string">&#39;{ print $1 }&#39;</span><span class="token variable">)</span></span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$pid</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">$pid</span>
<span class="token keyword">fi</span>

<span class="token function">nohup</span> <span class="token function">java</span>  <span class="token parameter variable">-Xms4096m</span> <span class="token parameter variable">-Xmx6144m</span> <span class="token parameter variable">-jar</span> <span class="token variable">$jar_name</span> <span class="token parameter variable">--server.port</span><span class="token operator">=</span><span class="token variable">$port</span> <span class="token parameter variable">--spring.profiles.active</span><span class="token operator">=</span>dev <span class="token operator">&gt;</span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token variable">$tail_flag</span> <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> <span class="token variable">$tail_flag</span> <span class="token operator">==</span> <span class="token string">&#39;y&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
        <span class="token function">tail</span> <span class="token parameter variable">-f</span> logs/info.log
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入外部文件 include /usr/local/nginx/conf/conf.d/*.conf;</p><h2 id="七、nginx核心" tabindex="-1"><a class="header-anchor" href="#七、nginx核心" aria-hidden="true">#</a> 七、Nginx核心</h2><p>代理：正向代理和反向代理 <br>正向代理：需要安装在⽤户的电脑上，代理⽤户发出的请求，⽐如：翻墙软件、⽹络加速器等 <br>反向代理：需要安装在服务器上的，代理服务器的请求和响应，⽐如：Nginx <br>负载均衡：⼀个事，多个⼈⼲，这多个⼈就形成了集群，这些⼈就是负载均衡 <br>负载均衡算法：决定这事交给集群中哪⼀个⼈做 <br>1.轮询 按次序先后分配 <br>2.权重 根据权重值，进⾏优先分配，权重⼤的，被分配到的概率就⼤ <br>3.ip_hash 根据ip地址的哈希算法，分配请求 <br>核⼼点： <br>1.Nginx实现静态资源代理服务器 <br>代理静态⻚⾯（html）性能远超Apahce <br>2.Nginx实现反向代理 <br>3.Nginx实现Tomcat负载均衡（反向代理） <br>4.Nginx绑定域名</p>`,4);function x(_,f){const a=t("ExternalLinkIcon");return r(),c("div",null,[p,n("p",null,[s("官网："),n("a",d,[s("nginx 中文网 官网"),e(a)]),v,s("Nginx是由俄罗斯人研发的，应对Rambler的网站，并且2004年发布的第一个版本。"),u,s("1.Nginx 是一个高性能的Http和反向代理服务器，特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好。国内使用nginx的网站有很多，如 百度 京东 新浪 网易 淘宝 等"),m,s("2.Nginx作为web 服务器 ： nginx 只能作为静态页面的web服务器，同时还支持CGI协议的动态语言，比如perl,php 等， 但是不支持java ,java程序只能通过与tomcat配合完成。nginx 专为性能优化而开发，性能是其最重要的考量，实现上 非常注重效率，能经受高负载的考验，有报告表明能支持高达50000个并发连接数。"),b,s("特点：")]),g,n("p",null,[n("a",k,[s("restart.sh"),e(a)])]),h])}const w=l(o,[["render",x],["__file","Nginx.html.vue"]]);export{w as default};
