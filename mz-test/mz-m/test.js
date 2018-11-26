var mzHeaderTouch = {
    startY: 0,
    endY: 0,
    scrollT: 0,
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
    mzTouchStart: function(){
      var self = this;
      document.addEventListener('touchstart',function(e){
        self.startY = e.touches[0].clientY;
      },false)   
    },
    mzTouchEnd: function(){
      var self = this;
      document.addEventListener('touchmove',function(e){
        self.endY = e.changedTouches[0].clientY;
        var n = self.startY - self.endY;
        if( n < 35){
          self.mzTouchUpCss();   
        e.preventDefault();
               
        }else if(n > 35){
          self.mzTouchDownCss();    
        e.preventDefault();
              
        }else{
        e.preventDefault();
          
          return;
        }
        e.preventDefault();
        
        },false)
    },
    MzWindowMove: function(){
      var self = this;
      var beforeScrollT = document.documentElement.scrollTop || document.body.scrollTop; 
      window.addEventListener('scroll',function(e){
        var afterScrollT = document.documentElement.scrollTop || document.body.scrollTop; 
        var m =  afterScrollT - beforeScrollT;
      if(afterScrollT < 122){
          return;
        }else if(afterScrollT == 0 ){
          self.mzTouchUpCss();     
          e.preventDefault();
        }
        else if( m > 0){
          if(afterScrollT > 0){
            self.mzTouchDownCss();   
            e.preventDefault();         
          }
        }
        else if(m < 0){
          self.mzTouchUpCss();     
          e.preventDefault();       
        }
        beforeScrollT =  afterScrollT;      
        e.preventDefault();
      },false)
    },
    init: function(){
      var self = this;
      // self.mzTouchStart();
      // self.mzTouchEnd();
      self.MzWindowMove();
    }
} 
mzHeaderTouch.init();
  