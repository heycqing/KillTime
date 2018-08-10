# KillTime
一些自己的平时随便写的东西

## npm script 练习

### font-end-cqing 的功能
- 检查代码
- 单元测试
- 打印日志
- 跨平台（win、mac）
- 美化log
- 自动刷新
- 自动化维护

### 关于在写的过程中的问题都写在了issues中，欢迎commit和star 💯

### 起源
其实在参加完 深圳的本固枝荣 前端会议之后，感觉整个流程都在说 前端工程化，
一直都有一个愿望去实现一个自己的前端工程流，有看过package.json的标准官网，但是由于自身的一些问题，
回叙可以说是自己的一些知识储备的缺乏，没继续下去。

其中的有想过`webpack` `glup` 一些打包工具 
在掘金小册有看到这个，就抱着学习的心态去看一下，果然，付费的💯；

### 一些注意点
作为 npm 内置的核心功能之一，npm run 实际上是 npm run-script 命令的简写。
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
- 使用插件 `npm-run-all` 插件，

### eslint 是真的烦，依据自己的使用规范选择相对应的rules

我是没什么规范的，所以只能在自己的代码的实践，形成自己的风格。
但是在大公司里很多都是有规范的，只能去适应这些规范。

### stylelint 检查css样式 需要的事项有写在issues 中