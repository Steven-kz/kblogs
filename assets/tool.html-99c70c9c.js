import{_ as n,o as s,c as a,f as p}from"./app-314de074.js";const t={},e=p(`<h2 id="一、二维码图片识别工具类" tabindex="-1"><a class="header-anchor" href="#一、二维码图片识别工具类" aria-hidden="true">#</a> 一、二维码图片识别工具类</h2><p>.二维码图片识别工具类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>zxing<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>zxing<span class="token punctuation">.</span>client<span class="token punctuation">.</span>j2se<span class="token punctuation">.</span></span><span class="token class-name">BufferedImageLuminanceSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>zxing<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">HybridBinarizer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>zxing<span class="token punctuation">.</span>multi<span class="token punctuation">.</span>qrcode<span class="token punctuation">.</span></span><span class="token class-name">QRCodeMultiReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>imageio<span class="token punctuation">.</span></span><span class="token class-name">ImageIO</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>image<span class="token punctuation">.</span></span><span class="token class-name">BufferedImage</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">DecodeUtils</span><span class="token punctuation">.</span><span class="token static">decodeMultiple</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">QRCodeUtils</span><span class="token punctuation">{</span>
<span class="token doc-comment comment">/**

* 解析二维码,此方法解析一个路径的二维码图片
* path:图片路径
  */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">deEncodeByPath</span><span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token class-name">BufferedImage</span> image<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
  image <span class="token operator">=</span> <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">LuminanceSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedImageLuminanceSource</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Binarizer</span> binarizer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HybridBinarizer</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">BinaryBitmap</span> binaryBitmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinaryBitmap</span><span class="token punctuation">(</span>binarizer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">.</span><span class="token constant">CHARACTER_SET</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Result</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MultiFormatReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>binaryBitmap<span class="token punctuation">,</span> hints<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//解码</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;图片中内容：  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;content： &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//这里判断如果识别不了带LOGO的图片，重新添加上一个属性</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
  image <span class="token operator">=</span> <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">LuminanceSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedImageLuminanceSource</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Binarizer</span> binarizer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HybridBinarizer</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">BinaryBitmap</span> binaryBitmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinaryBitmap</span><span class="token punctuation">(</span>binarizer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//设置编码格式</span>
  hints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">.</span><span class="token constant">CHARACTER_SET</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//设置优化精度</span>
  hints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">.</span><span class="token constant">TRY_HARDER</span><span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">TRUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//设置复杂模式开启（我使用这种方式就可以识别微信的二维码了）</span>
  hints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">.</span><span class="token constant">PURE_BARCODE</span><span class="token punctuation">,</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Result</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MultiFormatReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>binaryBitmap<span class="token punctuation">,</span> hints<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//解码</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;图片中内容：  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;content： &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  e1<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token doc-comment comment">/**
* 同时识别多个二维码
* path:图片路径
  *
* <span class="token keyword">@param</span> <span class="token parameter">path</span> 路径
* <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">String</span></span><span class="token punctuation">}</span>
  */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> duo <span class="token punctuation">(</span><span class="token class-name">String</span> path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">decodeMultiple</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> content <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token class-name">BufferedImage</span> image<span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
  image <span class="token operator">=</span> <span class="token class-name">ImageIO</span><span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">LuminanceSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedImageLuminanceSource</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Binarizer</span> binarizer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HybridBinarizer</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">BinaryBitmap</span> binaryBitmap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BinaryBitmap</span><span class="token punctuation">(</span>binarizer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> hints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  hints<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">DecodeHintType</span><span class="token punctuation">.</span><span class="token constant">CHARACTER_SET</span><span class="token punctuation">,</span> <span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//            Result result = new MultiFormatReader().decode(binaryBitmap, hints);//解码</span>
  <span class="token class-name">Result</span><span class="token punctuation">[</span><span class="token punctuation">]</span> results <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QRCodeMultiReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decodeMultiple</span><span class="token punctuation">(</span>binaryBitmap<span class="token punctuation">,</span> hints<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;图片中内容：  &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> results<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;第&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;个二维码： &quot;</span> <span class="token operator">+</span> results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  content <span class="token operator">=</span> <span class="token string">&quot;第&quot;</span><span class="token operator">+</span>i<span class="token operator">+</span><span class="token string">&quot;个二维码： &quot;</span> <span class="token operator">+</span> results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> content<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;错误&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">deEncodeByPath</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\home\\\\test.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//二维码图片路径</span>
        <span class="token function">duo</span><span class="token punctuation">(</span><span class="token string">&quot;C:\\\\home\\\\test.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、springutils" tabindex="-1"><a class="header-anchor" href="#二、springutils" aria-hidden="true">#</a> 二、springUtils</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>aop<span class="token punctuation">.</span>framework<span class="token punctuation">.</span></span><span class="token class-name">AopContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span><span class="token class-name">NoSuchBeanDefinitionException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">BeanFactoryPostProcessor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">ConfigurableListableBeanFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * spring工具类 方便在非spring管理环境中获取bean
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">SpringUtils</span> <span class="token keyword">implements</span> <span class="token class-name">BeanFactoryPostProcessor</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** Spring应用上下文环境 */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postProcessBeanFactory</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableListableBeanFactory</span> beanFactory<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">SpringUtils</span><span class="token punctuation">.</span>beanFactory <span class="token operator">=</span> beanFactory<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> Object 一个以所给名字注册的bean的实例
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span>
     *
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取类型为requiredType的对象
     *
     * <span class="token keyword">@param</span> <span class="token parameter">clz</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> clz<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">T</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> beanFactory<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>clz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果BeanFactory包含一个与所给名称匹配的bean定义，则返回true
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> boolean
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">containsBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">containsBean</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 判断以给定名字注册的bean定义是一个singleton还是一个prototype。 如果与给定名字相应的bean定义没有被找到，将会抛出一个异常（NoSuchBeanDefinitionException）
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> boolean
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span><span class="token class-name">NoSuchBeanDefinitionException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">isSingleton</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span> Class 注册对象的类型
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span><span class="token class-name">NoSuchBeanDefinitionException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果给定的bean名字在bean定义中有别名，则返回这些别名
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span></span><span class="token class-name">NoSuchBeanDefinitionException</span></span>
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getAliases</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">NoSuchBeanDefinitionException</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> beanFactory<span class="token punctuation">.</span><span class="token function">getAliases</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 获取aop代理对象
     * 
     * <span class="token keyword">@param</span> <span class="token parameter">invoker</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span> <span class="token function">getAopProxy</span><span class="token punctuation">(</span><span class="token class-name">T</span> invoker<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token class-name">AopContext</span><span class="token punctuation">.</span><span class="token function">currentProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>三、Mail</p><pre><code>    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-mail&lt;/artifactId&gt;
    &lt;/dependency&gt;
</code></pre><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>spring:
  #邮箱配置
  mail:
    username: 邮箱
    password: 密码
    host: smtp.aliyun.com
    port: 465
    protocol: smtp
    properties:
      mail:
        smtp:
          ssl:
            enable: true
          auth: true
          starttls:
            enable: true
            required: true
          socketFactory:
            port: 465
            class: javax.net.ssl.SSLSocketFactory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>package com.haiziwang.excelfinal.util;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.util.Date;

@Component
public class MailUtil {
    //定义实例
    private static MailUtil INSTANCE=new MailUtil();
    @Resource
    private JavaMailSender javaMailSender;
    //@PostConstruct 当前对象初始化完成后，执行后置的处理
    @PostConstruct
    public void init(){
        INSTANCE.javaMailSender=javaMailSender;
    }
    /**
     *
     * @param title 邮件题目
     * @param from 邮件发送人邮箱 
     * @param content 邮件内容
     * @param receiver 邮件接收者邮箱
     */
    //发送普通文件
    public static void sendSimpleMail(String title,String from,String content,String receiver){
        //构建一个文件对象
        SimpleMailMessage mailMessage=new SimpleMailMessage();
        //设置邮件主题
        mailMessage.setSubject(title);
        //设置邮件发送者
        mailMessage.setFrom(from);
        //设置邮件接收者
        mailMessage.setTo(receiver);
        //设置邮件正文内容
        mailMessage.setText(content);
        //设置发送时间
        mailMessage.setSentDate(new Date());
        //发送文件
        INSTANCE.javaMailSender.send(mailMessage);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","tool.html.vue"]]);export{k as default};
