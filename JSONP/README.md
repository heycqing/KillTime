## 🐝 jsonp 一些知识点
json -> `json with padding`

### 🛢 Q: jsonp原理是什么？
####   为什么jsonp能实现跨域？
A：原理：由于 `<script>` 标签的 `src` 属性可以跨域引入外部不同的资源。

### 🛢 Q: jsonp的优缺点有哪些？
A:
- 优点：
1. `<script>` 属于HTML代码标签，不存在兼容性问题；

- 缺点：<br>
1. 由于是通过 `URL` 获取数据的，所以请求方法只能是 `GET` 方法；<br>
2. 由于通过外链注入JS代码会被程序认为是 <span style='color:red'>恶意代码</span>；
