import{_ as e,r as i,o as t,c as l,a as n,b as s,d as o,f as p}from"./app-314de074.js";const c={},u=n("p",null,"coding概述：提供一站式开发协作工具，帮助研发团队快速落地敏捷开发与 DevOps 开发方式，实现研发效能升级",-1),d=n("h2",{id:"一、创建项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、创建项目","aria-hidden":"true"},"#"),s(" 一、创建项目")],-1),r=n("strong",null,"文档：",-1),v={href:"https://g-mnbk6665.coding.net/quickstart",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"https://g-mnbk6665.coding.net/quickstart",-1),b=p(`<h2 id="二、ssh连接" tabindex="-1"><a class="header-anchor" href="#二、ssh连接" aria-hidden="true">#</a> 二、SSH连接</h2><p>关于ssh相关命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>重启SSH服务
systemctl restart sshd
开机自动启动ssh命令
sudo systemctl enable sshd
关闭ssh开机自动启动命令
sudo systemctl disable ssh
单次开启ssh
sudo systemctl start ssh
单次关闭ssh
sudo systemctl stop ssh
设置好后重启系统
查看ssh是否启动，看到Active: active (running)即表示成功
sudo systemctl status sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/1.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /root/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成了三个文件：<br> authorized_keys:存放远程免密登录的公钥,主要通过这个文件记录多台机器的公钥id_rsa : 生成的私钥文件id_rsa.pub ： 生成的公钥文件<br> 进入id_rsa.pub文件，并将里面的内容全部拷贝到authorized_keys文件中保存</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat id_rsa.pub
vim authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再查看私钥 id_rsa 内容并全部复制：配置coding即可</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/2.png" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="三、springboot" tabindex="-1"><a class="header-anchor" href="#三、springboot" aria-hidden="true">#</a> 三、SpringBoot</h2><h3 id="持续集成" tabindex="-1"><a class="header-anchor" href="#持续集成" aria-hidden="true">#</a> 持续集成</h3><p>关联项目，结合自己项目进行关联<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/3.png" alt="image.png" loading="lazy"><br> 选择Spring+Docker模板<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/4.png" alt="image.png" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/5.png" alt="image.png" loading="lazy"><br><strong>变量配置信息</strong><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/6.png" alt="image.png" loading="lazy"><br> 构建方式有很多种 （分支，标签，版本号）<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/7.png" alt="image.png" loading="lazy"></p><h4 id="_3-1-多环境配置" tabindex="-1"><a class="header-anchor" href="#_3-1-多环境配置" aria-hidden="true">#</a> 3.1 多环境配置</h4><p>配置你的环境，可打包时选择相应环境<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/8.png" alt="image.png" loading="lazy"><br> 至此持续集成就完成了，<strong>但要考虑logs文件的保留问题，可通过脚本Copy到备份文件夹</strong></p><h4 id="_3-2-dockerfile" tabindex="-1"><a class="header-anchor" href="#_3-2-dockerfile" aria-hidden="true">#</a> 3.2 Dockerfile</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>方式一
# 基础镜像
FROM  openjdk:8-jre
# author
MAINTAINER zxht
# 东八区
ENV TZ=&#39;Asia/Shanghai&#39;
# 挂载目录
VOLUME /home/service
# 创建目录
RUN mkdir -p /home/service
# 指定路径
WORKDIR /home/service
# 复制jar文件到路径
COPY ./mes-web/target/mes.jar /home/service/mes.jar
# 启动系统服务
ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;mes.jar&quot;]

方式二
FROM coding-public-docker.pkg.coding.net/public/docker/openjdk:8

COPY ./mes-web/target/mes.jar /root/workspace/mes.jar

CMD [&quot;java&quot;, &quot;-jar&quot;, &quot;mes.jar&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-静态jenkinsfile" tabindex="-1"><a class="header-anchor" href="#_3-3-静态jenkinsfile" aria-hidden="true">#</a> 3.3 静态Jenkinsfile</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
  agent any
  stages <span class="token punctuation">{</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;检出&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        checkout<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;GitSCM&#39;</span>,
        branches: <span class="token punctuation">[</span><span class="token punctuation">[</span>name: GIT_BUILD_REF<span class="token punctuation">]</span><span class="token punctuation">]</span>,
        userRemoteConfigs: <span class="token punctuation">[</span><span class="token punctuation">[</span>
          url: GIT_REPO_URL,
          credentialsId: CREDENTIALS_ID
        <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;编译&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        <span class="token function">sh</span> <span class="token string">&#39;mvn clean install -e -U -P \${PROFILES}&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;构建镜像并推送到 CODING Docker 制品库&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        script <span class="token punctuation">{</span>
          docker.withRegistry<span class="token punctuation">(</span>
            <span class="token string">&quot;<span class="token variable">\${CCI_CURRENT_WEB_PROTOCOL}</span>://<span class="token variable">\${CODING_DOCKER_REG_HOST}</span>&quot;</span>,
            <span class="token string">&quot;<span class="token variable">\${CODING_ARTIFACTS_CREDENTIALS_ID}</span>&quot;</span>
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            def dockerImage <span class="token operator">=</span> docker.build<span class="token punctuation">(</span><span class="token string">&quot;<span class="token variable">\${CODING_DOCKER_IMAGE_NAME}</span>:<span class="token variable">\${DOCKER_IMAGE_VERSION}</span>&quot;</span>, <span class="token string">&quot;-f <span class="token variable">\${DOCKERFILE_PATH}</span> <span class="token variable">\${DOCKER_BUILD_CONTEXT}</span>&quot;</span><span class="token punctuation">)</span>
            dockerImage.push<span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;部署到远端服务&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        script <span class="token punctuation">{</span>
          def remoteConfig <span class="token operator">=</span> <span class="token punctuation">[</span>:<span class="token punctuation">]</span>
          remoteConfig.name <span class="token operator">=</span> <span class="token string">&quot;my-remote-server&quot;</span>
          remoteConfig.host <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${REMOTE_HOST}</span>&quot;</span>
          remoteConfig.port <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${REMOTE_SSH_PORT}</span>&quot;</span>.toInteger<span class="token punctuation">(</span><span class="token punctuation">)</span>
          remoteConfig.allowAnyHosts <span class="token operator">=</span> <span class="token boolean">true</span>

          withCredentials<span class="token punctuation">(</span><span class="token punctuation">[</span>
            sshUserPrivateKey<span class="token punctuation">(</span>
              credentialsId: <span class="token string">&quot;<span class="token variable">\${REMOTE_CRED}</span>&quot;</span>,
              keyFileVariable: <span class="token string">&quot;privateKeyFilePath&quot;</span>
            <span class="token punctuation">)</span>,
            usernamePassword<span class="token punctuation">(</span>
              credentialsId: <span class="token string">&quot;<span class="token variable">\${CODING_ARTIFACTS_CREDENTIALS_ID}</span>&quot;</span>,
              usernameVariable: <span class="token string">&#39;CODING_DOCKER_REG_USERNAME&#39;</span>,
              passwordVariable: <span class="token string">&#39;CODING_DOCKER_REG_PASSWORD&#39;</span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            // SSH 登录用户名
            remoteConfig.user <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${REMOTE_USER_NAME}</span>&quot;</span>
            // SSH 私钥文件地址
            remoteConfig.identityFile <span class="token operator">=</span> privateKeyFilePath

            // 请确保远端环境中有 Docker 环境
            sshCommand<span class="token punctuation">(</span>
              remote: remoteConfig,
              command: <span class="token string">&quot;docker login -u <span class="token variable">\${CODING_DOCKER_REG_USERNAME}</span> -p <span class="token variable">\${CODING_DOCKER_REG_PASSWORD}</span> <span class="token variable">\${CODING_DOCKER_REG_HOST}</span>&quot;</span>,
              sudo: true,
            <span class="token punctuation">)</span>

            sshCommand<span class="token punctuation">(</span>
              remote: remoteConfig,
              command: <span class="token string">&quot;docker rm -f mes | true&quot;</span>,
              sudo: true,
            <span class="token punctuation">)</span>

            // DOCKER_IMAGE_VERSION 中涉及到 GIT_LOCAL_BRANCH / GIT_TAG / GIT_COMMIT 的环境变量的使用
            // 需要在本地完成拼接后，再传入到远端服务器中使用
            DOCKER_IMAGE_URL <span class="token operator">=</span> sh<span class="token punctuation">(</span>
              script: <span class="token string">&quot;echo <span class="token variable">\${CODING_DOCKER_REG_HOST}</span>/<span class="token variable">\${CODING_DOCKER_IMAGE_NAME}</span>:<span class="token variable">\${DOCKER_IMAGE_VERSION}</span>&quot;</span>,
              returnStdout: <span class="token boolean">true</span>
            <span class="token punctuation">)</span>

            sshCommand<span class="token punctuation">(</span>
              remote: remoteConfig,
              command: <span class="token string">&quot;docker run -d -p 8999:8999 --name mes <span class="token variable">\${DOCKER_IMAGE_URL}</span>&quot;</span>,
              sudo: true,
            <span class="token punctuation">)</span>

            <span class="token builtin class-name">echo</span> <span class="token string">&quot;部署成功，请到 http://<span class="token variable">\${REMOTE_HOST}</span>:8999/mes/doc.html#/home&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  environment <span class="token punctuation">{</span>
    CODING_DOCKER_REG_HOST <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${CCI_CURRENT_TEAM}</span>-docker.pkg.<span class="token variable">\${CCI_CURRENT_DOMAIN}</span>&quot;</span>
    CODING_DOCKER_IMAGE_NAME <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${PROJECT_NAME.toLowerCase()}</span>/<span class="token variable">\${DOCKER_REPO_NAME}</span>/<span class="token variable">\${DOCKER_IMAGE_NAME}</span>&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、持续集成-vue" tabindex="-1"><a class="header-anchor" href="#四、持续集成-vue" aria-hidden="true">#</a> 四、持续集成 Vue</h2><p>1.关联仓库后选择模板<br> 2.本次使用的是ssh连接当然也可以选择账户+密码<br> 3.创建制品仓Generic类型存储dist压缩包<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/9.png" alt="image.png" loading="lazy"><br> 变量和缓存<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/10.png" alt="image.png" loading="lazy"><br> 流程配置信息的几个说明点<br> 1.这是创建的制品名称<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/11.png" alt="image.png" loading="lazy"><br> 2.指定Node版本<br><img src="https://steven-kz.github.io/BlogImgs/imgaes/coding/12.png" alt="image.png" loading="lazy"><br> 3.注意你的存放Nginx和文件路径一致否则依赖加载不到</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 服务器远程地址
def remotePath <span class="token operator">=</span> <span class="token string">&quot;/www/wwwroot/kblogs&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pipeline <span class="token punctuation">{</span>
  agent any
  stages <span class="token punctuation">{</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;检出&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        checkout<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token variable">$class</span><span class="token builtin class-name">:</span> <span class="token string">&#39;GitSCM&#39;</span>,
        branches: <span class="token punctuation">[</span><span class="token punctuation">[</span>name: GIT_BUILD_REF<span class="token punctuation">]</span><span class="token punctuation">]</span>,
        userRemoteConfigs: <span class="token punctuation">[</span><span class="token punctuation">[</span>
          url: GIT_REPO_URL,
          credentialsId: CREDENTIALS_ID
        <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;安装依赖&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        <span class="token function">sh</span> <span class="token string">&#39;npx -p node@16.20.2 npm install&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;执行构建&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;开始构建&#39;</span>
        <span class="token function">sh</span> <span class="token string">&#39;npx -p node@16.20.2 npm run build&#39;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;构建完成&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;压缩制品Dist&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;压缩中...&#39;</span>
        <span class="token function">sh</span> <span class="token string">&#39;tar -zcf dist.tar.gz -C ./src/.vuepress/ dist&#39;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;压缩完成.&#39;</span>
        <span class="token function">sh</span> <span class="token string">&#39;ls&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;上传制品&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;开始上传&#39;</span>
        codingArtifactsGeneric<span class="token punctuation">(</span>files: <span class="token string">&#39;dist.tar.gz&#39;</span>, repoName: <span class="token string">&#39;blogs&#39;</span>, version: <span class="token string">&#39;\${env.GIT_BUILD_REF}&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stage<span class="token punctuation">(</span><span class="token string">&#39;部署至服务器&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      steps <span class="token punctuation">{</span>
        script <span class="token punctuation">{</span>
          def <span class="token assign-left variable">remote</span><span class="token operator">=</span> <span class="token punctuation">[</span>:<span class="token punctuation">]</span>
          remote.name <span class="token operator">=</span> <span class="token string">&quot;my-remote-server&quot;</span>
          remote.host <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${REMOTE_HOST}</span>&quot;</span>
          remote.allowAnyHosts <span class="token operator">=</span> <span class="token boolean">true</span>
          // 服务器远程地址
          def remotePath <span class="token operator">=</span> <span class="token string">&quot;/www/wwwroot/kblogs&quot;</span>
          withCredentials<span class="token punctuation">(</span><span class="token punctuation">[</span>sshUserPrivateKey<span class="token punctuation">(</span>
            credentialsId: <span class="token string">&quot;<span class="token variable">\${REMOTE_CRED}</span>&quot;</span>,
            keyFileVariable: <span class="token string">&quot;privateKeyFilePath&quot;</span>
          <span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            remote.user <span class="token operator">=</span> <span class="token string">&quot;<span class="token variable">\${REMOTE_USER_NAME}</span>&quot;</span>
            // SSH 私钥文件地址
            remote.identityFile <span class="token operator">=</span> privateKeyFilePath
            stage<span class="token punctuation">(</span><span class="token string">&quot;执行ssh脚本&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token builtin class-name">echo</span> <span class="token string">&#39;开始执行脚本&#39;</span>
              sshCommand remote: remote, sudo: false, command: <span class="token string">&quot;rm -rf <span class="token variable">\${remotePath}</span>/*&quot;</span>
              sshCommand remote: remote, command: <span class="token string">&quot;mkdir -p /www/wwwroot/kblogs/ &amp;&amp; touch /www/wwwroot/kblogs/dist.tar.gz&quot;</span>
              sshPut remote: remote, from: <span class="token string">&#39;./dist.tar.gz&#39;</span>, into:remotePath + <span class="token string">&quot;/dist.tar.gz&quot;</span>                // SSH 上传文件到远端服务器
              sshCommand remote: remote, command: <span class="token string">&quot;tar -zxf <span class="token variable">\${remotePath}</span>/dist.tar.gz -C <span class="token variable">\${remotePath}</span>&quot;</span>     // 解压缩
              sshCommand remote: remote, sudo: false, command: <span class="token string">&quot;rm -f <span class="token variable">\${remotePath}</span>/*.tar.gz&quot;</span>              // 删除压缩文件
              sshCommand remote: remote, sudo: false, command: <span class="token string">&quot;mv <span class="token variable">\${remotePath}</span>/dist/* <span class="token variable">\${remotePath}</span>&quot;</span>    //将dist文件夹所有内容移动到上一级
              sshCommand remote: remote, sudo: false, command: <span class="token string">&quot;rm -rf <span class="token variable">\${remotePath}</span>/dist&quot;</span>    //将dist文件夹所有内容移动到上一级
              <span class="token builtin class-name">echo</span> <span class="token string">&#39;脚本执行结束&#39;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function k(g,h){const a=i("ExternalLinkIcon");return t(),l("div",null,[u,d,n("p",null,[s("省略 详细"),r,n("a",v,[m,o(a)])]),b])}const E=e(c,[["render",k],["__file","Coding.html.vue"]]);export{E as default};
