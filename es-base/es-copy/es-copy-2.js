var copyObj = {
    x:1,
    y:1
}
var newObj = Object.assign({},copyObj)

console.log(newObj.x)
newObj.x = 10;
console.log(newObj.x)
console.log(copyObj.x)
