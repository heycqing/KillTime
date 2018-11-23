var mzHeaderTouch = {
    startY: 0,
    endY: 0,
    status: 80,
    i:0,
    mzTouchUpCss: function(){
      $('#header-wrapper').addClass('header_show')
      $('#index-nav').addClass('header_show')
      $('#header-wrapper').removeClass('header_hide')
      $('#index-nav').removeClass('header_hide')
    },
    mzTouchDownCss: function(){
      $('#header-wrapper').addClass('header_hide')
      $('#index-nav').addClass('header_hide')
      $('#header-wrapper').removeClass('header_show')
      $('#index-nav').removeClass('header_show')
    },
    mzScrollRemove: function(){
      $('#header-wrapper').removeClass('header_show')
      $('#index-nav').removeClass('header_show')
      $('#header-wrapper').removeClass('header_hide')
      $('#index-nav').removeClass('header_hide')
    },
    mzGetTouch: function(a,b){
      var temp = a - b;
      var result;
      if(temp < 0 ){
       return result = 1;
      }else if(temp > 0){
        return result = 2;
      }else{
        return result = 0;
      }
    },
    mzTouchStart: function(){
      document.addEventListener('touchstart',function(e){
        this.startY = e.touches[0].clientY;
      },false)   
    },
    mzTouchEnd: function(){
      var self = this;
      document.addEventListener('touchmove',function(e){
        this.endY = e.touches[0].pageY;
          switch(self.mzGetTouch(this.startY,this.endY)){
            case 1:
              self.mzTouchUpCss();
              break;
            case 2:
              self.mzTouchDownCss();
              break;
            default:
              return;
              break;
        }
        },false)
    },
    MzWindowMove: function(){
      var self = this;
      window.addEventListener('scroll',function(e){
        var scrollT = document.documentElement.scrollTop || document.body.scrollTop; 
        console.log(scrollT)
        if( scrollT == 0){
          self.mzScrollRemove();
          console.log('11')
        }
        else if(scrollT - self.status < 0){
          self.mzTouchUpCss();      
          self.status = scrollT;
          console.log('22')
        }else if(scrollT - self.status > 0){
          self.mzTouchDownCss();
          self.status = scrollT;        
        }
        e.preventDefault();
        
  
      },false)
    },
    mzTouch: function(){ 
        var self = this;
        self.mzTouchStart();
        self.mzTouchEnd();
        // self.MzWindowMove()
    },
    init: function(){
      this.mzTouch();
      
    }
  }
  
  mzHeaderTouch.init();