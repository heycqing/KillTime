/** 使用字符串形式的函数:
    1. 获取父元素节点；
    2. 创造新的 tr 节点；
    3. 把字符串放进 tr 节点里面；
    4. 把 tr 节点放进 tbody_的 appendChild() 里面；
    5. 循环遍历上诉操作 
    比较推荐这种；
                    **/

// 要求：同步更新数据，无论增加还是减少都要同步更新数据
//      保留2位小数点，里面还有精度计算。
function add(items){
    var html = '';
    var tbody_ = document.getElementsByTagName('tbody')[0];
    var tfoot_ = document.getElementsByTagName('tfoot')[0]; 
    for(var i in items){
        var tr_ = document.createElement('tr');  

        // 转换 Number 数据类型，保留2位小数  
        var fix2 =  items[i].price;
        var num_price = new Number(fix2)   

        html = '<tr><td>'+items[i].name+'</td><td>'+num_price.toFixed(2)+'</td><td><a href="javascript:void(0);">删除</a></td></tr>';

        tr_.innerHTML = html;
        tbody_.appendChild(tr_);
    }
    
    tfoot_.innerHTML = '<tr><th>总计</th><td colspan="2">'+total_(tbody_)+'('+tbody_.childElementCount+'件商品)</td></tr>';
    
}

function total_(ele){
    var total = '';
    for(var i  in ele.childdren){
        // console.log(tbody_.rows[i].childNodes[1].textContent);
        total += ele.childdren[i].childdren[1].textContent; 
    }
    console.log('total:'+total)
    return total;
}


var a =[{
    name:'we',
    price:'123.123'
},{
    name:'we',
    price:'123.444'
},{
    name:'we',
    price:'123.55612'
}]
window.onload=function(){
    add(a)

}

function bind() {
    var delete_ = document.getElementsByTagName('tbody');
    delete_.addEventlisten('click',function(){
        return function(){
            
        }
    }(i))
}