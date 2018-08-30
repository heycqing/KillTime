## 📚 移动端知识点
### 移动端原生事件有哪些？
> from (QQ音乐)
- A:
1. `click`事件
单击事件，类似于PC端的`click`，但在移动端中，连续`click`的触发有`200ms ~ 300ms`的延迟

2. `touch类`事件
触摸事件，有`touchstart` `touchmove`` touchend`` touchcancel `四种之分
`touchstart`：手指触摸到屏幕会触发
`touchmove`：当手指在屏幕上移动时，会触发
`touchend`：当手指离开屏幕时，会触发
`touchcancel`：可由系统进行的触发，比如手指触摸屏幕的时候，突然alert了一下，或者系统中其他打断了touch的行为，则可以触发该事件

3. `tap类`事件

触碰事件，我目前还不知道它和touch的区别，一般用于代替`click`事件，有`tap`` longTap ``singleTap`` doubleTap`四种之分
`tap`: 手指碰一下屏幕会触发
`longTap`: 手指长按屏幕会触发
`singleTap`: 手指碰一下屏幕会触发
`doubleTap`: 手指双击屏幕会触发

4. `swipe类`事件
滑动事件，有`swipe ``swipeLeft`` swipeRight ``swipeUp ``swipeDown `五种之分
`swipe`：手指在屏幕上滑动时会触发
`swipeLeft`：手指在屏幕上向左滑动时会触发
`swipeRight`：手指在屏幕上向右滑动时会触发
`swipeUp`：手指在屏幕上向上滑动时会触发
`swipeDown`：手指在屏幕上向下滑动时会触发


### 移动开发经验
- [KY饭局报名(此链接数据是测试数据)](http://www.wusiqing.com/yoker_/html/singUpHtml/index.html?openId=%27holle%27&&name=%27123%27)
    + 由于需要和后台数据库连接，生成海报的方法是经过需要获取 `URL` 中的参数来获取微信的 `openID` 和 表单填写的 `name`