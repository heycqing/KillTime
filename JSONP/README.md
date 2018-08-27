## 🐝 jsonp 一些知识点
面了腾讯的QQ音乐回想起来的一些和 `jsonp` 相关的题目<br> 

json -> `json with padding`

### 🛢 Q: jsonp原理是什么？
####   为什么jsonp能实现跨域？
A：原理：由于 `<script>` 标签的 `src` 属性可以跨域引入外部不同的资源。

### 🛢 Q: jsonp的优缺点有哪些？
A:
- 优点：
1. `<script>` 属于HTML代码标签，不存在兼容性问题；可以兼容老浏览器，绕过了 `AJAX` ，也就是说不需要为了兼容ie和其他浏览器，去写2种ajax请求方式。
2. 方便调用者，多个页面可以共用同一个 `jsonp`；

- 缺点：
1. 由于是通过 `URL` 获取数据的，所以请求方法只能是 `GET` 方法；<br>
2. 由于通过外链注入JS代码会被程序认为是 恶意代码；
3. 如果 `jsonp` 请求失败，不会返回任何 `http` 状态码；
4. 因为 `jsonp` 是纯服务的数据，所以在安全性上会有隐患，容易被截取修改 `jsonp` 里面的数据；

##### 🔋 关于第4点的解决方法
可以让后台直接设置允许特定域的请求 <br>
设置：`Access-Contor-Allow-Origin: domian.com`

### jsonp格式和json有什么不同？
`json`
- 主要是以 `[]` ,把 `key:"value"` 包括起来；
- 又以 `{}` , 把 `[]` 这些集合集合起来；

```js
    // []例子；
    var somebody =[
        name:"xiaoming"
    ]

    // {}例子
    var all ={
        [
            name:"xiaoming"
        ]，
        [
            name:"xiaohong"
        ]
    }

```

`jsonp`
- 主要是被 `callback` 函数包含起来的；

```js
    somebody({
        name:"小明"
    })
```

#### 🖇 跨域其他知识点
点击这里[跨域](./kuayu.md)

##### 参考资料
[json-jsonp-jquery](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html)
