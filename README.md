# 小程序商城源代码，含完整购物车、用户中心和订单管理

延誉宝商城小程序，商城源代码支持最新的微信小程序开放接口，包括使用open-data获取微信用户的头像和昵称信息等。

这个项目是小程序商城源码的下载，如果需要H5商城，请转到这个项目：[https://github.com/longmix/shopmallmobile](https://github.com/longmix/shopmallmobile)

商城的APP版本源代码下载，包括Android和iOS两个版本，最新更新请到这个查询：[http://www.abot.cn/source-code](http://www.abot.cn/source-code)

商城小程序源码包含完成的商城服务器API接口调用，只需要修改sellerid为自己的即可。最新版本的小程序源码，也可以GitHub上获取到。

`使用延誉宝小程序商城源代码，轻松搭建小程序商城，快速实现商城上线！`

## 快速入门

### 运行环境：

建议使用最新版本的小程序开发工具打开此项目。

### 查看在线演示：

![image](https://raw.githubusercontent.com/longmix/shopmallminiprogram/master/doc/gh_ef882fb581e9_258.jpg)


### 更多制作案例：

![image](https://raw.githubusercontent.com/longmix/shopmallminiprogram/master/doc/qrcode_to_more_use_cases_form_shopmall_mini_program.png)


### 如何安装商城系统？

#### 基于第三方平台部署（不需要任何开发）

要实现一键部署安装，不需要下载源代码，直接在延誉宝官网 **www.abot.cn** 注册账号，然后进入“CMS控制台”，绑定小程序后一键部署即可。

#### 独立部署（需要开发）

将src目录下的内容在小程序开发工具中运行即可，在微信小程序开发工具中修改代码，快速修改方式如下。

#### 如何修改为自己的商城，并替换成自己的商品？

打开项目的主目录，找到app.js文件，修改以下内容

```javascript
App({
  globalData:{
	  
   xiaochengxu_appid: 'wx00d1e2843c3b3f77', 
   shop_name:'又一个通版商城',
   default_sellerid: 'pQNNmSkaq', 
   
   force_sellerid: 1, 
   token:'inkqzh1493969716',
   sellerid: '',
   version_number: "1.2.0",
   kefu_telephone:"021-31128716",
   kefu_qq:"537086268",
   kefu_website:"www.abot.cn",
   kefu_gongzhonghao:"延誉宝",
   
   http_weiduke_server: 'https://cms.weiduke.com/',
   http_server: 'https://yanyubao.tseo.cn/',
   userInfo: {}
  },
```

1、将xiaochengxu_appid换成自己小程序Appid。

2、将shop_name改成自己的商城名称（小程序名称）。

3、default_sellerid换成自己的延誉宝商户编号。


如何获取自己的default_sellerid？[在这里 http://www.abot.cn 注册](http://www.abot.cn)，登录后即可拥有自己的default_sellerid。

其他的配置项都是客服信息等，请根据需要替换。

```
小程序的request合法域名请填写 *cms.weiduke.com* 和 *yanyubao.tseo.cn* ，这两个域名都支持https，不需要再申请SSL证书。如果需要定位和地图服务，还需要增加合法域名：*api.map.baidu.com*
```

#### 源代码目录结构

如下图，主要的功能代码在pages这个目录下。

![image](https://raw.githubusercontent.com/longmix/shopmallminiprogram/master/doc/shopmall_wxa_source_code_dir_list.png)

## 商城管理员后台使用说明

如何设置自己的店铺？快速获取管理员后台的使用说明，访问：[http://www.abot.cn/1053.html](http://www.abot.cn/1053.html)

## 二次开发帮助文档

在小程序的开发环境直接运行项目，通过调试器的网络控制台，可以随时查看即时的API请求接口和对应的参数。

如果现有代码提供的API接口请求不能满足项目开发需求，还可以参考以下API文档：

[http://www.abot.cn/yanyubao-api-shop](http://www.abot.cn/yanyubao-api-shop)

## 小程序商城预览图

![image](https://raw.githubusercontent.com/longmix/shopmallminiprogram/master/doc/shop_mall_mini_program_01.jpg)
![image](https://raw.githubusercontent.com/longmix/shopmallminiprogram/master/doc/shop_mall_mini_program_02.jpg)

## 模板选项和控制后台

开发过程中，尽可能保留服务器端推送的控制选项，这样可以在小程序发布后通过SaaS云控制台灵活调整小程序的内容。控制台截图如下：

![image](https://raw.githubusercontent.com/longmix/shopmallminiprogram/master/doc/shopmall_controller.png)



