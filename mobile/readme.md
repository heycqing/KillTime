## 📚 移动端知识点
### 移动端原生事件有哪些？
> from (QQ音乐)
- A:
1. `click`事件
单击事件，类似于PC端的`click`，但在移动端中，连续`click`的触发有`200ms ~ 300ms`的延迟

2. `touch类`事件
触摸事件，有`touchstart` `touchmove` ` touchend` ` touchcancel `四种之分
- `touchstart`：手指触摸到屏幕会触发
- `touchmove`：当手指在屏幕上移动时，会触发
- `touchend`：当手指离开屏幕时，会触发
- `touchcancel`：可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件

3. `tap类`事件

触碰事件，我目前还不知道它和touch的区别，一般用于代替`click`事件，有`tap` ` longTap ` `singleTap` ` doubleTap`四种之分
- `tap`: 手指碰一下屏幕会触发
- `longTap`: 手指长按屏幕会触发
- `singleTap`: 手指碰一下屏幕会触发
- `doubleTap`: 手指双击屏幕会触发

#### `swipe类`事件属于滑动类，但是不属于原生事件
滑动事件，有`swipe ` `swipeLeft` ` swipeRight ` `swipeUp ` `swipeDown ` 五种之分
- `swipe`：手指在屏幕上滑动时会触发
- `swipeLeft`：手指在屏幕上向左滑动时会触发
- `swipeRight`：手指在屏幕上向右滑动时会触发
- `swipeUp`：手指在屏幕上向上滑动时会触发
- `swipeDown`：手指在屏幕上向下滑动时会触发

### 滑动：
* 滚动条距离浏览器顶部的高度 = 窗口滚动条高度；
* 滚动条距离浏览器底部的高度 = 文档（页面）内容实际高度 - 滚动条距离浏览器顶部的高度 - 窗口可视范围的高度；
  
### 移动开发经验
> 使用手机看，体验更佳~
> 在电脑端打开，可能会有点不适应~
- [北理小报的晚安页面](https://1110qing.gitee.io/goodnight/)
    + 创建背景：是第一次真正和设计师、后端配合的一个小页面，但是使用的 `原生js` ,更多的 `ajax` `css3动画`,(写的时候是大一结束大二开始)；
    + 源码也是托管在 **码云** 上的，[晚安页面](https://1110qing.gitee.io/goodnight/)
- [奇冰科技有限公司的报名系统](https://1110qing.gitee.io/qibing/#/tab/choice1)
    + 创建背景：这里是报名系统的 `v0.1.0` 版本，使用框架当时是 `Angular.js 1.x 版本` 的时候（写的时候是大二）
    + 这里是报名系统的代码，之前是托管到 **码云** 上的，[报名系统源码](https://gitee.com/1110qing/qibing)
- [KY饭局报名(此链接数据是测试数据)](http://www.wusiqing.com/yoker_/html/singUpHtml/index.html?openId=%27holle%27&&name=%27123%27)
    + 由于需要和后台数据库连接，生成海报的方法是经过需要获取 `URL` 中的参数来获取微信的 `openID` 和 表单填写的 `name`
