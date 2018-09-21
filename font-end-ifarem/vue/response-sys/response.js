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