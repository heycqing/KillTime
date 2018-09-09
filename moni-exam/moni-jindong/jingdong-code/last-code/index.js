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

    for(var i in items){
        var tr_ = document.createElement('tr');  
        // 转换 Number 数据类型，保留2位小数  
        var fix2 =  items[i].price;
        var num_price = new Number(fix2);
        html = '<tr><td>'+items[i].name+'</td><td>'+num_price.toFixed(2)+'</td><td><a href="javascript:void(0);">删除</a></td></tr>';

        tr_.innerHTML = html;
        tbody_.appendChild(tr_);
    }
    for(var i = 0 ;  i < tbody_.children.length ; i++){
        var temp = tbody_.children[i].childNodes[1].textContent; 
        temp = Number(temp);
        total_price +=  temp;
    }
    // 去除 空节点
    for(var i = 0 ; i < tbody_.childNodes.length;i++){
        if(tbody_.childNodes[i].nodeName === '#text'){
            tbody_.removeChild(tbody_.childNodes[i]);
        }
    }
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
    add(a);
    bind();
}

function bind() {
    var delete_ = document.getElementsByTagName('tbody')[0];
    var tfoot_ = document.getElementsByTagName('tfoot')[0]; 

    var total_count = delete_.childElementCount;
    for(var i =0 ; i <  delete_.children.length ; i++){
        
        delete_.children[i].childNodes[2].addEventListener('click',function(i){
            return function(){
           

                // var delete_price = delete_.childNodes[i].children[1].innerText;
                // delete_ = Number(delete_price);
                // console.log('减去的价格：'+delete_price)


                // delete_.deleteRow(i);
                delete_.removeChild(delete_.childNodes[i])
            
                total_count --;
                tfoot_.innerHTML = '<tr><th>总计</th><td colspan="2">'+00+'('+total_count+'件商品)</td></tr>';

            }
        }(i))
    }
  
}