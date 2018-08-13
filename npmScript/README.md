## npm script 练习
## 打造自己的前端工程化流程

### font-end-cqing 的功能
<br>
- 检查代码
- 单元测试
- 打印日志
- 跨平台（win、mac）
- 美化log
- 自动刷新
- 自动化维护

### 关于在写的过程中的问题都写在了issues中，欢迎commit和star 💯

### 主要的点 and 一些感悟感受
<br>
- npm script 主要有一个插件库和一个配置表组成，有配置库锁定所使用的插件。
- 有想到一些调侃，说，javascript做出来的成品主要是有一个个插件搭建而成。
<br>
- 当你去搭建一个前端工程时，其实就是使用各种module 插件搭建而成。
`例如当前的使用npm script 搭建而成的前端工程， 相对于其他的搭建工具，例如webpack、pracle等等，其内部使用的是封装好的功能，而在其中的package.json就是充当着一个插件依赖下载的过程。`


### 起源
<br>
其实在参加完 深圳的本固枝荣 前端会议之后，感觉整个流程都在说 前端工程化，
一直都有一个愿望去实现一个自己的前端工程流，有看过package.json的标准官网，但是由于自身的一些问题，
回叙可以说是自己的一些知识储备的缺乏，没继续下去。
<br>
其中的有想过`webpack` `glup` 一些打包工具 
在掘金小册有看到这个，就抱着学习的心态去看一下，果然，付费的💯；
<br>
### 一些注意点
作为 npm 内置的核心功能之一，npm run 实际上是 npm run-script 命令的简写。<br>
例如：`npm run test`
就是 npm在package.json配置中搜索 `script` 脚本中配置的命令；


### 前端工程流中的基本代码检查插件
- `eslint`，可定制的 js 代码检查，1.1 中有详细的配置步骤；
- `stylelint`，可定制的样式文件检查，支持 css、less、scss；
- `jsonlint`，json 文件语法检查，踩过坑的同学会清楚，json 文件语法错误会知道导致各种失败；
- `markdownlint-cli`，Markdown 文件最佳实践检查，个人偏好；...


### 几种多种方式的并行命令
- `npm run lint-js && npm run lint-css` 这种是需要按照顺序执行，第一步失败后其他也会错误；
- `npm run lint-js & npm run lint-css` 这种可以并行运行
- `npm run lint-js & npm run lint-css & wait` 这种就可以使用在当某一插件处于监控的时候就可以不需等待进行；
- 使用插件 `npm-run-all` 插件，<br>

### eslint 是真的烦，依据自己的使用规范选择相对应的rules
<br>
我是没什么规范的，所以只能在自己的代码的实践，形成自己的风格。
<br>
但是在大公司里很多都是有规范的，只能去适应这些规范。


### stylelint 检查css样式 需要的事项有写在issues 中


### 巧用npm script 钩子机制
1. `pre`  先于命令之前运行；<br>
2. `post` 后于命令运行；



### 插件的相关链接
- `npm script的使用指南`
1. [npm script的使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
- `eslint` 使用文档，中英文
1. [eslint 中文文档](http://eslint.cn/docs/user-guide/configuring)
2. [eslint 英文文档](https://eslint.org/docs/user-guide/command-line-interface)
- `stylelint`规则
1. [stylelint 的规则大全](https://stylelint.io/user-guide/rules/)