## ⛩ 冒泡事件

### 🛢 Q: 什么是冒泡事件？
> A: 
- DOM的事件机制是分为：**事件捕获** 和 **事件冒泡** <br>
    + **事件捕获** 是自上而下去追溯到发生事件的元素节点；
    + **事件冒泡** 是从发生事件的元素节点自下而上上升到文档根节点；

### 🛢 Q: 什么是事件代理(事件委托)？
> A:
- 把一个元素上该绑定的事件，委托给另外一个元素;
- 一般是委托给父元素或者上层元素;
> 原理：
- 是根据事件运行机制来，即事件捕获和事件冒泡

### 事件冒泡的运行过程已经写好在bubble.html页面
- 点击跳转[bubble.html](./bubble.html);

### 🛢 Q: 如何通过事件冒泡来实现一个需求?
> A: 



### 🛢 Q: 如何阻止事件冒泡？
> A:
- 阻止冒泡事件：
    + 可以使用 `e.stopPropagation()`
    + 兼容IE 使用 `e.cancelBubble = true`
    ```js
        <!-- 源于bubble.html的函数，可以参照 -->
          div2.onclick = function(event){
            var event = event || winodw.event;
            if(event.stopPropagation){
                event.stopPropagation()
            }
            if(evevnt.cancelBubble){
                event.cancelBubble = true;
            }
            div2.style.backgroundColor = '#329648'          
        }

        <!-- 简易 -->
        window.event?window.evevnt.cancelBubble=true : event.stopPropagetion();
    ```
- 阻止默认行为：
    + 可以使用 `e.preventDefault()`;
    + 兼容IE使用 `event.returnValue = false`
    ```js
        div2.onclick = function(e){
            var e = e || window.event;
            if(e.preventDefault){
                e.preventDefault();
            }
            if(e.returnValue){
                e.returnValue = false;
            }
            <!-- 如果只用 return false 只会阻止默认行为，不会停止冒泡 -->
            return false;
            div2.style.backgroundColor = '#329648'                      
        }
    ```







##### 参考资料
- [JavaScript 事件委托详解](https://zhuanlan.zhihu.com/p/26536815)