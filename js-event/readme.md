## js构建事件系统

> 事件系统是当今组件化开发中很重要的一部分，而且笔试和面试中，我就单单遇见了2次；

**大概功能**
- `on` 和 `once` 是注册事件，注册一个回调函数；
    + `on` 是可以多次触发；
    + `once` 只能是触发一次；
- `emit` 或者 `fire` 来触发一个事件；
- `off` 是移除事件；


### 当只有 on emit off 的时候：

> 思路

**使用object来存储一组对应key-value**

```js
    {
        ADD_ENTITY: [fn1, fn2, fn3],
        REMOVE_ENTITY: [fn4],
        UPDATE_ENTITY: [fn5, fn6]
    }
```

> 具体代码：

```js
    class EventEmitter {
        constructor() {
        this._events = {};
        }
        on(event, callback) {
        let callbacks = this._events[event] || [];
        callbacks.push(callback);
        this._events[event] = callbacks;
        }
        off(event) {
        delete this._events[event]
        }
        emit(event) {
        let callbacks = this._events[event];
        if (!callbacks || callbacks.length === 0) {
            throw new Error('You should register listener for event ' + event);
        }
        
        let args = [].slice.call(arguments, 1);
        callbacks.forEach(fn => fn.apply(this, args));
        }
    }

```


### on emit off once 都有的时候

> 思路

```js
    //只要给once方法加上一个 标记 ；
    {
        ADD_ENTITY: [
            { callback: fn1, once: false },
            { callback: fn2, once: true }
        ],
        REMOVE_ENTITY: [
            { callback: fn3, once: true }
        ]
    }

```




##### 参考链接
- [用 JavaScript 构建事件系统](https://scarletsky.github.io/2017/01/30/build-your-own-event-system-in-javascript/)
- [DOM事件解惑](http://coderlt.coding.me/2016/11/22/js-event/)