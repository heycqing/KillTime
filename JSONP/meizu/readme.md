## 获取 JSONP 的数据；

### 步骤
1. 获取 `jsonp` 的链接，并且生成 `script` 标签；
2. 获取里面 `jsonp` 的链接里面的数据;
3. 找到 `Jsonp` 链接里面的 `callback` 中的函数；
4. 创建相同的 `callback` 函数， `callback` 填入 `参数` ;
5. 通过传入的 `参数` 就可以获取到 `jsonp` 的数据；
6. 取决你需不需要遍历输出 `jsonp` 中的数据；

### 例子

具体代码如下:

```js
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }
  

  var Meizu_m_Products = {
    //    创建 script 标签，引入jsonp;
      getDMSData: function(){
          var dms_url = '';
          var isPreview = getQueryString('preview');

          if(isPreview){
            var blockIds = getQueryString('blockIds') || ''
            var blockDataIds = getQueryString('blockDataIds') || ''
      
            dmsUrl = 'https://dms.meizu.com/api/preview/jsdataPreview.jsonp?blockIds=' + blockIds + '&blockDataIds=' + blockDataIds + '&callback=renderSite';

          }else{
            dmsUrl = 'https://dms-dataapi.meizu.com/data/jsdata.jsonp?callback=renderSite&blockIds=335';
          }
          var scriptTag = document.createElement('script');
          scriptTag.src = dmsUrl
          document.body.appendChild(scriptTag);
      },
    //   遍历获取输出phone html
    changeToPhoHtml: function(data){
        var html = '';
        for(var i = 0; i< data.length ; i ++){
            html += ' <a href= \" '+data[i].href +' \"><img src=\"'+data[i].img+'\"></a>'
        }
        return html;
    },
      init:function(){
          this.getDMSData();
      }
  }

  Meizu_m_Products.init();

  function renderSite(data){
    var data_phone = data.block_335;
    var phone_template = Meizu_m_Products.changeToPhoHtml(data_phone);
    $id('second-ad-banner').innerHTML = phone_template;
  }

```