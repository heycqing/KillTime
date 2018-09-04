### 📖 模拟笔试题

## 01.jpeg (涉及数据库)
> A:
- `索引` ：是对数据库表中 `一列` 或 `多列` 的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。
> 一些关于 `索引` 和 `索引查询` 的注意点：
```sql
    就目前来说，mysql 暂时只支持最左前缀原则进行筛选。
    例子：创建复合索引
    create index idx_a_b_c on tb1(a,b,c)
    只有使用如下条件才可能应用到这个复合索引
    1.where a=?
    2.where a = ? and b = ?
    3.where a = ? and b = ? and c = ?
    但
    4.where a = ? and c ＝ ？
    只会使用到mysql 索引 a 列的信息
```
- 可以参考[mysql数据库正确建立索引及使用](http://blog.51cto.com/4925054/1097107)
- 可以参考[MySQL 数据库索引使用场景 & 注意事项](https://juejin.im/entry/58ef200144d904006cdf29c2)

<br>

> 答案是：C、D

## 02.jpeg (涉及 linux操作系统)
> A:
1. 管道（pipe）,流管道(s_pipe)和有名管道（FIFO）
2. 信号（signal）
3. 消息队列
4. 共享内存
5. 信号量
6. 套接字（socket)

- 参考链接[Linux进程间通信的几种方式总结](https://blog.csdn.net/gatieme/article/details/50908749)
<br>
> 答案是：all

## 03.jpeg （涉及操作系统设计）
> A： 😣 有点儿难呀

> 涉及到 `生产者和消费者问题` 
> 标准的 `生产者和消费者问题` 应该如下图：
```js
    MUTEX = 1;
    FULL = 1;
    EMPTY = 消费个数;
```
```js
    <!-- 生产者进程 -->
    while(1) {
        P(EMPTY); // 减少一个空缓冲区个数
        P(MUTEX); // 在任意一个时刻，只能有一个进程去操作它
        if (cake < 5) {  //假设消费个数是 5
            cake++;
        }
        V(MUTEX); // 在任意一个时刻，只能有一个进程去操作它
        V(FULL); // 增加一个蛋糕个数
    }
```

```js
    <!-- 消费者问题 -->
    while(1) {
        P(FULL); // 减少一个蛋糕个数
        P(MUTEX); // 在任意一个时刻，只能有一个进程去操作它
        if (cake > 0) {
            cake--;
        }
        V(MUTEX); // 在任意一个时刻，只能有一个进程去操作它
        V(EMPTY); // 增加一个空缓冲区个数
    }
```

