## eggjs_blog_simple
 使用eggis的个人博客api


### 项目
**项目地址**：[https://github.com/github262302/eggjs_blog_simple](https://github.com/github262302/eggjs_blog_simple)(喜欢的请点个star^_^)

**运行**

``` bash
#1
git clone https://github.com/github262302/eggjs_blog_simple.git

#2 
cd egg-blog
npm install
npm run dev
#3
修改config.default.js中mysql的配置
mysql的账号密码改为自己的

#4
npm run dev

#5 单元测试
npm test

#6 本地测试
npm run test-local
```
### 流程

#### 参考文档
[Egg官方文档](eggjs.org/zh-cn/intro/)

[Sequelize(英文)](http://docs.sequelizejs.com/manual/installation/getting-started.html)

[Sequelize(中文)](https://github.com/demopark/sequelize-docs-Zh-CN)

#### 技术选型

后台框架：Egg
数据库：Mysql
插件：egg-sequelize
#### 接口测试

工具：PostMan

#### 数据库设计

数据库设计跟之前的也略有不同，差别的是各实体之间的联系。
实体有
> 
* blogs
* users
* catalogs


**ER图如下**



**实体之间联系**



#### 开发的接口



#### 个人总结



### 接口文档

[API接口文档](http://s/)