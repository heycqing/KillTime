## 📚 es基础

### js的数据类型？
> 一共定义了7种数据类型;
- `NULL`
- `undefined`
- `number`
- `string`
- `boolean`
- `Symbol`
- `object`

### js数据类型中哪些传值和传址？
- 传值 变量是放在 `栈` 中；
    + `null`
    + `undefined`
    + `string`
    + `boolean`
    + `number`
- 传址 变量是放在 `堆` 中； 
    + `object` ( `function` , `Array` , `RegExp` , `Date`)


> 堆和栈的区别？(拼多多笔试题)

- A:
    + `堆` , 队列优先,先进先出,内存由操作系统自动分配释放 ，变量实际保存的是一个指针，这个指针指向另一个位置
    + `栈` ，先进后出，动态分配的空间 一般由程序员分配释放，js里面传值的数据类型是简单数据段，数据大小确定，内存空间大小可以分配

### 传址和传值 代码判断
- 点击这里[传值和传址](./es-base1.js)
```js
    var obj = {
        a: 1,
        b: [1,2,3]
    }
    var a = obj.a
    var b = obj.b
    a = 2
    b.push(4)
    console.log(obj, a, b) // {a:1,b:[1,2,3,4]} , 2 , [1,2,3,4]
```
> 我总结了一句话 :  
> 最后碰上传值的永远传值，碰上传址的永远在传值;

### 如何判断js数据类型？
> 4种判断方法
- `typeof 数据类型` 
    + `typeof xxx`得到的**结果**有以下几种类型：`undefined ``boolean`` number`` string ``object`` function``symbol `.
        + `typeof null`结果是`object `，实际这是typeof的一个bug，`null`是原始值，非引用类型
        + `typeof [1, 2]`结果是`object`，结果中没有array这一项，引用类型除了`function`其他的全部都是`object`
        + `typeof Symbol()` 用`typeof`获取`symbol类型`的值得到的是`symbol`，这是 ES6 新增的知识点...
- `instanceof` : `A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false`
    + 个人认为是可以作为 `typeof xxx` 之后无法判断 `址引用` 数据类型的进一步判断
    + 例如
    ```js
    [1,2] instanceof Array ;   <!-- true -->
    {} instanceof Object;    <!-- true -->
    new Date() instanceof Date;   <!-- true -->
    ```
    [点击es-base2.js](./es-base2.js)
- `constructor`
    + 表达式： `[].constructor === array` (返回 `true`s 或者 `false` )
    + 是基于原型属性的 `prototype` 原理 
    
    > 所有的函数，都有一个prototype属性，属性值也是一个普通的对象
    
    + 注意： `null` `undefined` 是不会返回值的，因为他们表示 `无` ，没有属性;

- `tostring` 用法
    + `toString()` 是 `Object` 的原型方法，调用该方法，默认返回当前对象的` [[Class]] `。这是一个内部属性，其格式为 `[object Xxx] `;
    + 表达式： `Object.prototype.toString.call('') ;   // [object String]`


###  js闭包运用
> 题目：现在有个 HTML 片段，要求编写代码，点击编号为几的链接就alert弹出其编号
- 这里需要使用闭包;
**这是 `html` 代码**
```html
  <ul>
        <li>no1</li>
        <li>no2</li>
        <li>no3</li>
        <li>no4</li>
    </ul>
```
**这是 `js` 代码**

```js
var li_ = document.getElementsByTagName('li')

for(var i = 0 ; i< li_.length; i++){
    li_[i].addEventListener('click',function(i){
       return function(){
            alert(i+0);
            
        }
    }(i),true)
}
```
- 具体代码点击[html代码](./es-update/es-bibao.html)
- 具体代码点击[js代码](./es-update/es-bibao.js)

> 什么是闭包？
- 闭包就是在一个函数里面调用另外一个函数，在被包含的函数形成一个作用域,可以调用包含闭包的函数的局部变量
- 两个例子
    + [code1-bibao](./es-update/code1-bibao.js)
    + [code2-bibao](./es-update/code2-bibao.js)




### 偏门的js知识点
> 如何让js代码异步加载？(QQ音乐)
- A:
    + 使用动态创建 `script` 标签；
    + 使用 `script` 标签的属性值： `async="async" `,(无序执行，异步);
    + 使用 `script` 标签的属性值： `defer="defer" `,(按照顺序执行，异步);
    + 使用 `eval()` 操作 `ajax` 返回的响应值： `eval(xmlhttp.responseText)`;
    
> `eval()`用来干什么的？（QQ音乐）
- A:
    + 可计算某个字符串，并执行其中的的 `JavaScript ` 代码。
    + `eval()` 可以让写在函数里的代码运行在全局作用域中。

#### 使用纯js实现一段HTML代码？（拼多多）



##### 参考链接
- [判断JS数据类型的四种方法](https://www.cnblogs.com/onepixel/p/5126046.html)
- [不得不说的JavaScript异步加载](https://www.cnblogs.com/zichi/p/4597766.html)
- [异步加载JS脚本](https://www.jianshu.com/p/bf8b5bf5fc90)
