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
- 不能进行 `AJAX`;
- 不能获取 `cookie` 、`LocalStorage` 和 `IndexDB`；

### 🛢 Q: 如何突破同源策略进行跨域？
同样问题from QQ音乐：尽可能多举例说出跨域的方法？<br>
A: 
- jsonp 跨域
- 跨域资源共享（`CORS`），简单来说就是后端设置控制头:<br>
```php
    Access-Control-Allow-Origin: xxx.com
```
- window.domain + iframe 

















##### 参考资料
- [浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
