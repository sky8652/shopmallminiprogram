// app.js
App({
  globalData:{
	  
   xiaochengxu_appid: 'wx00d1e2843c3b3f77', 
   shop_name:'又一个通版商城',
   default_sellerid: 'pQNNmSkaq', 
   
   force_sellerid: 0, 
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
  
  onLaunch: function () {   
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);    
    

    wx.getSystemInfo({
      success(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })

    console.log('ttttttttttttt3');
    //login
   // this.getUserInfo();
    let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {}

    this.globalData.xiaochengxu_appid = extConfig.xiaochengxu_appid;
    //强制设置当前的appid
    
    // const accountInfo = wx.getAccountInfoSync();
    
    // if (accountInfo && accountInfo.miniProgram && accountInfo.miniProgram.appId) {
    //   this.globalData.xiaochengxu_appid = accountInfo.miniProgram.appId;
    // }
    
    console.log('当前小程序为：' + this.globalData.xiaochengxu_appid);


    this.globalData.force_sellerid = 0;

    if (extConfig.force_sellerid_flag == 1) {
      this.globalData.force_sellerid = 1;
      this.globalData.default_sellerid = extConfig.force_sellerid_value;
    }

    if (extConfig.shop_name){
      console.log("444444", extConfig.shop_name)
      this.globalData.shop_name = extConfig.shop_name;
    }
    if (extConfig.version_number) {
      this.globalData.version_number = extConfig.version_number;
    }

    if (extConfig.navigationBarBackgroundColor_fixed) {
      this.globalData.navigationBarBackgroundColor_fixed = extConfig.navigationBarBackgroundColor_fixed;
    }


    

    if (extConfig.kefu_telephone) {
      this.globalData.kefu_telephone = extConfig.kefu_telephone;
    }
    if (extConfig.kefu_qq) {
      this.globalData.kefu_qq = extConfig.kefu_qq;
    }
    if (extConfig.kefu_qq) {
      this.globalData.kefu_qq = extConfig.kefu_qq;
    }
    if (extConfig.kefu_website) {
      this.globalData.kefu_website = extConfig.kefu_website;
    }
    if (extConfig.kefu_gongzhonghao) {
      this.globalData.kefu_gongzhonghao = extConfig.kefu_gongzhonghao;
    }

    if (extConfig.is_ziliaoku_app) {
      this.globalData.is_ziliaoku_app = extConfig.is_ziliaoku_app;
    }

    

    //this.set_option_list_str();

  },
  set_user_info: function (user_info) {
    console.log("准备保存用户数据：");
    console.log(user_info);

    var user_info_str = JSON.stringify(user_info);

    //缓存返回数据
    wx.setStorageSync("wxa_user_info", user_info_str);

    //console.log('111111111111111111');
    //console.log(wx.getStorageSync("wxa_user_info"));
  },
  get_user_info: function () {
    //缓存返回数据
    var user_info_str = wx.getStorageSync("wxa_user_info");

    console.log("获取小程序用户数据：" + user_info_str + '333333333');

    if (!user_info_str) {
      return null;
    }

    return JSON.parse(user_info_str);
  },
  del_user_info: function () {
    //缓存返回数据
    wx.removeStorageSync("wxa_user_info");

  },
  goto_user_login: function (last_url, page_type){
    var userInfo = this.get_user_info();

    console.log('goto_user_login:');
    console.log(userInfo);

    if ((!userInfo) || (!userInfo.userid)) {
      console.log('goto_user_login:222222222222');

      wx.showToast({
        title: '请先登录',
        icon: 'none',
        duration: 1000,
        success: function () {

          if (last_url) {
            wx.setStorageSync('last_url', last_url);
            wx.setStorageSync('page_type', page_type);
          }

          wx.redirectTo({
            url: '/pages/login/login',
          })

          wx.hideToast();
        }
      })

      return;
    };


  },
  check_user_login: function () {
    var user_info_str = wx.getStorageSync("wxa_user_info");
    console.log("获取小程序用户数据：" + user_info_str);
    if (user_info_str) {
      var user_info = JSON.parse(user_info_str);
      if (user_info) {
        if (user_info.userid > 0) {
          return;
        }
      }
    }

    //如果userid等于0,则提示绑定手机号
    console.log("需要用户登录");
    wx.navigateTo({
      url: '../login/login'
    });

    return true;

  },
  set_current_parentid: function(parentid){
    if(!parentid){
      return;
    }

    console.log("设置parentid：" + parentid);

    //缓存返回数据
    wx.setStorageSync("current_parentid", parentid);
  },
  get_current_parentid: function(){
    var parentid = wx.getStorageSync("current_parentid");
    console.log("获取parentid：" + parentid);

    if(!parentid){
      parentid = 0;
    }

    return parentid;
  },
  set_sellerid: function (sellerid) {
    console.log("设置sellerid：" + sellerid);

    //缓存返回数据
    wx.setStorageSync("current_sellerid", sellerid);
  },
  get_sellerid: function () {
    if (this.globalData.force_sellerid == 1){
      return this.globalData.default_sellerid
    }
    //缓存返回数据
    var sellerid = wx.getStorageSync("current_sellerid");

    console.log("获取sellerid：" + sellerid);

    if ((sellerid == null) || (sellerid.length == 0)) {
      var that = this
      sellerid = that.globalData.default_sellerid;
      console.log("0000000000000000000获取sellerid不成功，使用默认sellerid：" + that.globalData.default_sellerid + ' ==>>  ' + sellerid);
    }

    return sellerid;
  },
  getColor:function(){
    //从本地读取
    var option_list_str = wx.getStorageSync("option_list_str");

    console.log("获取商城选项数据====：" + option_list_str + '333333333');

    if (!option_list_str) {
      //return null;

       wx.showToast({
        title: '正在更新缓存',
        icon:'fail'
      });

      this.set_option_list_str(this, this.getColor);

      return;
  
    }
     
    
    var option_list =  JSON.parse(option_list_str);

    this.globalData.option_list = option_list;

    console.log('oplist-----', option_list.wxa_shop_nav_bg_color);

    //console.log('111111111111111111111111111111::' + this.globalData.navigationBarBackgroundColor_fixed);

    if (this.globalData.navigationBarBackgroundColor_fixed != 1){

      if (option_list && option_list.wxa_shop_nav_font_color && option_list.wxa_shop_nav_bg_color) {
        wx.setNavigationBarColor({
          frontColor: option_list.wxa_shop_nav_font_color,
          backgroundColor: option_list.wxa_shop_nav_bg_color,

          // animation: {
          //   duration: 40,
          //   timingFunc: 'easeIn'
          // }
        });
      }
    }

    
    return option_list.wxa_shop_nav_bg_color;
    /*wx.setTabBarStyle({
      color: '#858585',
      selectedColor: option_list.wxa_shop_nav_font_color,
      backgroundColor: '#ffffff',
      borderStyle: 'white'
    })*/
  
  },
  
  set_option_list_str: function (that, callback_function) {

    var currentTime = (new Date()).getTime();//获取当前时间

    if (wx.getStorageSync("option_list_str") && (currentTime - wx.getStorageSync("option_list_str_time")) < 3600 * 1000) {
      
      var option_list = JSON.parse(wx.getStorageSync("option_list_str"))

      this.globalData.option_list = option_list;
      console.log(' this.globalData.option_list===========', this.globalData.option_list)
      //刷新界面
      typeof callback_function == "function" && callback_function(that, 8888);

    } else {


      var that002 = this;

      wx.request({
        url: this.globalData.http_server + '?g=Yanyubao&m=ShopAppWxa&a=get_shop_option',
        method: 'post',
        data: {
          sellerid: this.get_sellerid()          
        },
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function (res) {
          var option_list = res.data.option_list;

          that002.globalData.option_list = option_list;


          //保存到本地
          var option_list_str = JSON.stringify(option_list);

          //缓存返回数据
          wx.setStorageSync("option_list_str", option_list_str);
          var currentTime = (new Date()).getTime();//获取当前时间
          wx.setStorageSync("option_list_str_time", currentTime);

          console.log('保存商城选项：' + option_list_str);

          //刷新界面
          typeof callback_function == "function" && callback_function(that, '6666');

        },
        fail: function (e) {
          wx.showToast({
            title: '网络异常！',
            duration: 2000
          });
        },
      });
    }
  },


  set_current_openid: function (openid) {
    if (!openid) {
      return;
    }

    console.log("设置openid：" + openid);

    //缓存返回数据
    wx.setStorageSync("current_openid", openid);
  },
  get_current_openid: function () {
    var openid = wx.getStorageSync("current_openid");
    console.log("获取openid：" + openid);

    if (!openid) {
      openid = null;
    }

    return openid;
  },

  set_current_weiduke_token: function (weiduke_token) {
    if (!weiduke_token) {
      return;
    }

    console.log("设置weiduke_token：" + weiduke_token);

    //缓存返回数据
    wx.setStorageSync("current_weiduke_token", weiduke_token);
  },
  get_current_weiduke_token: function () {
    var weiduke_token = wx.getStorageSync("current_weiduke_token");
    console.log("获取weiduke_token：" + weiduke_token);

    if (!weiduke_token) {
      weiduke_token = null;
    }

    return weiduke_token;
  },
  

  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //读取缓存中的userid checkstr openid
      that.globalData.userInfo = that.get_user_info();
      console.log('当前登录信息：');
      console.log(that.globalData.userInfo);

      typeof cb == "function" && cb(that.globalData.userInfo);

    }
  },

  getFaquanSetting: function (that, callback_function) {
    var currentTime = (new Date()).getTime();//获取当前时间

    if (wx.getStorageSync("cms_faquan_setting") && (currentTime - wx.getStorageSync("cms_faquan_setting_time")) < 3600 * 1000) {

      var cms_faquan_setting = JSON.parse(wx.getStorageSync("cms_faquan_setting"))

      //this.globalData.cms_faquan_setting = cms_faquan_setting;
      console.log(' this.globalData.option_list===========', this.globalData.cms_faquan_setting)
      //刷新界面
      typeof callback_function == "function" && callback_function(that, cms_faquan_setting);

      return;

    } 

    var that002 = this;

    wx.request({
      url: this.globalData.http_server + 'openapi/FaquanData/get_faquan_setting',
      method: 'post',
      data: {
        sellerid: this.get_sellerid()
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var cms_faquan_setting = res.data.data;

        //保存到本地
        var cms_faquan_setting_str = JSON.stringify(cms_faquan_setting);

        //缓存返回数据
        wx.setStorageSync("cms_faquan_setting", cms_faquan_setting_str);
        var currentTime = (new Date()).getTime();//获取当前时间
        wx.setStorageSync("cms_faquan_setting_time", currentTime);

        console.log('保存乖乖兽选项：' + cms_faquan_setting_str);

        //刷新界面
        typeof callback_function == "function" && callback_function(that, cms_faquan_setting);

      },
      fail: function (e) {
        wx.showToast({
          title: '网络异常！',
          duration: 2000
        });
      },
    });

  },
  
  getOrBindTelPhone:function(returnUrl){
    var user = this.globalData.userInfo;
    if(!user.tel){
      wx.navigateTo({
        url: 'pages/binding/binding'
      });
    }
  },
  httpPost: function (url, data, cbSuccess, cbError) {
    console.log('准备请求网址：：：：' + url);
    console.log(data);

    //发起网络请求
    wx.request({
      url: url,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      data: data,
      success: function (request_res) {
        console.log('请求成功，返回内容如下：：：：');
        console.log(request_res);

        typeof cbSuccess == "function" && cbSuccess(request_res);
      },
      fail: function (request_res) {
        console.log('请求失败，返回内容如下：：：：');
        console.log(request_res);
        typeof cbError == "function" && cbError(request_res);
      },
      complete: function () {
        console.log('请求完成' + url);
      }
    })

  },

  onPullDownRefresh: function (){
    wx.stopPullDownRefresh();
  },
});





