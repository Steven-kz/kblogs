const n=JSON.parse('{"key":"v-977251ba","path":"/java/Common/ThreadPool.html","title":"ThreadPool","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"ThreadPool 池化思想：线程池、字符串常量池、数据库连接池 线程池优点： 提高线程得利用率 提高程序得响应速度 便于统一管理线程对象 可以控制最大并发数 /** * @author kz 单例模式 IoDh实现，静态内部类 * @date 2022/10/12 */ public class ThreadPoolSingle { private ThreadPoolExecutor executor; //1.私有化构造器 private ThreadPoolSingle(){ executor=new ThreadPoolExecutor(8,20,10, TimeUnit.SECONDS, new ArrayBlockingQueue&lt;&gt;(10), Executors.defaultThreadFactory(), new ThreadPoolExecutor.AbortPolicy()); } //2.静态内部类 public static class ThreadInner{ //3.完成当前对象的实例化 private static final ThreadPoolSingle poolSingle=new ThreadPoolSingle(); } //4.提供公有方法，外键获取对象 public static ThreadPoolSingle getInstance(){ return ThreadInner.poolSingle; } }","head":[["meta",{"property":"og:url","content":"https://k-flower.gitee.io/kblogs/java/Common/ThreadPool.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"ThreadPool"}],["meta",{"property":"og:description","content":"ThreadPool 池化思想：线程池、字符串常量池、数据库连接池 线程池优点： 提高线程得利用率 提高程序得响应速度 便于统一管理线程对象 可以控制最大并发数 /** * @author kz 单例模式 IoDh实现，静态内部类 * @date 2022/10/12 */ public class ThreadPoolSingle { private ThreadPoolExecutor executor; //1.私有化构造器 private ThreadPoolSingle(){ executor=new ThreadPoolExecutor(8,20,10, TimeUnit.SECONDS, new ArrayBlockingQueue&lt;&gt;(10), Executors.defaultThreadFactory(), new ThreadPoolExecutor.AbortPolicy()); } //2.静态内部类 public static class ThreadInner{ //3.完成当前对象的实例化 private static final ThreadPoolSingle poolSingle=new ThreadPoolSingle(); } //4.提供公有方法，外键获取对象 public static ThreadPoolSingle getInstance(){ return ThreadInner.poolSingle; } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-10T09:31:38.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-10T09:31:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ThreadPool\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-10T09:31:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\"}]}"]]},"headers":[{"level":2,"title":"一、线程池7大参数","slug":"一、线程池7大参数","link":"#一、线程池7大参数","children":[]},{"level":2,"title":"二、线程池的运行过程","slug":"二、线程池的运行过程","link":"#二、线程池的运行过程","children":[]},{"level":2,"title":"三、阻塞队列","slug":"三、阻塞队列","link":"#三、阻塞队列","children":[]},{"level":2,"title":"四、拒绝策略","slug":"四、拒绝策略","link":"#四、拒绝策略","children":[{"level":3,"title":"拒绝策略场景分析","slug":"拒绝策略场景分析","link":"#拒绝策略场景分析","children":[]}]},{"level":2,"title":"五、线程池的五大状态","slug":"五、线程池的五大状态","link":"#五、线程池的五大状态","children":[{"level":3,"title":"5.1 RUNNING","slug":"_5-1-running","link":"#_5-1-running","children":[]},{"level":3,"title":"5.2 SHUTDOWN","slug":"_5-2-shutdown","link":"#_5-2-shutdown","children":[]},{"level":3,"title":"5.3 STOP","slug":"_5-3-stop","link":"#_5-3-stop","children":[]},{"level":3,"title":"5.3TIDYING","slug":"_5-3tidying","link":"#_5-3tidying","children":[]},{"level":3,"title":"5.4 TERMINATED","slug":"_5-4-terminated","link":"#_5-4-terminated","children":[]}]},{"level":2,"title":"六、回收核心线程","slug":"六、回收核心线程","link":"#六、回收核心线程","children":[]},{"level":2,"title":"七、\\t多线程异步定时任务","slug":"七、多线程异步定时任务","link":"#七、多线程异步定时任务","children":[]}],"git":{"createdTime":1696930298000,"updatedTime":1696930298000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":1}]},"readingTime":{"minutes":7.23,"words":2169},"filePathRelative":"java/Common/ThreadPool.md","localizedDate":"2022年1月4日","excerpt":"<h1> ThreadPool</h1>\\n<p>池化思想：线程池、字符串常量池、数据库连接池<br>\\n线程池优点：<br>\\n<strong>提高线程得利用率</strong><br>\\n<strong>提高程序得响应速度</strong><br>\\n<strong>便于统一管理线程对象</strong><br>\\n<strong>可以控制最大并发数</strong></p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token doc-comment comment\\">/**\\n * <span class=\\"token keyword\\">@author</span> kz 单例模式 IoDh实现，静态内部类\\n * <span class=\\"token keyword\\">@date</span> 2022/10/12\\n */</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ThreadPoolSingle</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">ThreadPoolExecutor</span> executor<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token comment\\">//1.私有化构造器</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">ThreadPoolSingle</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        executor<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ThreadPoolExecutor</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">TimeUnit</span><span class=\\"token punctuation\\">.</span><span class=\\"token constant\\">SECONDS</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ArrayBlockingQueue</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token class-name\\">Executors</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">defaultThreadFactory</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n                <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ThreadPoolExecutor<span class=\\"token punctuation\\">.</span>AbortPolicy</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//2.静态内部类</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ThreadInner</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//3.完成当前对象的实例化</span>\\n        <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">final</span> <span class=\\"token class-name\\">ThreadPoolSingle</span> poolSingle<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ThreadPoolSingle</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//4.提供公有方法，外键获取对象</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token class-name\\">ThreadPoolSingle</span> <span class=\\"token function\\">getInstance</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token class-name\\">ThreadInner</span><span class=\\"token punctuation\\">.</span>poolSingle<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
