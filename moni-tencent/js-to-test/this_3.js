var point = {
    x:1,
    y:1,
    moveIt: function(x,y){
        var that = this;
        function moveX(x){
            that.x = that.x + x;
        }
        function moveY(y){
            that.y = that.y + y;
        }
        moveX(x);
        moveY(y);
    }
}
point.moveIt(1,1)
console.log(point.x)
console.log(point.y)
