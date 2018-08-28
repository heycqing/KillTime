## 跨域

### 🛢 Q: 跨域是什么？
A: 是不同域名地址之间互相调用其他域名地址上的资源的行为；

### 🛢 Q: 同源策略是什么？
A: 
1. 同源策略是浏览器的安全保障，和跨域相对，同源策略限制了域名获取其他域名地址上的资源；
2. 同源策略的规定:
    + 协议相同；
        + 一般是`http`版本( `http 1.0` `http 2.0`)；
        + 或者是`ftp` `http`等等之间的比较；
    + 域名相同；
        + 看看是几级域名；
    + 端口相同；
        + 一般默认是 `80` 端口；
    + 例子
    ```
    <!-- 协议不同 -->
    http://www.b.com
    https://www.b.com 

    <!-- 域名不同 -->
    http://www.a.com
    http://www.b.com

    <!-- 端口不同 -->
    http://www.a.com
    http://www.a.com:81
   
    ```

### 🛢 Q: 同源策略限制了什么？
A: 
- 不能获取 `DOM`;
- 不能发送 `AJAX` 请求;
- 不能获取 `cookie` 、`LocalStorage` 和 `IndexDB`；

### 🛢 Q: 如何突破同源策略进行跨域？
同样问题from QQ音乐：尽可能多举例说出跨域的方法？<br>
A: 
- `jsonp 跨域`
- 跨域资源共享（`CORS`），简单来说就是后端设置控制头:<br>
```php
    Access-Control-Allow-Origin: xxx.com
```
- `webSocket` 原理：浏览器发出该协议的请求，服务器请求域名是否在白名单内，如果是就允许跨域通信;
- `window.domain + iframe` 在同源的情况下，才能使用;
- `window.name` 无论是否同源，只要在同一个窗口里，前一个网页设置了这个属性，后一个网页可以读取它;
- `window.postMessage` HTMl5新出的跨文档API,允许跨窗口通信，无论是同源;
- `window.location.hash` 片段标识符，`URL`后的 `#`的值修改，页面不会刷新，可以把信息写在 `#` 后传递;
- 使用ngnix来做反向代理，原理是：浏览器请求同源服务器，后续请求操作再请求外部服务;















##### 参考资料
- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
