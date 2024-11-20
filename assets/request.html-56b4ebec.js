const e=JSON.parse('{"key":"v-e2c17f44","path":"/bug/request.html","title":"request请求体丢失","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"request请求体丢失 一、问题描述 在拦截器中获取流之后request.getInputStream();后续再次获取Required request body is missing 请求体丢失 二、原因 在HTTP协议中，请求的Body内容是通过输入流（InputStream）传输的。一旦读取了输入流中的数据，就无法再次读取。这是因为HTTP请求是基于流式传输的，一旦读取了流中的数据，数据就会被消耗掉，无法再次获取。具体到Java Servlet中，当调用request.getInputStream()方法时，Servlet容器会从请求中读取输入流的数据，并且将其缓存起来供后续使用。一旦读取了输入流的数据，就无法再次获取同一个输入流，因为输入流的数据已经被读取和消耗掉了。所以，在上述代码中，当拦截器中第一次调用request.getInputStream()获取了输入流后，如果后续代码再次调用request.getInputStream()来获取输入流，就会导致\\"Required request body is missing\\"错误。因为此时输入流中已经没有数据可读取了。解决这个问题的常见方法是通过HttpServletRequestWrapper类来包装请求对象，实现自定义的HttpServletRequest，并在包装类中重写getInputStream()或getReader()方法，以提供对输入流的多次读取支持。这样就可以将输入流的数据保存在一个缓存中，并在每次调用getInputStream()时返回缓存中的数据，从而避免了多次读取输入流导致数据被消耗的问题。总之，HTTP请求的输入流只能读取一次，无法重复获取。如果需要多次读取输入流的数据，可以使用HttpServletRequestWrapper类来进行包装和处理。","head":[["meta",{"property":"og:url","content":"https://k-flower.gitee.io/kblogs/bug/request.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"request请求体丢失"}],["meta",{"property":"og:description","content":"request请求体丢失 一、问题描述 在拦截器中获取流之后request.getInputStream();后续再次获取Required request body is missing 请求体丢失 二、原因 在HTTP协议中，请求的Body内容是通过输入流（InputStream）传输的。一旦读取了输入流中的数据，就无法再次读取。这是因为HTTP请求是基于流式传输的，一旦读取了流中的数据，数据就会被消耗掉，无法再次获取。具体到Java Servlet中，当调用request.getInputStream()方法时，Servlet容器会从请求中读取输入流的数据，并且将其缓存起来供后续使用。一旦读取了输入流的数据，就无法再次获取同一个输入流，因为输入流的数据已经被读取和消耗掉了。所以，在上述代码中，当拦截器中第一次调用request.getInputStream()获取了输入流后，如果后续代码再次调用request.getInputStream()来获取输入流，就会导致\\"Required request body is missing\\"错误。因为此时输入流中已经没有数据可读取了。解决这个问题的常见方法是通过HttpServletRequestWrapper类来包装请求对象，实现自定义的HttpServletRequest，并在包装类中重写getInputStream()或getReader()方法，以提供对输入流的多次读取支持。这样就可以将输入流的数据保存在一个缓存中，并在每次调用getInputStream()时返回缓存中的数据，从而避免了多次读取输入流导致数据被消耗的问题。总之，HTTP请求的输入流只能读取一次，无法重复获取。如果需要多次读取输入流的数据，可以使用HttpServletRequestWrapper类来进行包装和处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-21T06:53:49.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-21T06:53:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"request请求体丢失\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-21T06:53:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\"}]}"]]},"headers":[{"level":2,"title":"一、问题描述","slug":"一、问题描述","link":"#一、问题描述","children":[]},{"level":2,"title":"二、原因","slug":"二、原因","link":"#二、原因","children":[]},{"level":2,"title":"三、解决","slug":"三、解决","link":"#三、解决","children":[{"level":3,"title":"3.1 重写HttpServletRequestWrapper","slug":"_3-1-重写httpservletrequestwrapper","link":"#_3-1-重写httpservletrequestwrapper","children":[]},{"level":3,"title":"3.2获取输入流内容","slug":"_3-2获取输入流内容","link":"#_3-2获取输入流内容","children":[]},{"level":3,"title":"3.3过滤器","slug":"_3-3过滤器","link":"#_3-3过滤器","children":[]}]}],"git":{"createdTime":1718952829000,"updatedTime":1718952829000,"contributors":[{"name":"kz","email":"1069624300@QQ.COM","commits":1}]},"readingTime":{"minutes":4.24,"words":1272},"filePathRelative":"bug/request.md","localizedDate":"2022年1月4日","excerpt":"<h1> request请求体丢失</h1>\\n<h2> 一、问题描述</h2>\\n<p>在拦截器中获取流之后request.getInputStream();后续再次获取Required request body is missing 请求体丢失</p>\\n<h2> 二、原因</h2>\\n<p>在HTTP协议中，请求的Body内容是通过输入流（InputStream）传输的。一旦读取了输入流中的数据，就无法再次读取。这是因为HTTP请求是基于流式传输的，一旦读取了流中的数据，数据就会被消耗掉，无法再次获取。<br>具体到Java Servlet中，当调用request.getInputStream()方法时，Servlet容器会从请求中读取输入流的数据，并且将其缓存起来供后续使用。一旦读取了输入流的数据，就无法再次获取同一个输入流，因为输入流的数据已经被读取和消耗掉了。<br>所以，在上述代码中，当拦截器中第一次调用request.getInputStream()获取了输入流后，如果后续代码再次调用request.getInputStream()来获取输入流，就会导致\\"Required request body is missing\\"错误。因为此时输入流中已经没有数据可读取了。<br>解决这个问题的常见方法是通过HttpServletRequestWrapper类来包装请求对象，实现自定义的HttpServletRequest，并在包装类中重写getInputStream()或getReader()方法，以提供对输入流的多次读取支持。这样就可以将输入流的数据保存在一个缓存中，并在每次调用getInputStream()时返回缓存中的数据，从而避免了多次读取输入流导致数据被消耗的问题。<br>总之，HTTP请求的输入流只能读取一次，无法重复获取。如果需要多次读取输入流的数据，可以使用HttpServletRequestWrapper类来进行包装和处理。</p>","autoDesc":true}');export{e as data};