import{_ as t,o as r,c as p,f as n}from"./app-942d725a.js";const a={},e=n('<h1 id="springmvc执行流程" tabindex="-1"><a class="header-anchor" href="#springmvc执行流程" aria-hidden="true">#</a> SpringMvc执行流程</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><ol><li><p>用户发起请求，请求先被 Servlet 拦截转发给 Spring MVC 框架</p></li><li><p>Spring MVC 里面的 DispatcherSerlvet 核心控制器，会接收到请求并转发给HandlerMapping</p></li><li><p>HandlerMapping 负责解析请求，根据请求信息和配置信息找到匹配的 Controller类，不过这里如果有配置拦截器，就会按照顺序执行拦截器里面的 preHandle方法</p></li><li><p>找到匹配的 Controller 以后，把请求参数传递给 Controller 里面的方法</p></li><li><p>Controller 中的方法执行完以后，会返回一个 ModeAndView，这里面会包括视图名称和需要传递给视图的模型数据</p></li><li><p>视图解析器根据名称找到视图，然后把数据模型填充到视图里面再渲染成 Html 内容返回给客户端</p></li></ol></div><h1 id="ioc" tabindex="-1"><a class="header-anchor" href="#ioc" aria-hidden="true">#</a> IOC</h1><p>容器，控制反转，依赖注入</p><p>IOC容器，实际上就是一个MAP,里面存放的是各种对象（xml配置的Bean，@Controlle，@Service，@Component）,在我们项目启动的时候会读取配置文件中的Bean，将Bean对象封装成BeanDefintion对象 ，根据全限定类名使用反射创建对象放入Map中，像注解方式也是通过反射创建对象到Map</p><p>这个时候我们在代码里面使用里面的对象，需要通过DI注入方式</p><p>控制反转：</p><p>假设我们有A,B对象 A对象依赖B ，对象A和B是么有直接联系的，他们都在IOC容器里面，当对象A运行需要B时，IOC会自动创建B对象注入到需要的地方。</p><p>在之后我们是需要手动创建B对象 主动权在A手中，但是现在在IOC手中，这就是控制反转</p><h1 id="aop" tabindex="-1"><a class="header-anchor" href="#aop" aria-hidden="true">#</a> AOP</h1><p>切面</p><p>略</p><h1 id="spring循环依赖" tabindex="-1"><a class="header-anchor" href="#spring循环依赖" aria-hidden="true">#</a> Spring循环依赖</h1><p>A依赖B B依赖A</p><p>在我们使用A对象和B对象时，就会出现循环依赖问题</p><p>spring主要是通过缓存去解决循环依赖</p><p>总共有三级缓存</p><p>一级缓存 主要存储的是 实例化的并前已完成赋值的Bean</p><p>二级缓存 存的是 开辟了内存但属性为赋值的Bean</p><p>其实二级缓存就已经解决了循环依赖问题</p><p>三级缓存 主要是创建了代理Bean的Factory 创建 因为类的代理对象必须是在类的实例对象已生成的基础上去生成的，如果中间存在类的代理对象的循环依赖，是无法先生成类的代理对象，然后放入二级缓存。也就是二级缓存只能解决普通实例对象的循环依赖，如果存在代理对象的循环依赖，是无法解决的。</p><h1 id="spring事物传播方式" tabindex="-1"><a class="header-anchor" href="#spring事物传播方式" aria-hidden="true">#</a> Spring事物传播方式</h1><p>事物主要分为 声明时事物，编程时事物，我们一般来使用声明时事物。</p><p>就是事物之间的嵌套问题：假设A方法调用一个带事物的B方法时候</p><p>传播机制为默认的 required 那么当我们A有事物时候，B和A事务合并成一个事务 ，A无事物的时候，B新建事务</p><p>传播机制为 requires_new ，A方法有事物时候B新建一个事务，和A事务无关，互不影响 A无事物的时候，B新建事务</p><p>传播机制为 nested ，A方法有事物时候 ，B新建一个A的子事务，A异常影响B，B异常不影响A ，A无事物的时候 ，B新建事务</p><p>传播机制为 supports ，A方法有事物时候，B加入到A事务中 A无事物的时候 B无事务</p><p>传播机制为 not_supported ，A方法有事物时候,挂起A事务，B以无事务方式执行 A无事物的时候 B无事务</p><p>传播机制为 mandatory ，A方法有事物时候,B加入到A事务中 A无事物的时候 B抛异常</p><p>传播机制为 never ，A方法有事物时候,B抛异常 A无事物的时候 B无事物</p><table><thead><tr><th><strong>方法B定义的事务类型</strong></th><th><strong>A方法有事务时</strong></th><th><strong>A方法无事务</strong></th></tr></thead><tbody><tr><td>(propagation = Propagation.required) 默认 <strong>瑞块儿的</strong></td><td>B和A事务合并成一个事务</td><td>B新建事务</td></tr><tr><td>(propagation = Propagation.requires_new) <strong>瑞块儿死</strong></td><td>B新建一个事务，和A事务无关，互不影响</td><td>B新建事务</td></tr><tr><td>(propagation = Propagation.nested) <strong>奈斯dei特</strong></td><td>B新建一个A的子事务，A异常影响B，B异常不影响A</td><td>B新建事务</td></tr><tr><td>(propagation = Propagation.supports) <strong>死噗斯</strong></td><td>B加入到A事务中</td><td>B无事务</td></tr><tr><td>(propagation = Propagation. not_supported) <strong>死噗特得</strong></td><td>挂起A事务，B以无事务方式执行</td><td>B无事务</td></tr><tr><td>(propagation = Propagation.mandatory) <strong>man得特瑞</strong></td><td>B加入到A事务中</td><td>B抛异常</td></tr><tr><td>(propagation = Propagation.never) <strong>奶味</strong></td><td>B抛异常</td><td>B无事务</td></tr></tbody></table>',32),o=[e];function d(i,s){return r(),p("div",null,o)}const g=t(a,[["render",d],["__file","spring.html.vue"]]);export{g as default};
