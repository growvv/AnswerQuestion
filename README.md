## 功能
这是一款有趣的答题小游戏，包括双人匹配、单人挑战、排行榜等功能
## 实现
一款基于wafer2方案的实时在线答题微信小程序
* 前端：微信小程序
* 后端：koa+knex
### 目录结构说明：
```
├─client # 小程序端代码
│   ├─imgs # 图片存放处
│   ├─pages # 各个页面代码的存放处
│   │─utils # 工具包
│   ├─app.js # 全局JS
│   ├─app.json # 全局配置
│   ├─app.wxss # 全局样式
├─server # 服务器端代码
└─project.config.json # 项目配置  
```
### 使用步骤：
1. 克隆项目到本地
2. 开通腾讯云
3. 修改client/config.js,修改请求地址为腾讯云解决方案分配的域名。修改appId为你的appId。
4. 修改server/config.js,修改appId、appSecret为你自己的，默认的数据库密码为appId。
5. 真机上测试注意打开调试默认，绕过域名检测。

### 效果
![https://cdn.jsdelivr.net/gh/growvv/AnswerQuestion/imgs_md/1.gif](https://cdn.jsdelivr.net/gh/growvv/AnswerQuestion/imgs_md/1.gif)
