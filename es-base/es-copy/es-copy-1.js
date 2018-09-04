var copyObj = {
    x:1,
    y:1
}
var newObj =  JSON.parse(JSON.stringify(copyObj))

console.log(newObj.x)

newObj.x = 10 ;

console.log(newObj.x)
console.log(copyObj.x)
