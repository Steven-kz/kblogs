const n=JSON.parse('{"key":"v-5e99ff02","path":"/java/DesignPattern/singleton.html","title":"单例模式","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"单例模式 单例模式是一种创建型设计模式，它确保只有一个类的实例存在，并提供全局访问点。在 Java 中，实现单例模式通常使用以下两种方式：饿汉式：坏处:对象加载时间过长。好处:饿汉式是线程安全的。懒汉式：好处:延迟对象的创建。坏处:目前的写法，会线程不安全。饿汉式单例模式饿汉式单例模式在类加载时就实例化一个对象，并将其保存在静态变量中，这样在之后的代码中就可以直接使用该实例 public class Singleton { // 在类加载时就实例化一个对象 private static final Singleton instance = new Singleton(); // 私有化构造函数，以防止其他代码创建实例 private Singleton() {} // 对外暴露获取实例的静态方法 public static Singleton getInstance() { return instance; } }","head":[["meta",{"property":"og:url","content":"https://k-flower.gitee.io/kblogs/java/DesignPattern/singleton.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"单例模式"}],["meta",{"property":"og:description","content":"单例模式 单例模式是一种创建型设计模式，它确保只有一个类的实例存在，并提供全局访问点。在 Java 中，实现单例模式通常使用以下两种方式：饿汉式：坏处:对象加载时间过长。好处:饿汉式是线程安全的。懒汉式：好处:延迟对象的创建。坏处:目前的写法，会线程不安全。饿汉式单例模式饿汉式单例模式在类加载时就实例化一个对象，并将其保存在静态变量中，这样在之后的代码中就可以直接使用该实例 public class Singleton { // 在类加载时就实例化一个对象 private static final Singleton instance = new Singleton(); // 私有化构造函数，以防止其他代码创建实例 private Singleton() {} // 对外暴露获取实例的静态方法 public static Singleton getInstance() { return instance; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T09:01:45.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T09:01:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单例模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-11T09:01:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\"}]}"]]},"headers":[],"git":{"createdTime":1697014905000,"updatedTime":1697014905000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":1}]},"readingTime":{"minutes":2.18,"words":654},"filePathRelative":"java/DesignPattern/singleton.md","localizedDate":"2022年1月4日","excerpt":"<h1> 单例模式</h1>\\n<p>单例模式是一种创建型设计模式，它确保只有一个类的实例存在，并提供全局访问点。<br>在 Java 中，实现单例模式通常使用以下两种方式：<br>饿汉式：坏处:对象加载时间过长。好处:饿汉式是线程安全的。<br>懒汉式：好处:延迟对象的创建。坏处:目前的写法，会线程不安全。饿汉式单例模式饿汉式单例模式在类加载时就实例化一个对象，并将其保存在静态变量中，这样在之后的代码中就可以直接使用该实例</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Singleton</span> <span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token comment\\">// 在类加载时就实例化一个对象</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">Singleton</span> instance <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Singleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 私有化构造函数，以防止其他代码创建实例</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">Singleton</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">// 对外暴露获取实例的静态方法</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">Singleton</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> instance<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};