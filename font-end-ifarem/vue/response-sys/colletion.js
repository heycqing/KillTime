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