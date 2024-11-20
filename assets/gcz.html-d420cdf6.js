const t=JSON.parse('{"key":"v-d3e2e3e8","path":"/java/DesignPattern/gcz.html","title":"观察者模式","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"观察者模式 spring事件就是观察者模式的一种 ，是一种行为设计模式，它定义了对象之间的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并被自动更新。在这个模式中，改变状态的对象被称为主题，依赖的对象被称为观察者。举个实际的例子：事件源（Event Source）：可以视为“主题（Subject）”，当其状态发生变化时（比如播放新的内容），会通知所有的观察者。想象我们正在听广播，广播电台就是一个事件源，它提供了大量的新闻、音乐和其他内容。事件（Event）：这是主题状态改变的具体表示，对应到广播例子中，就是新闻、音乐和其他内容。每当电台播放新的内容时，就相当于一个新的事件被发布了。广播器（Event Publisher / Multicaster）：广播器起到的是中介的作用，它将事件从事件源传递到监听器。在这个例子中，广播塔就充当了这个角色，它将电台的节目的无线电信号发送到空气中，以便无线电接收器（监听器）可以接收。监听器（Listener）：监听器就是“观察者”，它们监听并响应特定的事件。在例子中，无线电接收器就是监听器，它接收广播塔发出的信号，然后播放电台的内容。在Spring中，事件模型的工作方式也是类似的：当Spring应用程序中发生某个行为时（比如一个用户完成了注册），那么产生这个行为的组件（比如用户服务）就会创建一个事件，并将它发布出去。事件一旦被发布，Spring的ApplicationContext就会作为广播器，把这个事件发送给所有注册的监听器。各个监听器接收到事件后，就会根据事件的类型和内容，进行相应的处理（比如发送欢迎邮件，赠送新用户优惠券等）。  这就是Spring事件模型的工作原理，它实现了事件源、广播器和监听器之间的解耦，使得事件的生产者和消费者可以独立地进行开发和修改，增强了程序的灵活性和可维护性。","head":[["meta",{"property":"og:url","content":"https://k-flower.gitee.io/kblogs/java/DesignPattern/gcz.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"观察者模式"}],["meta",{"property":"og:description","content":"观察者模式 spring事件就是观察者模式的一种 ，是一种行为设计模式，它定义了对象之间的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并被自动更新。在这个模式中，改变状态的对象被称为主题，依赖的对象被称为观察者。举个实际的例子：事件源（Event Source）：可以视为“主题（Subject）”，当其状态发生变化时（比如播放新的内容），会通知所有的观察者。想象我们正在听广播，广播电台就是一个事件源，它提供了大量的新闻、音乐和其他内容。事件（Event）：这是主题状态改变的具体表示，对应到广播例子中，就是新闻、音乐和其他内容。每当电台播放新的内容时，就相当于一个新的事件被发布了。广播器（Event Publisher / Multicaster）：广播器起到的是中介的作用，它将事件从事件源传递到监听器。在这个例子中，广播塔就充当了这个角色，它将电台的节目的无线电信号发送到空气中，以便无线电接收器（监听器）可以接收。监听器（Listener）：监听器就是“观察者”，它们监听并响应特定的事件。在例子中，无线电接收器就是监听器，它接收广播塔发出的信号，然后播放电台的内容。在Spring中，事件模型的工作方式也是类似的：当Spring应用程序中发生某个行为时（比如一个用户完成了注册），那么产生这个行为的组件（比如用户服务）就会创建一个事件，并将它发布出去。事件一旦被发布，Spring的ApplicationContext就会作为广播器，把这个事件发送给所有注册的监听器。各个监听器接收到事件后，就会根据事件的类型和内容，进行相应的处理（比如发送欢迎邮件，赠送新用户优惠券等）。  这就是Spring事件模型的工作原理，它实现了事件源、广播器和监听器之间的解耦，使得事件的生产者和消费者可以独立地进行开发和修改，增强了程序的灵活性和可维护性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-07T07:15:40.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-07T07:15:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"观察者模式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-07T07:15:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\"}]}"]]},"headers":[{"level":2,"title":"观察者模式","slug":"观察者模式-1","link":"#观察者模式-1","children":[]}],"git":{"createdTime":1697020386000,"updatedTime":1715066140000,"contributors":[{"name":"kou","email":"knightbreeze@163.com","commits":2},{"name":"kz","email":"1069624300@QQ.COM","commits":1}]},"readingTime":{"minutes":3.51,"words":1054},"filePathRelative":"java/DesignPattern/gcz.md","localizedDate":"2022年1月4日","excerpt":"<h1> 观察者模式</h1>\\n<p>spring事件就是观察者模式的一种 ，是一种行为设计模式，它定义了对象之间的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并被自动更新。在这个模式中，改变状态的对象被称为主题，依赖的对象被称为观察者。<br>举个实际的例子：<br><strong>事件源（Event Source）</strong>：可以视为“主题（Subject）”，当其状态发生变化时（比如播放新的内容），会通知所有的观察者。想象我们正在听广播，广播电台就是一个事件源，它提供了大量的新闻、音乐和其他内容。<br><strong>事件（Event）</strong>：这是主题状态改变的具体表示，对应到广播例子中，就是新闻、音乐和其他内容。每当电台播放新的内容时，就相当于一个新的事件被发布了。<br><strong>广播器（Event Publisher / Multicaster）</strong>：广播器起到的是中介的作用，它将事件从事件源传递到监听器。在这个例子中，广播塔就充当了这个角色，它将电台的节目的无线电信号发送到空气中，以便无线电接收器（监听器）可以接收。<br><strong>监听器（Listener）</strong>：监听器就是“观察者”，它们监听并响应特定的事件。在例子中，无线电接收器就是监听器，它接收广播塔发出的信号，然后播放电台的内容。<br><strong>在Spring中，事件模型的工作方式也是类似的：</strong><br>当Spring应用程序中发生某个行为时（比如一个用户完成了注册），那么产生这个行为的组件（比如用户服务）就会创建一个事件，并将它发布出去。<br>事件一旦被发布，Spring的ApplicationContext就会作为广播器，把这个事件发送给所有注册的监听器。<br>各个监听器接收到事件后，就会根据事件的类型和内容，进行相应的处理（比如发送欢迎邮件，赠送新用户优惠券等）。<br>  这就是Spring事件模型的工作原理，它实现了事件源、广播器和监听器之间的解耦，使得事件的生产者和消费者可以独立地进行开发和修改，增强了程序的灵活性和可维护性。</p>","autoDesc":true}');export{t as data};