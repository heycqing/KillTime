var li_ = document.getElementsByTagName('li')

for(var i = 0 ; i< li_.length; i++){
    li_[i].addEventListener('click',function(i){
       return function(){
            alert(i+0);
            
        }
    }(i),true)
}