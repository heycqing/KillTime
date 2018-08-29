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
- `relative` 定位永远是相对于`元素自身位置`的，和其他元素没关系，也不会影响其他元素。
- `fixed` 相对于 `window` 边界，会导致其他元素位置的变化。
- `absolute` 是分情况：
    + 浏览器会递归查找该元素的所有父元素，如果找到一个设置了 `position:relative/absolute/fixed` 的元素，就以`该元素为基准定位`，
    + 如果没找到，就以 `浏览器` 边界定位。

### 如何实现水平居中？
- `inline` 元素直接使用 `text-algin`;
- `block` 元素直接使用 `margin: auto;`;
- `绝对定位` 元素可结合 `left` 和 `margin` 实现，但是必须知道宽度。

### 如何实现垂直居中？
- `inline` 元素可设置 `line-height` 的值等于 `height` 值，如单行文字垂直居中;
- `绝对定位元素`，可结合 `left` 和 `margin` 实现，但是必须知道 `尺寸`。
- `绝对定位` 可结合 `transform` 实现居中。
- `绝对定位` 结合 `margin: auto` ，不需要提前知道尺寸，兼容性好。