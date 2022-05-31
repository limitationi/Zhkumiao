var app = getApp()
 Page({
data: { 
 catlist: [
{ name:"海珠-奶球"},{ name:"海珠-咪咪"},{ name:"海珠-绿茶"},{ name:"海珠-小脏"},{ name:"海珠-小狮子"},{ name:"海珠-花花"},{ name:"海珠-胖子"},{ name:"海珠-小桑"},{ name:"海珠-白手套"},{ name:"海珠-海带"},{ name:"海珠-圈圈"},{ name:"海珠-大黄"},{ name:"海珠-小橘"},{ name:"海珠-大长腿"},{ name:"海珠-仙女"},{ name:"海珠-南区大黄"},{ name:"海珠-大橘"},{ name:"海珠-？"},{ name:"海珠-咕噜"},{ name:"白云-大兔"},{ name:"白云-小兔"},{ name:"白云-团团"},{ name:"白云-恶霸"},{ name:"海珠-黑猫警长"},{ name:"海珠-奶牛"},{ name:"海珠-一点白"},{ name:"海珠-呆呆"},{ name:"白云-点点"},{ name:"海珠-楼长"},{ name:"海珠-元宝"},{ name:"海珠-小艺"},{ name:"海珠-兔兔"},{ name:"海珠-猫妈"},{ name:"海珠-阿花"},{ name:"白云-小黑"},{ name:"白云-狗蛋"},{ name:"白云-三点半"},{ name:"白云-小豹子"},{ name:"白云-？"},{ name:"海珠-小白"},{ name:"海珠-小刘海"},{ name:"海珠-白毛狮王"},{ name:"白云-零点"},{ name:"白云-奶球"},
    ],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    url: app.globalData.url,
  },

  onPullDownRefresh:function(){
    wx.stopPullDownRefresh()
  },

  //转发跳转页面设置
  onLoad: function (options) {
    if (options.pageId) {
      
      wx.navigateTo({
        url: '/pages/cats/' + options.pageId + '/' + options.pageId,
      })
    }
  },

  //转发此页面的设置
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      path: 'pages/index/index',  // 路径，传递参数到指定页面。
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },

  // 搜索栏输入名字后页面跳转
  bindconfirmT: function (e) {
    console.log("e.detail.value");
    if(e.detail.value) {
    
    wx.navigateTo({
      url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
    })
  }
  }


})

