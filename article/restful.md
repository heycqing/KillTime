
# Reasful服务

## 1.概述
### 1.1 什么是 RESTful API?
` RESTful ` 全称是: `Representational State Transfer` ,翻译是 `表现性状态转移`；<br>

` RESTful `指的是一组架构约束条件和原则。<br>

在2000年 `Roy Fielding` 的博士论文中，`Roy Fielding` 是 `HTTP` 规范的主要编写者之一。 他在论文中提到："我这篇文章的写作目的，**就是想在符合架构原理的前提下，理解和评估以网络为基础的应用软件的架构设计，得到一个功能强、性能好、适宜通信的架构.** REST指的是一组架构约束条件和原则。" 
<br>


### 1.2 什么是 RESTful 架构？

如果一个架构符合 `REST` 原则，就称它为 `RESTful架构`。<br>

目前 `HTTP` 是 `REST` 唯一的实例。

### 目前网络上的文章大多都是以 HTTP 为例子讲解 RESTful 

### 1.3 RESTful 4个基本设计原则是什么？
* 显性地使用 `HTTP` 方法
* 无状态
* 公开目录结构式的 `URI`
* 传输 `XML` `JSON`

## 2.RESTful准则讲述
### 2.1 显性地使用 HTTP 方法
讲的是关于 HTTP 是现在 RESTful 实践最好的例子， HTTP 里面的方法对应着 RESTful 的操作。

HTTP 方法 | RESTful 操作 
---------|----------
 Get | 检索 
 Post | 创建 
 Put | 更新
 Delete | 删除

 这里说的是相对应的操作方法，不要和 HTTP 方法混淆，这样才不会产生概念上的冲突。

### 2.2 无状态
* 无状态
    意味着在客户端发起请求的时候，是不需要在保存相应的请求状态。
    服务器负责生成响应，并提供使客户端能够独自维护应用程序状态的接口。

* 有状态
    就是意味着在客户端发起请求的时候，是需要在本地保存相应请求状态。
    例子： 在 Java Platform, Enterprise Edition (Java EE) 环境中，有状态的服务需要大量的预先考虑，以高效地存储会话数据和支持整个 Java EE 容器集群中的会话数据同步。

### 2.3公开目录结构式的 URI
* `URI` , `Uniform Resource Identifier` , `统一资源标记符` ,是标识互联网某一个资源名称的字符串，不是标准的网址。
* `URL` , `Uniform Resource Locator` , `统一资源定位符` ,是标识互联网某资源的地址，标准的网址表示。

但是遵循 RESTful 准则，在 RESTful 架构中，应该是使用 `URI` 作为接口，来表示传输的某一资源的名称。

在 RESTful 服务中，标准会议给出以下的最好的建议：
* 隐藏服务器端脚本技术文件扩展名（.jsp、.php、.asp）——如果有的话，以便您能够移植到其他脚本技术而不用更改 URI。
* 将所有内容保持小写。
* 将空格替换为连字符或下划线（其中一种或另一种）。
* 尽可能多地避免查询字符串。
* 如果请求 URI 用于部分路径，与使用 404 Not Found 代码不同，应该始终提供缺省页面或资源作为响应。 

> 题外话: URI 和 URL 的不同
> URI 和 URL 都定义了 what the resource is。
> URL 还定义了 how to get the resource。

### 2.4 传输 XML、JSON
在 RESTful 服务中，客户端和服务端之间传输的数据格式有 `XML` / `JSON`.
不过在请求头中，加上相对应的 Content-Type

MIME-Type| Content-Type 
---------|----------
 Json | application/json 
 Xml | application/xml 
 Xhtml | application/xhtml+xml

