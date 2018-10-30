(function(){
    var calculate = {
        
        add:function(a , b){
            return a+b;
        },
        sub:function(a , b){
            return a > b ? a - b :b - a;
        },

        mult:function(a , b){
            return a * b ;
        },
        divi: function(a , b){
            return a / b ;
        }
    }

   this.calc = calculate;

})()