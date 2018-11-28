var net = require('net')

var client = net.connect({
    port: 8124
},function(e){
    console.log('客户端连接');
    client.write('我是客户端，连接上服务端啦！')
})
client.on('data' ,function(data){
    console.log('接受到服务端给的信息:'+ data.toString());
})
client.on('timeout',function(){
    console.log('当前连接已经被闲置！')
})
client.on('end',function(){
    console.log('连接关闭！')
})
client.on('error',function(error){
    console.log('没有监控到服务端\n'+error)
})