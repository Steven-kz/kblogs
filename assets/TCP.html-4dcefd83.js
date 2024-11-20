import{_ as t,o as i,c as e,f as a}from"./app-942d725a.js";const s={},n=a('<h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>1、TCP协议主要就是三次握手和四次挥手<br> 三次握手是客户端首先给服务端发送一个SYN包，服务器收到之后回复SYN+ACK，客户端收到之后回复ACK建立连接，三次握手主要就是解决网络信道不可靠问题<br> 2、TCP的丢包问题，客户端第一次发送的报文是 序列号，长度，和数据内容，<br> 服务端收到之后回复ACK等于序列号加长度，下一次客户端发包的时候就会根据序列号去发送<br> 3、四次挥手 第一次挥手就是客户端发送一个Fin包给服务端，第二次挥手服务端接受后返回客户端ACK，第三次挥手是服务端发送Fin包给客户端确认是否关闭连接，第四次挥手是客户端给服务端发送ACK确认关闭连接，发送之后服务端收到后会立即断开连接，而客户端会等待一段时间，超时后自动关闭，第四次挥手主要是为了防止服务端没有收到ACK，一直在等待，而客户端却关闭了</p></div><p><img src="https://steven-kz.github.io/BlogImgs/imgaes/tcp/1.png" alt="img" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/tcp/2.png" alt="img" loading="lazy"><br><img src="https://steven-kz.github.io/BlogImgs/imgaes/tcp/3.png" alt="img" loading="lazy"></p>',3),c=[n];function o(r,l){return i(),e("div",null,c)}const p=t(s,[["render",o],["__file","TCP.html.vue"]]);export{p as default};
