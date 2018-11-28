var net = require('net')

var server = net.createServer(function(e){
    e.on('data',function(data){
        e.write('halo')
    })
    e.on('end',function(){
        console.log('连接断开')
    })
    e.write('welcome!')

})
server.listen(8124,function(){
    console.log('服务建立')
})