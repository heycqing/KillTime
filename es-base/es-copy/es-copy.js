
var copyObj = {
    x:1,
    y:1,
    funcA: function(x){
        this.x = this.x + x
    }
} 

function copyTo(copyobj){
    var newObj = {};
    for(var i in copyobj){
        newObj[i] = copyobj[i]
    }
    return newObj;
}
var Obj = copyTo(copyObj)

console.log(Obj.x)
Obj.x = 10;
console.log(Obj.x)
console.log(copyObj.x)
