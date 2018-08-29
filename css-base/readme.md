## 👣 css-base知识点

### 重点关注：position? 
#### relative 和 absolute 的区别？
> 有类型：  `static` , `relative` , `absolute` , `fixed`;
- `static` 默认属性..
- `relative` 要点
    + `relative` 会导致自身位置的相对变化，而不会影响其他元素的位置、大小
    + 会重新定义一个 `上下文` 主要是配合 `absolute` 使用，作为 `absolute` 在调整位置的依据
- `absolute` 要点
    + `absolute` 元素脱离了文档结构，会破坏文档结构，影响到其他元素的位置；
    + `absolute` 元素会悬浮在页面上方，会遮挡住下方的页面内容。
    + `absolute` 脱离文档之后，宽度只会等于包裹的文本内容的宽度。
    + `absolute` 在没有设定 `top/left` 之类的，会留在原来的地方
    + ！！最重要的地方
        + `absolute` 当你要调整 `top/left` 之类的东西时，会根据最近定义的上下文来确定自己的位置
- `fixed` 要点
    + `absolute` 元素是根据最近的定位上下文确定位置，而 `fixed` 根据 `window `（或者 `iframe`）确定位置。

> 这里的`最近定义上下文`是指 当使用了 `absolute` 的元素会向上级父元素一直寻找到有定义 `position:static/relative/absolute/fixed` 的元素，记得是元素，作为调整位置的依据。
>
#### relative、absolute 和 fixed 分别依据谁来定位？
> 正解：
- `relative` 