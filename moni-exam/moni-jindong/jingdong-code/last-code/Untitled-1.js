
function flatten(input){
    var obj = {};
    for(var i in input){
        if(!(input[i] instanceof null || input[i] instanceof undefined)){
            if(typeof input[i] === 'array' || typeof input[i] === 'Object'){
                    for(var j in input[i]){
                      
                    }
            }else{
                obj[i] = input[i]
            }
        }else{
            obj[i] = null
        }
    }
    console.log(JSON.stringify(obj));

}
