const e=JSON.parse('{"key":"v-f9abf12c","path":"/java/Cloud/ElasticSearch.html","title":"ElasticSearch","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-04T00:00:00.000Z","lastUpdated":true,"contributors":true,"description":"ElasticSearch 一、ElasticSearch是什么 分布式搜索和分析引擎，主要实现近乎实时的搜索和分析。可以实现海量数据的存储（⽀持PB级别的数 据），可以实现快速搜索（倒排索引）还可以实现数据分析处理. 实现海量数据下快速搜索 绝对不使⽤模糊查询，因为性能太低。 解决海量数据的快速搜索，就需要使⽤全⽂检索技术，选择ElasticSearch 市⾯上有全⽂检索技术：Lucene、Solr(底层：Lucene)、ElasticSearch（底层：Lucene） ⽬前市⾯上：ElasticSearch ELK：ElasticSearch（存储、搜索）+Logstash（采集）+Kibana（可视化） ⽇志平台 主要存储的查询的数据，⽀持海量数据存储和查询，⼀定要带条件 主流：ElasticSearch","head":[["meta",{"property":"og:url","content":"https://k-flower.gitee.io/kblogs/java/Cloud/ElasticSearch.html"}],["meta",{"property":"og:site_name","content":"Flowers"}],["meta",{"property":"og:title","content":"ElasticSearch"}],["meta",{"property":"og:description","content":"ElasticSearch 一、ElasticSearch是什么 分布式搜索和分析引擎，主要实现近乎实时的搜索和分析。可以实现海量数据的存储（⽀持PB级别的数 据），可以实现快速搜索（倒排索引）还可以实现数据分析处理. 实现海量数据下快速搜索 绝对不使⽤模糊查询，因为性能太低。 解决海量数据的快速搜索，就需要使⽤全⽂检索技术，选择ElasticSearch 市⾯上有全⽂检索技术：Lucene、Solr(底层：Lucene)、ElasticSearch（底层：Lucene） ⽬前市⾯上：ElasticSearch ELK：ElasticSearch（存储、搜索）+Logstash（采集）+Kibana（可视化） ⽇志平台 主要存储的查询的数据，⽀持海量数据存储和查询，⼀定要带条件 主流：ElasticSearch"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-14T06:05:47.000Z"}],["meta",{"property":"article:author","content":"Kou"}],["meta",{"property":"article:published_time","content":"2022-01-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-14T06:05:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ElasticSearch\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-14T06:05:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kou\\"}]}"]]},"headers":[{"level":2,"title":"一、ElasticSearch是什么","slug":"一、elasticsearch是什么","link":"#一、elasticsearch是什么","children":[{"level":3,"title":"1.1Elasticsearch的特性","slug":"_1-1elasticsearch的特性","link":"#_1-1elasticsearch的特性","children":[]},{"level":3,"title":"1.2 基本概念","slug":"_1-2-基本概念","link":"#_1-2-基本概念","children":[]},{"level":3,"title":"1.3 倒排索引","slug":"_1-3-倒排索引","link":"#_1-3-倒排索引","children":[]},{"level":3,"title":"1.4 ES结构","slug":"_1-4-es结构","link":"#_1-4-es结构","children":[]}]},{"level":2,"title":"二、搭建ES Kibana","slug":"二、搭建es-kibana","link":"#二、搭建es-kibana","children":[{"level":3,"title":"2.1 安装docker-compose","slug":"_2-1-安装docker-compose","link":"#_2-1-安装docker-compose","children":[]},{"level":3,"title":"2.2 拉起镜像","slug":"_2-2-拉起镜像","link":"#_2-2-拉起镜像","children":[]},{"level":3,"title":"2.3 IK分词器","slug":"_2-3-ik分词器","link":"#_2-3-ik分词器","children":[]},{"level":3,"title":"2.4 设置密码","slug":"_2-4-设置密码","link":"#_2-4-设置密码","children":[]}]},{"level":2,"title":"三、ES操作","slug":"三、es操作","link":"#三、es操作","children":[{"level":3,"title":"3.1 Es Field可以指定类型","slug":"_3-1-es-field可以指定类型","link":"#_3-1-es-field可以指定类型","children":[]},{"level":3,"title":"3.2 Kibana快捷键操作","slug":"_3-2-kibana快捷键操作","link":"#_3-2-kibana快捷键操作","children":[]},{"level":3,"title":"3.3 索引操作","slug":"_3-3-索引操作","link":"#_3-3-索引操作","children":[]},{"level":3,"title":"3.4 文档操作","slug":"_3-4-文档操作","link":"#_3-4-文档操作","children":[]},{"level":3,"title":"3.5 kibana 可视化界面中可以看到 创建的索引信息","slug":"_3-5-kibana-可视化界面中可以看到-创建的索引信息","link":"#_3-5-kibana-可视化界面中可以看到-创建的索引信息","children":[]}]},{"level":2,"title":"四、Java操作ES Demo *","slug":"四、java操作es-demo","link":"#四、java操作es-demo","children":[]},{"level":2,"title":"五、ES查询 *","slug":"五、es查询","link":"#五、es查询","children":[{"level":3,"title":"5.1 term查询","slug":"_5-1-term查询","link":"#_5-1-term查询","children":[]},{"level":3,"title":"5.2 terms查询","slug":"_5-2-terms查询","link":"#_5-2-terms查询","children":[]},{"level":3,"title":"5.3 match查询","slug":"_5-3-match查询","link":"#_5-3-match查询","children":[]},{"level":3,"title":"5.4 multi_match查询","slug":"_5-4-multi-match查询","link":"#_5-4-multi-match查询","children":[]},{"level":3,"title":"5.5 ids查询","slug":"_5-5-ids查询","link":"#_5-5-ids查询","children":[]},{"level":3,"title":"5.6 prefix查询","slug":"_5-6-prefix查询","link":"#_5-6-prefix查询","children":[]},{"level":3,"title":"5.7 fuzzy查询","slug":"_5-7-fuzzy查询","link":"#_5-7-fuzzy查询","children":[]},{"level":3,"title":"5.8 wildcard查询","slug":"_5-8-wildcard查询","link":"#_5-8-wildcard查询","children":[]},{"level":3,"title":"5.9 range查询","slug":"_5-9-range查询","link":"#_5-9-range查询","children":[]},{"level":3,"title":"5.10 regexp查询","slug":"_5-10-regexp查询","link":"#_5-10-regexp查询","children":[]},{"level":3,"title":"5.11 深分页Scroll","slug":"_5-11-深分页scroll","link":"#_5-11-深分页scroll","children":[]},{"level":3,"title":"5.12 delete-by-query","slug":"_5-12-delete-by-query","link":"#_5-12-delete-by-query","children":[]},{"level":3,"title":"5.13 bool查询","slug":"_5-13-bool查询","link":"#_5-13-bool查询","children":[]},{"level":3,"title":"5.14 filter查询","slug":"_5-14-filter查询","link":"#_5-14-filter查询","children":[]},{"level":3,"title":"5.15 高亮查询","slug":"_5-15-高亮查询","link":"#_5-15-高亮查询","children":[]},{"level":3,"title":"5.16 聚合查询","slug":"_5-16-聚合查询","link":"#_5-16-聚合查询","children":[]},{"level":3,"title":"5.17 地图经纬度搜索","slug":"_5-17-地图经纬度搜索","link":"#_5-17-地图经纬度搜索","children":[]}]}],"git":{"createdTime":1718345147000,"updatedTime":1718345147000,"contributors":[{"name":"kz","email":"1069624300@QQ.COM","commits":1}]},"readingTime":{"minutes":18.26,"words":5477},"filePathRelative":"java/Cloud/ElasticSearch.md","localizedDate":"2022年1月4日","excerpt":"<h1> ElasticSearch</h1>\\n<h2> 一、ElasticSearch是什么</h2>\\n<p>分布式搜索和分析引擎，主要实现近乎实时的搜索和分析。可以实现海量数据的存储（⽀持PB级别的数<br>\\n据），可以实现快速搜索（倒排索引）还可以实现数据分析处理.</p>\\n<p><strong>实现海量数据下快速搜索</strong></p>\\n<p>绝对不使⽤模糊查询，因为性能太低。<br>\\n解决海量数据的快速搜索，就需要使⽤全⽂检索技术，选择ElasticSearch<br>\\n市⾯上有全⽂检索技术：Lucene、Solr(底层：Lucene)、ElasticSearch（底层：Lucene）<br>\\n⽬前市⾯上：ElasticSearch<br>\\nELK：ElasticSearch（存储、搜索）+Logstash（采集）+Kibana（可视化） ⽇志平台<br>\\n<strong>主要存储的查询的数据，⽀持海量数据存储和查询，⼀定要带条件</strong><br>\\n主流：ElasticSearch</p>","autoDesc":true}');export{e as data};