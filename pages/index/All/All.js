var app = getApp()
 Page({
data: { 
 catlist: [
{ name:"奶球"},{ name:"咪咪"},{ name:"绿茶"},{ name:"小脏"},{ name:"小狮子"},{ name:"花花"},{ name:"胖子"},{ name:"小桑"},{ name:"白手套"},{ name:"海带"},{ name:"圈圈"},{ name:"大黄"},{ name:"小橘"},{ name:"大长腿"},{ name:"仙女"},{ name:"南区大黄"},{ name:"大橘"},{ name:"？"},{ name:"咕噜"},{ name:"黑猫警长"},{ name:"奶牛"},{ name:"一点白"},{ name:"呆呆"},{ name:"楼长"},{ name:"元宝"},{ name:"小艺"},{ name:"兔兔"},{ name:"猫妈"},{ name:"阿花"},{ name:"小白"},{ name:"拎拎"},{ name:"小刘海"},{ name:"白毛狮王"},
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

