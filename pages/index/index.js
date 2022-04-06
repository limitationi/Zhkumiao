var app = getApp()
 Page({
data: { 
 fostered_catlist: [
{ name:"黄仔"},
{ name:"呼呼"},
],
 unknown_catlist: [
{ name:"圆圆"},
],
 dead_catlist: [
],
    screenWidth: 0,
    screenHeight: 0,
    imgwidth: 0,
    imgheight: 0,
    navbar: ['在校', '毕业', '休学', '喵星'],
    currentTab: 0,
    url: app.globalData.url,
    imgList: [ 
      "/pages/images/1.jpg", 
    ] 
  }, 
  preview(event) { 
    console.log(event.currentTarget.dataset.src) 
    let currentUrl = event.currentTarget.dataset.src 
    wx.previewImage({ 
      current: currentUrl, // 当前显示图片的http链接 
      urls: this.data.imgList // 需要预览的图片http链接列表 
    }) 
  }, 
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  iconType: [
    'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
  ],

  onPullDownRefresh: function () {
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

  // 转发到朋友圈
  onShareTimeline: function (res) {
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
    if (e.detail.value) {
      wx.navigateTo({
        url: '/pages/cats/' + e.detail.value + '/' + e.detail.value,
      })
    }
  },
  copyTBL: function (e) {
    var self = this;
    wx.setClipboardData({
      data: '北大猫协',//需要复制的内容
      success: function (res) {
        // self.setData({copyTip:true}),

      }
    })
  },

})

