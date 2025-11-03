import{_ as l,r as t,o as p,c,a as n,b as s,d as e,f as i}from"./app-314de074.js";const o="/kblogs/images/ailbaba/1.png",r="/kblogs/images/ailbaba/2.png",u="/kblogs/images/ailbaba/3.png",d="/kblogs/images/ailbaba/4.png",v="/kblogs/images/ailbaba/5.png",b="/kblogs/images/ailbaba/6.png",k="/kblogs/images/ailbaba/7.png",m="/kblogs/images/ailbaba/8.png",h="/kblogs/images/ailbaba/9.png",g={},_=i('<h1 id="alibaba-cloud-toolkit" tabindex="-1"><a class="header-anchor" href="#alibaba-cloud-toolkit" aria-hidden="true">#</a> Alibaba Cloud Toolkit</h1><p>阿里云工具包（Alibaba Cloud Toolkit）是一款由阿里云官方开发的插件，可以在Eclipse或IntelliJ IDEA中集成使用。它提供了可视化的控制台，使得开发者可以在集成开发环境（IDE）中管理和部署阿里云资源。<br> 插件实现自动化持续部署，可部署非阿里云服务器。<br> 本文使用的是idea操作，当然vscode也是可以的。</p><h2 id="一、配置服务器" tabindex="-1"><a class="header-anchor" href="#一、配置服务器" aria-hidden="true">#</a> 一、配置服务器</h2><p>字如其意<br><img src="'+o+'"><br><img src="'+r+'"><br> 可添加Tag/描述分辨多个服务器</p><h2 id="二、部署服务端项目" tabindex="-1"><a class="header-anchor" href="#二、部署服务端项目" aria-hidden="true">#</a> 二、部署服务端项目</h2><img src="'+u+'"><p>2.1配置<br> 配置restart.sh重启项目即可<br><img src="'+d+'"><br> 配置完成之后运行 maven自动打包<br><img src="'+v+'"><br> 查<strong>看部署成功，若无法访问，请查看是否开启端口号</strong><br><img src="'+b+`"></p><h2 id="三、shell脚本文件" tabindex="-1"><a class="header-anchor" href="#三、shell脚本文件" aria-hidden="true">#</a> 三、shell脚本文件</h2><h3 id="_3-1-方式一" tabindex="-1"><a class="header-anchor" href="#_3-1-方式一" aria-hidden="true">#</a> 3.1 方式一</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">echo</span> Starting application
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span>  /usr/local/springboot/codingstart/codingstart-1.0.jar  <span class="token operator">&gt;</span>log.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

stop.sh
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> codingstart-1.0.jar <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $2 }&#39;</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$PID</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> Application is already stopped
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token function">kill</span> <span class="token variable">$PID</span>
<span class="token function">kill</span> <span class="token variable">$PID</span>
<span class="token keyword">fi</span>

restart.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> Stopping application
<span class="token builtin class-name">source</span> /usr/local/sh/stop.sh
<span class="token builtin class-name">echo</span> Starting application
<span class="token builtin class-name">source</span> /usr/local/sh/start.sh

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-封装脚本文件" tabindex="-1"><a class="header-anchor" href="#_3-2-封装脚本文件" aria-hidden="true">#</a> 3.2 封装脚本文件</h3><p>基于方式一封装成一个shell文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 服务jar名称</span>
<span class="token assign-left variable">SERVICE_NAME_JAR</span><span class="token operator">=</span>codingstart-1.0.jar
<span class="token comment"># 部署路径</span>
<span class="token assign-left variable">SERVICE_DIR</span><span class="token operator">=</span>/usr/local/springboot/codingstart


<span class="token function-name function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">echo</span> Starting application
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-jar</span>  <span class="token variable">\${SERVICE_DIR}</span>/<span class="token variable">\${SERVICE_NAME_JAR}</span>  <span class="token operator">&gt;</span>log.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== 服务<span class="token variable">\${SERVICE_NAME_JAR}</span>已启动 ===&quot;</span>
<span class="token punctuation">}</span>


<span class="token function-name function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> $<span class="token punctuation">{</span>SERVICE_NAME_JAR<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $2 }&#39;</span><span class="token variable">)</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$PID</span>&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> Application is already stopped
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token function">kill</span> <span class="token variable">$PID</span>
<span class="token function">kill</span> <span class="token variable">$PID</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== 服务<span class="token variable">\${SERVICE_NAME_JAR}</span>已停止 ===&quot;</span>
<span class="token keyword">fi</span>
<span class="token punctuation">}</span>


<span class="token function-name function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> Stopping application
  stop
  <span class="token function">sleep</span> <span class="token number">2</span>
  <span class="token builtin class-name">echo</span> Starting application
  start
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== 服务<span class="token variable">\${SERVICE_NAME_JAR}</span>已重启 ===&quot;</span>
<span class="token punctuation">}</span>

<span class="token function-name function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== spring-boot shell help start ===&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;start 启动服务&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;stop 停止服务&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;restart 重启服务&quot;</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;===  spring-boot shell help end  ===&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">\${1}</span> <span class="token keyword">in</span>
    <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== 参数错误 ===&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token builtin class-name">help</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">help</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    start<span class="token punctuation">)</span>
      start
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    stop<span class="token punctuation">)</span>
        stop
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    restart<span class="token punctuation">)</span>
      restart
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    *<span class="token punctuation">)</span>
      <span class="token builtin class-name">help</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+k+'">',14),f={href:"http://xn--8pv109c.sh",target:"_blank",rel:"noopener noreferrer"},E=i('<h2 id="四、部署前端项目" tabindex="-1"><a class="header-anchor" href="#四、部署前端项目" aria-hidden="true">#</a> 四、部署前端项目</h2><p>部署完后端项目，就想着把前端也搞明白，于是就想了一下，发现还是比较简单的。<br> 1.首先把dist文件上传至nginx文件中<br> 2.删除之前部署的文件目录<br> 3.创建新的部署目录如：www/wwwroot/docs<br> 4.将dist文件内容copy到dosc中，删除dist文件<br><img src="'+m+`"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#部署路径</span>
<span class="token assign-left variable">SERVICE_DEPLOY</span><span class="token operator">=</span>/www/wwwroot/docs
<span class="token comment">#源文件路径</span>
<span class="token assign-left variable">SERVICE_DIR</span><span class="token operator">=</span>/www/wwwroot/dist

<span class="token function-name function">deploy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;vue start&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-r</span> <span class="token variable">\${SERVICE_DEPLOY}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;stop 删除之前部署文件&quot;</span>
  <span class="token function">mkdir</span> <span class="token variable">\${SERVICE_DEPLOY}</span>
  <span class="token function">cp</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-r</span> <span class="token variable">\${SERVICE_DIR}</span>/* <span class="token variable">\${SERVICE_DEPLOY}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;复制dist到部署目录&quot;</span>
  <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-r</span>  <span class="token variable">\${SERVICE_DIR}</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;删除dist文件 end&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">case</span> <span class="token variable">\${1}</span> <span class="token keyword">in</span>
    <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;=== 参数错误 ===&quot;</span>
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    deploy<span class="token punctuation">)</span>
      deploy
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),q={href:"http://vue.sh",target:"_blank",rel:"noopener noreferrer"},w=n("br",null,null,-1),I=n("br",null,null,-1),R=n("br",null,null,-1),$=n("img",{src:h},null,-1);function S(x,y){const a=t("ExternalLinkIcon");return p(),c("div",null,[_,n("p",null,[n("strong",null,[s("若部署时出现Permission denied，增加可执行权限，这里权限直接拉到最大 chmod 777 "),n("a",f,[s("脚本.sh"),e(a)])])]),E,n("p",null,[s("sh文件需要开启权限 "),n("strong",null,[s("chmod 777 "),n("a",q,[s("vue.sh"),e(a)])]),w,s(" 成功结果就不展示了。"),I,s(" 在配置nginx就可以了"),R,$])])}const D=l(g,[["render",S],["__file","AlibabaToolkit.html.vue"]]);export{D as default};
