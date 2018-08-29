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






##### 参考链接
- [判断JS数据类型的四种方法](https://www.cnblogs.com/onepixel/p/5126046.html)