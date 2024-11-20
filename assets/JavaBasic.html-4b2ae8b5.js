import{_ as a,o as r,c as e,f as i}from"./app-942d725a.js";const n={},t=i('<h1 id="java基础" tabindex="-1"><a class="header-anchor" href="#java基础" aria-hidden="true">#</a> Java基础</h1><h1 id="一、final、finally、finalize的区别" tabindex="-1"><a class="header-anchor" href="#一、final、finally、finalize的区别" aria-hidden="true">#</a> 一、final、finally、finalize的区别？</h1><p><strong>final 用于修饰变量、方法和类</strong>。</p><ul><li>final 变量：被修饰的变量不可变，不可变分为引用不可变和对象不可变，final 指的是引用不可变，final 修饰的变量必须初始化，通常称被修饰的变量为常量。</li><li>final 方法：被修饰的方法不允许任何子类重写，子类可以使用该方法。</li><li>final 类：被修饰的类不能被继承，所有方法不能被重写。</li><li>final修饰的形参：只能背赋值一次</li></ul><p><strong>finally 作为异常处理的一部分</strong>，它只能在 try/catch 语句中，并且附带一个语句块表示这段语句最终一定被执行（无论是否抛出异常），经常被用在需要释放资源的情况下，System.exit (0) 可以阻断 finally 执行。<br><strong>finalize 是在 java.lang.Object 里定义的方法</strong>，也就是说每一个对象都有这么个方法，这个方法在 gc 启动，该对象被回收的时候被调用。<br>一个对象的 finalize 方法只会被调用一次，finalize 被调用不一定会立即回收该对象，所以有可能调用 finalize 后，该对象又不需要被回收了，然后到了真正要被回收的时候，因为前面调用过一次，所以不会再次调用 finalize 了，进而产生问题，因此不推荐使用 finalize 方法</p><h1 id="二、如何理解面向对象的三大特征" tabindex="-1"><a class="header-anchor" href="#二、如何理解面向对象的三大特征" aria-hidden="true">#</a> 二、如何理解面向对象的三大特征？</h1><p><strong>封装</strong><br><strong>定义</strong>:就是把事物封装成类,将类的某些信息隐藏在类内部,不允许外部程序直接访问,而是通过该类提供的方法来实现对隐藏信息的操作和访问。<br><strong>作用</strong>:尽可能地隐藏对象的内部实现细节、控制用户对类的修改和访问权限（体现：private属性） 提高代码的可维护性<br><strong>继承</strong><br>定义:继承是从已有的类中派生出新的类，新的类能吸收已有类的数据属性和行为，并能扩展新的能力 俗称子类继承父类<br>注意:Java只支持单继承 ,一个子类只能继承一个父类,不能继承多个父类 但是可以多重继承<br><strong>多态</strong><br>是面向对象的三大特性之一，多态建立在封装和继承之上<br>它是指在父类中定义的属性和方法被子类继承之后，可以具有不同的数据类型或表现出不同的行为，这使得同一个属性或方法在父类及其各个子类中具有不同的含义</p><h2 id="如何理解先向上转型在向下转型" tabindex="-1"><a class="header-anchor" href="#如何理解先向上转型在向下转型" aria-hidden="true">#</a> 如何理解先向上转型在向下转型</h2><p>多态就是父类的引用指向子类的实例</p><h1 id="三、值传递和引用传递" tabindex="-1"><a class="header-anchor" href="#三、值传递和引用传递" aria-hidden="true">#</a> 三、值传递和引用传递</h1><p>值传递：指的是在方法调用时，传递的参数是按值的拷贝传递，传递的是值的拷贝，也就是说传递后就互不相关了。<br>引用传递：指的是在方法调用时，传递的参数是按引用进行传递，其实传递的是引用的地址，也就是变量所对应的内存空间的地址。传递的是值的引用，也就是说传递前和传递后都指向同一个引用（也就是同一个内存空间）。<br>基本类型作为参数被传递时肯定是值传递；引用类型作为参数被传递时也是值传递，只不过“值”为对应的引用</p><h1 id="四、为什么重写-equals-方法必须重写-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#四、为什么重写-equals-方法必须重写-hashcode-方法" aria-hidden="true">#</a> 四、为什么重写 equals 方法必须重写 hashcode 方法</h1><p>判断的时候先根据hashcode进行的判断，相同的情况下再根据equals()方法进行判断。如果只重写了equals方法，而不重写hashcode的方法，会造成hashcode的值不同，而equals()方法判断出来的结果为true。<br>在Java中的一些容器中，不允许有两个完全相同的对象，插入的时候，如果判断相同则会进行覆盖。这时候如果只重写了equals（）的方法，而不重写hashcode的方法，Object中hashcode是根据对象的存储地址转换而形成的一个哈希值。这时候就有可能因为没有重写hashcode方法，造成相同的对象散列到不同的位置而造成对象的不能覆盖的问题。</p><h1 id="五、string-stringbuffer-stringbuilder-的区别是什么" tabindex="-1"><a class="header-anchor" href="#五、string-stringbuffer-stringbuilder-的区别是什么" aria-hidden="true">#</a> 五、String,StringBuffer, StringBuilder 的区别是什么</h1><p>StringBuilder与StringBuffer都继承自AbstractStringBuilder类，在AbstractStringBuilder中也是使用字符数组保存字符串，这两种对象都是可变的<br>String中的对象是不可变的，也就可以理解为常量，显然线程安全。<br>StringBuilder是非线程安全的。<br>StringBuffer对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的</p>',15),s=[t];function l(h,d){return r(),e("div",null,s)}const f=a(n,[["render",l],["__file","JavaBasic.html.vue"]]);export{f as default};
