var point = {
    x:1,
    y:1,
    toIt:function(x,y){
        this.x = this.x + x;
        this.y = this.y + y;
    }
}
point.toIt(1,1)
console.log(point.x); // 2
console.log(point.y); // 2