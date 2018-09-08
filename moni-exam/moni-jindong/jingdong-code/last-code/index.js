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
    var total_price  = 0;
    var tbody_ = document.getElementsByTagName('tbody')[0];
    var tfoot_ = document.getElementsByTagName('tfoot')[0]; 

    console.log('1:total     '+ total_price)

    for(var i in items){
        var tr_ = document.createElement('tr');  

        // 转换 Number 数据类型，保留2位小数  
        var fix2 =  items[i].price;
        var num_price = new Number(fix2);
        html = '<tr><td>'+items[i].name+'</td><td>'+num_price.toFixed(2)+'</td><td><a href="javascript:void(0);">删除</a></td></tr>';

        tr_.innerHTML = html;
        tbody_.appendChild(tr_);
    }
    for(var i  in tbody_.rows){
        
        var temp = tbody_.rows[i].cells[1].innerText; 
    
        temp = Number(temp);
        total_price +=  temp;
        console.log('1:\t'+total_price)
      
        
    }
    console.log('2:total     '+ total_price)
    tfoot_.innerHTML = '<tr><th>总计</th><td colspan="2">'+total_price+'('+tbody_.childElementCount+'件商品)</td></tr>';
    
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