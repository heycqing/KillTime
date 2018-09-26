## 学习 vue 内部机制的解析


### 1.响应式系统的原理

> 这里主要是使用了js object对象的方法 defineProperty 

**实现了简单对象的响应式变化**

```js
    /*
    这里是 对 js【object】 进行操作，简单对象；
    没有对数组复杂数据进行测试。

*/

// 模拟渲染视图
function cb(){
    console.log('视图更新');
}

// 使用原生js defineProperty 方法编写；
function defineReactive(obj, key, val){
    Object.defineProperty(obj, key, {
        enumerable:true ,  /* 属性可枚举 */
        configurable: true, /* 属性可被修改或删除 */
        get: function reactiveGetter(){
            return val;
        },
        set: function reactiveSetter(newVal){
            if(newVal === val){
                return;
            }
            cb(newVal);
        }
    })
}

// 封装一个方法，可以不断调用 defineReactive 的方法；
function observer (data){
    if(!data || (typeof data !== 'object')){
        return;
    }
   Object.keys(data).forEach((key)=>{
       defineReactive(data,key,data[key]);
   })
} 

// 封装 vue
class vue{
    constructor(options){
        this._data = options.data;
        observer(this._data)
    }
}

// 使用

let o = new vue({
    data:{
        ob:"IM test"
    }
});

o._data.ob = 'adada'
```

[具体代码](/KillTime/font-end-ifarem/vue/response-sys/response.js)

#### 1.1 响应依赖收集追踪

> 简单来说就是，说当现在有多个vue实例时，需要创建多个实例，但是只使用创建好的方法，适合的模式是： 「订阅-发布者」模式，来实现 一对多 , 互补影响 的需求。

##### 要点
- 新建 `「订阅 - 发布者」` 类，用来填入修改的数据和发布数据；
- 新建 ` 检查者视图 ` , 取代之前简单的 `cb 函数`, 来准确分配哪个视图应该修改。
- 在 ` 响应系统里 ` 的 ` get ` 方法里放置 **填入订阅方法** ，然后再 ` set ` 方法里放置 **发布消息方法** ；

```js
/*
    这里是 对 js【object】 进行操作，简单对象；
    没有对数组复杂数据进行测试。

*/
// 创建 统一的中转站，订阅-发布者 ，Dep
class Dep{
    constructor(){
        this.subs = [];
    }    
    // 添加到中转站缓存s
    addSub(sub){
        this.subs.push(sub)
    }

    notify(){
        this.subs.forEach((sub)=>{
            sub.update();
        })
    }
}

// 模拟渲染视图,监视者
class Watcher{
    constructor(){
        Dep.target = this;
    }
    update(){
        console.log('视图更新')
    }
}




// 使用原生js defineProperty 方法编写；
function defineReactive(obj, key, val){
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable:true ,  /* 属性可枚举 */
        configurable: true, /* 属性可被修改或删除 */
        get: function reactiveGetter(){
            dep.addSub(Dep.target)
            return val;
        },
        set: function reactiveSetter(newVal){
            if(newVal === val){
                return;
            }
            // cb(newVal);
            dep.notify();
        }
    })
}

// 封装一个方法，可以不断调用 defineReactive 的方法；
function observer (data){
    if(!data || (typeof data !== 'object')){
        return;
    }
   Object.keys(data).forEach((key)=>{
       defineReactive(data,key,data[key]);
   })
} 

// 封装 vue
class vue{
    constructor(options){
        this._data = options.data;
        observer(this._data);
        // 新增watcher
        new Watcher();
        console.log('render~',this._data.ob);
    }
}

// 使用

let o = new vue({
    data:{
        ob:"IM test"
    }
});

o._data.ob = 'adada'

// 新增
Dep.target = null;

```

[具体代码](/KillTime/font-end-ifarem/vue/response-sys/colletion.js)