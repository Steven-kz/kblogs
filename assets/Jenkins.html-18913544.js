import{_ as i,r as p,o,c as l,a as n,b as s,d as t,f as a}from"./app-314de074.js";const r={},c=a(`<h2 id="一、安装配置" tabindex="-1"><a class="header-anchor" href="#一、安装配置" aria-hidden="true">#</a> 一、安装配置</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此教学为Jenkins新版本 需JDK11进行运行</p></div><h3 id="_1-1-安装jdk" tabindex="-1"><a class="header-anchor" href="#_1-1-安装jdk" aria-hidden="true">#</a> 1.1 安装JDK</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 服务器使用jdk8
yum install <span class="token operator">-</span>y java<span class="token operator">-</span><span class="token number">1.8</span><span class="token number">.0</span><span class="token operator">-</span>openjdk<span class="token operator">-</span>devel<span class="token punctuation">.</span>x86_64
# 最新版本jenkins需jdk11环境
yum install java<span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span>openjdk<span class="token punctuation">.</span>x86_64 <span class="token operator">-</span>y
java <span class="token operator">-</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-下载jenkins的war包" tabindex="-1"><a class="header-anchor" href="#_1-2-下载jenkins的war包" aria-hidden="true">#</a> 1.2 下载jenkins的war包</h3><p>卸载jenkins残留文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">service</span> jenkins stop		
yum <span class="token parameter variable">-y</span> remove jenkins
<span class="token function">rpm</span> <span class="token parameter variable">-e</span> jenkins
<span class="token function">rpm</span> <span class="token parameter variable">-ql</span> jenkins
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/sysconfig/jenkins.rpmsave
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/cache/jenkins/
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/init.d/jenkins.rpmsave
<span class="token function">find</span> / <span class="token parameter variable">-iname</span> jenkins <span class="token operator">|</span> <span class="token function">xargs</span> <span class="token parameter variable">-n</span> <span class="token number">1000</span> <span class="token function">rm</span> <span class="token parameter variable">-rf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d={href:"https://www.jenkins.io/download/",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),v=n("img",{src:"https://steven-kz.github.io/BlogImgs/imgaes/jenkins/1.png",alt:"image.png",loading:"lazy"},null,-1),m=n("br",null,null,-1),k=n("br",null,null,-1),g=n("br",null,null,-1),b=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/lib/jvm/java-11-openjdk-11.0.23.0.9-2.el7_9.x86_64/bin/java <span class="token parameter variable">-DJENKINS_HOME</span><span class="token operator">=</span>/home/jenkins <span class="token parameter variable">-jar</span> /home/jenkins/jenkins.war <span class="token operator">&gt;&gt;</span> /home/jenkins.log
 <span class="token comment"># 后台运行</span>
<span class="token function">nohup</span> /usr/lib/jvm/java-11-openjdk-11.0.23.0.9-2.el7_9.x86_64/bin/java <span class="token parameter variable">-DJENKINS_HOME</span><span class="token operator">=</span>/home/jenkins <span class="token parameter variable">-jar</span> /home/jenkins/jenkins.war <span class="token operator">&gt;&gt;</span> /home/jenkins.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-安装git" tabindex="-1"><a class="header-anchor" href="#_1-3-安装git" aria-hidden="true">#</a> 1.3 安装git</h3><p>1、配置好yum源，执行 yum install git 命令即可。<br> 2、执行 git -version 命令验证，出现git版本号则表示安装成功。</p><h3 id="_1-4-安装maven" tabindex="-1"><a class="header-anchor" href="#_1-4-安装maven" aria-hidden="true">#</a> 1.4 安装Maven</h3>`,4),h={href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"},_=n("br",null,null,-1),f=n("br",null,null,-1),j=n("br",null,null,-1),$=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /home/maven/apache-maven-3.9.7/conf/settings.xml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrors</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--阿里镜像的配置--&gt;</span>
	 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirror</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>central<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrorOf</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus aliyun<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://maven.aliyun.com/nexus/content/groups/public<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirror</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mirrors</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、配置maven环境变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/profile

<span class="token builtin class-name">export</span> <span class="token assign-left variable">M2_HOME</span><span class="token operator">=</span>/home/maven/apache-maven-3.9.7
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$CLASSPATH</span><span class="token builtin class-name">:</span><span class="token variable">$M2_HOME</span>/lib
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$M2_HOME</span>/bin
<span class="token comment"># 刷新配置</span>
<span class="token builtin class-name">source</span> /etc/profile 
<span class="token comment"># 验证</span>
mvn <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、配置jenkins" tabindex="-1"><a class="header-anchor" href="#二、配置jenkins" aria-hidden="true">#</a> 二、配置Jenkins</h2><h3 id="_2-1-插件配置" tabindex="-1"><a class="header-anchor" href="#_2-1-插件配置" aria-hidden="true">#</a> 2.1 插件配置</h3><p>Dashboard --&gt; Manage Jenkins --&gt; Plugins --&gt; Available --&gt;plugins<br> Maven Integration<br> SSH Agent<br> 插件需要下载<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/2.png" alt="image.png" loading="lazy"><br> Dashboard --&gt; Manage Jenkins --&gt; Tools<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/3.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/4.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/5.png" alt="image.png" loading="lazy"></p><h3 id="_2-2-新增任务" tabindex="-1"><a class="header-anchor" href="#_2-2-新增任务" aria-hidden="true">#</a> 2.2 新增任务</h3><p>Dashboard --&gt; 新加Item<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/6.png" alt="image.png" loading="lazy"><br> 可SSH<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/7.png" alt="image.png" loading="lazy"><br> 微服务指定打包某个项目减少打包时间</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>clean install <span class="token operator">-</span>pl service<span class="token operator">-</span>modules<span class="token operator">/</span>service<span class="token operator">-</span>feel <span class="token operator">-</span>am <span class="token operator">-</span>amd <span class="token operator">-</span><span class="token class-name">P</span> test<span class="token operator">-</span>dev <span class="token operator">-</span><span class="token class-name">Dmaven</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span>skip<span class="token operator">=</span><span class="token boolean">true</span> clean <span class="token keyword">package</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/8.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/9.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/10.png" alt="image.png" loading="lazy"><br> 本脚本保存5个历史版本</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#<span class="token operator">!</span><span class="token operator">/</span>bin<span class="token operator">/</span>sh

server_name<span class="token operator">=</span>service<span class="token operator">-</span>feel
server_name_dir<span class="token operator">=</span>service<span class="token operator">-</span>modules<span class="token operator">/</span>$server_name

# 进入目录编译代码
echo <span class="token string">&quot;### cd $WORKSPACE/$server_name_dir/&quot;</span>
cd $<span class="token constant">WORKSPACE</span><span class="token operator">/</span>$server_name_dir<span class="token operator">/</span>

echo <span class="token string">&quot;### cp target/*.jar /home/feel/server/$server_name/$server_name-$BUILD_NUMBER.jar&quot;</span>
cp target<span class="token comment">/*.jar /home/feel/server/$server_name/$server_name-$BUILD_NUMBER.jar

cd /home/feel/server/$server_name/

echo &quot;### sh restart.sh -f n -v $BUILD_NUMBER&quot;
sh restart.sh -f n -v $BUILD_NUMBER

echo &quot;### 保留五个版本&quot;
ls -t *.jar | sed -n &#39;6,$p&#39; | xargs -I {} rm -rf {}

</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),x={href:"http://restart.sh",target:"_blank",rel:"noopener noreferrer"},B=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#<span class="token operator">!</span> <span class="token operator">/</span>bin<span class="token operator">/</span>bash

source <span class="token operator">/</span>etc<span class="token operator">/</span>profile

<span class="token keyword">while</span> getopts v<span class="token operator">:</span>f<span class="token operator">:</span> <span class="token constant">OPT</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">case</span> $<span class="token punctuation">{</span><span class="token constant">OPT</span><span class="token punctuation">}</span> in
    v<span class="token punctuation">)</span> version<span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">OPTARG</span><span class="token punctuation">}</span>
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
    f<span class="token punctuation">)</span> tail_flag<span class="token operator">=</span>$<span class="token punctuation">{</span><span class="token constant">OPTARG</span><span class="token punctuation">}</span>
       <span class="token punctuation">;</span><span class="token punctuation">;</span>
    \\<span class="token operator">?</span><span class="token punctuation">)</span>
       exit <span class="token number">1</span>
  esac
done

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> $version <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>then
        echo <span class="token char">&#39;11&#39;</span>
        exit <span class="token number">0</span>
fi

echo &#39;version<span class="token operator">:</span> &#39;$version

jar_name<span class="token operator">=</span>$<span class="token punctuation">(</span>find <span class="token punctuation">.</span> <span class="token operator">-</span>name <span class="token operator">*</span><span class="token operator">-</span>$version<span class="token punctuation">.</span>jar <span class="token operator">|</span> awk &#39;<span class="token punctuation">{</span>print $<span class="token number">1</span><span class="token punctuation">}</span>&#39; <span class="token operator">|</span> awk <span class="token operator">-</span><span class="token class-name">F</span><span class="token string">&quot;/&quot;</span> &#39;<span class="token punctuation">{</span> print $<span class="token number">2</span> <span class="token punctuation">}</span>&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
echo &#39;jar_name<span class="token operator">:</span> &#39;$jar_name

port<span class="token operator">=</span><span class="token number">9205</span>
echo <span class="token string">&quot;port: $port&quot;</span>

pid<span class="token operator">=</span>$<span class="token punctuation">(</span>netstat <span class="token operator">-</span>nlp <span class="token operator">|</span> grep <span class="token operator">:</span>$port <span class="token operator">|</span> awk &#39;<span class="token punctuation">{</span>print $<span class="token number">7</span><span class="token punctuation">}</span>&#39; <span class="token operator">|</span> awk <span class="token operator">-</span><span class="token class-name">F</span><span class="token string">&quot;/&quot;</span> &#39;<span class="token punctuation">{</span> print $<span class="token number">1</span> <span class="token punctuation">}</span>&#39;<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">-</span>n <span class="token string">&quot;$pid&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>then
        echo <span class="token string">&quot;kill -9 $pid&quot;</span>
        kill <span class="token operator">-</span><span class="token number">9</span> $pid
fi

echo <span class="token string">&quot;nohup java -Xms4096m -Xmx6144m -jar $jar_name --server.port=$port --spring.profiles.active=store-dev &gt; /dev/null 2&gt;&amp;1 &amp;&quot;</span>
<span class="token constant">BUILD_ID</span><span class="token operator">=</span>dontKillMe
nohup java  <span class="token operator">-</span>jar $jar_name <span class="token operator">--</span>server<span class="token punctuation">.</span>port<span class="token operator">=</span>$port <span class="token operator">--</span>spring<span class="token punctuation">.</span>profiles<span class="token punctuation">.</span>active<span class="token operator">=</span>test<span class="token operator">-</span>dev <span class="token operator">&gt;</span> <span class="token operator">/</span>dev<span class="token operator">/</span><span class="token keyword">null</span> <span class="token number">2</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span><span class="token number">1</span> <span class="token operator">&amp;</span>


<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> $tail_flag <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span> $tail_flag <span class="token operator">==</span> <span class="token char">&#39;y&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>then
        tail <span class="token operator">-</span>f logs<span class="token operator">/</span>info<span class="token punctuation">.</span>log
fi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/11.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h3 id="_2-3-执行" tabindex="-1"><a class="header-anchor" href="#_2-3-执行" aria-hidden="true">#</a> 2.3 执行</h3><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/12.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="三、前端项目" tabindex="-1"><a class="header-anchor" href="#三、前端项目" aria-hidden="true">#</a> 三、前端项目</h2><h3 id="_3-1-安装插件" tabindex="-1"><a class="header-anchor" href="#_3-1-安装插件" aria-hidden="true">#</a> 3.1 安装插件</h3><p>安装插件<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/13.png" alt="image.png" loading="lazy"><br> 全局配置<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/14.png" alt="image.png" loading="lazy"></p><h3 id="_3-2-创建项目" tabindex="-1"><a class="header-anchor" href="#_3-2-创建项目" aria-hidden="true">#</a> 3.2 创建项目</h3><p>创建一个自由风格的项目.<br> 服务器下载zip命令<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/15.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/16.png" alt="image.png" loading="lazy"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>#<span class="token operator">!</span><span class="token operator">/</span>bin<span class="token operator">/</span>bash

ui_dir<span class="token operator">=</span><span class="token operator">/</span>home<span class="token operator">/</span>feel<span class="token operator">/</span>ui
ui_name<span class="token operator">=</span>dist

# 进入目录编译代码
echo <span class="token string">&quot;### cd $WORKSPACE/&quot;</span>
cd $<span class="token constant">WORKSPACE</span><span class="token operator">/</span>

echo <span class="token string">&quot;### node -V&quot;</span>
node <span class="token operator">-</span><span class="token class-name">V</span>
echo <span class="token string">&quot;### npm cache clean --force&quot;</span>
npm cache clean <span class="token operator">--</span>force

echo <span class="token string">&quot;### npm install&quot;</span>
npm install

echo <span class="token string">&quot;### rm -rf dist&quot;</span>
rm <span class="token operator">-</span>rf dist
echo <span class="token string">&quot;### npm run build:stage&quot;</span>
npm run build<span class="token operator">:</span>stage

echo <span class="token string">&quot;### cp -r dist $ui_dir/$ui_name-$BUILD_NUMBER&quot;</span>
cp <span class="token operator">-</span>r dist $ui_dir<span class="token operator">/</span>$ui_name<span class="token operator">-</span>$<span class="token constant">BUILD_NUMBER</span>

echo <span class="token string">&quot;### rm -rf $ui_dir/dist/*&quot;</span>
rm <span class="token operator">-</span>rf $ui_dir<span class="token operator">/</span>dist<span class="token comment">/*

echo &quot;### cp -r $ui_dir/$ui_name-$BUILD_NUMBER/* $ui_dir/dist/&quot;
cp -r $ui_dir/$ui_name-$BUILD_NUMBER/* $ui_dir/dist/

cd $ui_dir

echo &quot;### zip -r $ui_dir/$ui_name-$BUILD_NUMBER.zip $ui_dir/$ui_name-$BUILD_NUMBER&quot;
zip -r $ui_name-$BUILD_NUMBER.zip $ui_dir/$ui_name-$BUILD_NUMBER

echo &quot;### rm -rf $ui_dir/$ui_name-$BUILD_NUMBER&quot;
rm -rf $ui_name-$BUILD_NUMBER

echo &quot;### 保留五个版本&quot;
echo &quot;### ls -t $ui_name*.zip | sed -n &#39;6,$p&#39; | xargs -I {} rm -rf {}&quot;
ls -t $ui_name*.zip | sed -n &#39;6,$p&#39; | xargs -I {} rm -rf {}
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/17.png" alt="image.png" loading="lazy"><br> 请自行配置Nginx</p><h2 id="四、用户权限分配" tabindex="-1"><a class="header-anchor" href="#四、用户权限分配" aria-hidden="true">#</a> 四、用户权限分配</h2><h3 id="_4-1安装插件" tabindex="-1"><a class="header-anchor" href="#_4-1安装插件" aria-hidden="true">#</a> 4.1安装插件</h3><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/18.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/jenkins/19.png" alt="image.png" loading="lazy"></p>`,14);function z(q,I){const e=p("ExternalLinkIcon");return o(),l("div",null,[c,n("p",null,[s("下载:"),n("a",d,[s("https://www.jenkins.io/download/"),t(e)]),u,v,m,s(" firewall-cmd --zone=public --add-port=8080/tcp --permanent"),k,s(" systemctl restart firewalld"),g,s(" 使用jdk11启动jenkins")]),b,n("p",null,[s("1、下载地址："),n("a",h,[s("https://maven.apache.org/download.cgi"),t(e)]),_,s(" 下载apache-maven-3.9.7-bin.tar.gz安装包，在非root目录下执行命令解压"),f,s(" tar -xzvf apache-maven-3.9.7-bin.tar.gz"),j,s(" 2、配置maven阿里云镜像")]),$,n("p",null,[n("a",x,[s("restart.sh"),t(e)])]),B])}const w=i(r,[["render",z],["__file","Jenkins.html.vue"]]);export{w as default};
