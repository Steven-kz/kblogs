import{_ as i,r as l,o as c,c as p,a as s,b as n,d as e,f as t}from"./app-314de074.js";const o={},r=t(`<h2 id="一、docker安装es" tabindex="-1"><a class="header-anchor" href="#一、docker安装es" aria-hidden="true">#</a> 一、Docker安装ES</h2><p>注：<strong>elasticsearch + kibana + ik 版本一致</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.拉取镜像</span>
<span class="token function">docker</span> pull elasticsearch:7.4.2
<span class="token comment"># 配置数据挂载卷</span>
<span class="token comment"># 创建配置文件目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/elasticsearch/config
<span class="token comment"># 创建数据目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/elasticsearch/data
<span class="token comment"># 将/mydata/elasticsearch/文件夹中文件都可读可写</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /mydata/elasticsearch/
<span class="token comment"># 配置任意机器可以访问 elasticsearch</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http.host: 0.0.0.0&quot;</span> <span class="token operator">&gt;</span>/mydata/elasticsearch/config/elasticsearch.yml

<span class="token comment"># 2.运行</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx512m&quot;</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /mydata/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 elasticsearch:7.4.2

<span class="token comment"># 3.进入es容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch /bin/bash 
<span class="token comment"># 4.修改elasticsearch.yml文件 </span>
<span class="token function">vi</span> config/elasticsearch.yml 
\`\`<span class="token variable"><span class="token variable">\`</span>yml
http.cors.enabled: <span class="token boolean">true</span>
http.cors.allow-origin: <span class="token string">&quot;*&quot;</span>
http.cors.allow-headers: Authorization
xpack.security.enabled: <span class="token boolean">true</span>
xpack.security.transport.ssl.enabled: <span class="token boolean">true</span>
<span class="token variable">\`</span></span>\`\`
<span class="token comment"># 5.退出容器</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># 6.重启es容器</span>
<span class="token function">docker</span> restart <span class="token punctuation">[</span>容器id<span class="token punctuation">]</span>
<span class="token comment"># 7.进入es容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> elasticsearch /bin/bash 
<span class="token comment"># 8.修改密码 默认账户elastic</span>
bin/elasticsearch-setup-passwords interactive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-p 9200:9200 -p 9300:9300：向外暴露两个端口，9200用于HTTP REST API请求，9300 ES 在分布式集群状态下 ES 之间的通信端口；<br> -e &quot;discovery.type=single-node&quot;：es 以单节点运行<br> -e ES_JAVA_OPTS=&quot;-Xms64m -Xmx512m&quot;：设置启动占用内存，不设置可能会占用当前系统所有内存<br> -v：挂载容器中的配置文件、数据文件、插件数据到本机的文件夹；<br> -d elasticsearch:7.4.2：指定要启动的镜像</p><h2 id="二、docker安装kibana" tabindex="-1"><a class="header-anchor" href="#二、docker安装kibana" aria-hidden="true">#</a> 二、Docker安装kibana</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.拉取镜像</span>
<span class="token function">docker</span> pull kibana:7.4.2
<span class="token comment"># 2.运行容器</span>
查看内网es分配的ip：docker inspect elasticsearch <span class="token operator">|</span><span class="token function">grep</span> IPAddress
注：不能使用公网ip，使用内网es分配的ip启动kibana
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> kibana <span class="token parameter variable">-p</span> <span class="token number">5601</span>:5601 <span class="token parameter variable">-e</span> <span class="token assign-left variable">ELASTICSEARCH_HOSTS</span><span class="token operator">=</span>http://ip:9200 kibana:7.4.2
查看页面是否可以打开，如果出现Kibana <span class="token function">service</span> <span class="token punctuation">..</span><span class="token punctuation">..</span>.（配置不正确）
<span class="token comment"># 3.进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> kibana /bin/bash
<span class="token comment"># 4.修改kibana.yml文件</span>
<span class="token function">vi</span> config/kibana.yml
\`\`<span class="token variable"><span class="token variable">\`</span>yml
elasticsearch.hosts: <span class="token punctuation">[</span> <span class="token string">&quot;http://ip:9200&quot;</span> <span class="token punctuation">]</span> <span class="token comment">#ip改为ElasticSearch的网络ip</span>
elasticsearch.username: <span class="token string">&quot;elastic&quot;</span>
elasticsearch.password: <span class="token string">&quot;666666&quot;</span>
<span class="token variable">\`</span></span>\`\`
<span class="token comment"># 5.退出</span>
<span class="token builtin class-name">exit</span>
<span class="token comment"># 6.重启</span>
<span class="token function">docker</span> restart 【容器id】

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、分词器配置" tabindex="-1"><a class="header-anchor" href="#三、分词器配置" aria-hidden="true">#</a> 三、分词器配置</h2>`,7),u=s("p",null,"方式一：",-1),d=s("br",null,null,-1),k=s("br",null,null,-1),v={href:"https://ghproxy.com/https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.4.2/elasticsearch-analysis-ik-7.4.2.zip",target:"_blank",rel:"noopener noreferrer"},m=s("p",null,"查看是否安装完毕",-1),b=s("p",null,[n("./elasticsearch-plugin list"),s("br"),n(" analysis-ik # ik分词器")],-1),h=s("p",null,"方式二：",-1),g={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},q=s("p",null,"解压 unzip ...",-1),_=s("p",null,"复制ik到ElasticSearch容器中",-1),y=s("p",null,"docker cp /mydata/elasticsearch/ik elasticsearch:/usr/share/elasticsearch/plugins",-1),f=s("p",null,"正确返回Successfully copied 9.89MB to elasticsearch:/usr/share/elasticsearch/plugins",-1),x=s("p",null,"重启es",-1),S=s("p",null,"若安装失败需删除插件重新安装 bin目录下",-1),E=s("p",null,[n("./elasticsearch-plugin list"),s("br"),n(" ./elasticsearch-plugin remove ik")],-1),w=t(`<h2 id="四、安装ingest-attachment" tabindex="-1"><a class="header-anchor" href="#四、安装ingest-attachment" aria-hidden="true">#</a> 四、安装ingest-attachment</h2><p>对文档内容存储、全文检索<br> 代码里吧pdf，word之类的文档转成base64，查询时候转为相应内容</p><blockquote><p><strong>进入elasticsearch容器</strong></p><p>docker exec -it elasticsearch /bin/bash</p><p><strong>安装ingest-attachment</strong></p><p>./bin/elasticsearch-plugin install ingest-attachment</p><p>退出容器，重启容器</p></blockquote><h3 id="_4-1进入kibana定义文本抽取管道" tabindex="-1"><a class="header-anchor" href="#_4-1进入kibana定义文本抽取管道" aria-hidden="true">#</a> 4.1进入kibana定义文本抽取管道</h3><div class="language-elm line-numbers-mode" data-ext="elm"><pre class="language-elm"><code><span class="token constant">PUT</span> <span class="token operator">/</span>_ingest<span class="token operator">/</span><span class="token hvariable">pipeline</span><span class="token operator">/</span><span class="token hvariable">attachment</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Extract attachment information&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;processors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;attachment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;ignore_missing&quot;</span><span class="token operator">:</span> <span class="token hvariable">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;remove&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建索引</strong></p><div class="language-elm line-numbers-mode" data-ext="elm"><pre class="language-elm"><code><span class="token constant">PUT</span> <span class="token operator">/</span><span class="token hvariable">index_knowledge</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;id&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;knowledgeName&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&quot;attachment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;content&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ik_smart&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、spring连接配置" tabindex="-1"><a class="header-anchor" href="#五、spring连接配置" aria-hidden="true">#</a> 五、Spring连接配置</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-data-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
    <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
        <span class="token key atrule">rest</span><span class="token punctuation">:</span>
            <span class="token key atrule">uris</span><span class="token punctuation">:</span> ip<span class="token punctuation">:</span><span class="token number">9200</span>
            <span class="token key atrule">username</span><span class="token punctuation">:</span> username
            <span class="token key atrule">password</span><span class="token punctuation">:</span> password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function T(A,I){const a=l("ExternalLinkIcon");return c(),p("div",null,[r,s("blockquote",null,[u,s("p",null,[n("docker exec -it elasticsearch bash"),d,n(" cd bin/"),k,n(" ./elasticsearch-plugin install "),s("a",v,[n("https://ghproxy.com/https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.4.2/elasticsearch-analysis-ik-7.4.2.zip"),e(a)])]),m,b,h,s("p",null,[s("a",g,[n("https://github.com/medcl/elasticsearch-analysis-ik/releases"),e(a)])]),q,_,y,f,x,S,E]),w])}const z=i(o,[["render",T],["__file","dockerEs.html.vue"]]);export{z as default};
