import{_ as t,r as a,o as r,c as s,a as i,b as e,d as o,f as c}from"./app-942d725a.js";const l={},d={href:"https://so.csdn.net/so/search?q=%E6%95%B0%E6%8D%AE%E8%BF%81%E7%A7%BB&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m=c(`<h2 id="一、mc安装" tabindex="-1"><a class="header-anchor" href="#一、mc安装" aria-hidden="true">#</a> 一、mc安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">wget</span> http://dl.minio.org.cn/client/mc/release/linux-amd64/mc <span class="token parameter variable">-P</span> /usr/local/bin/
 <span class="token builtin class-name">cd</span> /usr/local/bin/
 <span class="token function">chmod</span> +x /usr/local/bin/mc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、添加minio集群" tabindex="-1"><a class="header-anchor" href="#二、添加minio集群" aria-hidden="true">#</a> 二、添加minio集群</h2><p>添加集群语法： <code>mc config host add &lt;自定义名称&gt; &lt;http/https&gt;://&lt;IP&gt;:&lt;端口&gt; &lt;账户&gt; &lt;密码&gt;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mc config host add minio_1 http://192.168.102.202:9000 wmsadmin zxht-password
mc config host add minio_2 http://192.168.112.128:9000 cd3OauTlJ3ZQZJyREBS3 aiNIeTJLBpnQ3bgj4zimDsv9byufZnbqfkkf0hlf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除集群语法： <code>mc config host remove &lt;自定义名称&gt; &lt;http/https&gt;://&lt;IP&gt;:&lt;端口&gt; &lt;账户&gt; &lt;密码&gt;</code><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/minio/4.png" alt="image.png" loading="lazy"></p><h2 id="三、数据同步" tabindex="-1"><a class="header-anchor" href="#三、数据同步" aria-hidden="true">#</a> 三、数据同步</h2><p><strong>全量同步语法： mc mirror --remove --overwrite --watch &lt;源集群&gt; &lt;目标集群&gt;</strong><br>某个桶同步语法： mc mirror --remove --overwrite --watch &lt;源集群/桶名称&gt; &lt;目标集群/桶名称&gt;<br>以下是全量同步minio_1同步到minio_2</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 只会同步文件，本地修改或删除，云存储不会变化
mc mirror --watch minio_1 minio_2
## 同步文件后，本地修改文件，会自行在另一集群进行相应的修改
mc mirror --overwrite --watch minio_1 minio_2
## 同步文件后，本地修改/删除文件，会自行在另一集群进行相应的修改/删除
mc mirror --remove --overwrite --watch minio_1/minio-test minio_2/minio-test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/minio/5.png" alt="image.png" loading="lazy"><br><strong>cp 和 mirror 区别</strong><br>mc cp 和 mc mirror 都是 minIO Client（mc）的命令，用于在 minIO 对象存储服务中进行文件传输和同步操作。<br>mc cp：<br>mc cp 用于将本地文件或对象从一个位置复制到另一个位置。<br>可以用来上传/下载文件、目录，或者在不同桶（bucket）之间进行复制。<br>通常用于单个文件或目录的复制操作。<br>mc mirror：<br>mc mirror 用于在两个目录之间进行镜像同步。<br>它会递归地比较源目录和目标目录中的内容，并确保它们保持同步。<br>如果目标目录中不存在源目录中的文件，则会将其复制过去；如果源目录中的文件被删除了，则目标目录中相应的文件也会被删除。<br>总的来说，mc cp 主要用于简单的文件复制操作，而 mc mirror 则更适合于目录之间的完整同步操作，可以保持目录结构的一致性，并确保两个目录中的文件保持同步状态。</p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> <br></h2>`,11);function h(g,p){const n=a("ExternalLinkIcon");return r(),s("div",null,[i("p",null,[e("Minio Server + Minio Client 实现minio 不同集群之间的"),i("a",d,[e("数据迁移"),o(n)]),e("、数据备份")]),m])}const v=t(l,[["render",h],["__file","MinioGoData.html.vue"]]);export{v as default};