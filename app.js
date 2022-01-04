//app.js
App({
  onLaunch: function () {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
            })
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }

  },

  globalData: {
    userInfo: null,
    // url: "https://pku-lostangel.oss-cn-beijing.aliyuncs.com/",
    url:"https://l2rainbow.top/miao/",
// url:"https://gitee.com/limiti/zhkumiaoimg/raw/master/"
  },
  

})

wx.showShareMenu({
  withShareTicket: true
})

wx.setInnerAudioOption({ obeyMuteSwitch: false });
// 适应平板
wx.getSystemInfo({
  success (res) {
 
    var px = rpx / 750 * wx.getSystemInfoSync().windowWidth;
  }
})



