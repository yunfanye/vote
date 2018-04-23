/*
本模板实现3个功能：
  1、获取fromClickId
  2、定义转发参数fromClickId
  3、添加转发记录（可选）
*/
//其他实现参考shareModule.js文件
var app = getApp()  //1、获取app实例（必要）
Page({
  onLoad: function (opt) {  //2、opt参数（必要）
    app.globalData.fromClickId = opt.fromClickId  //3、“启动页”启动时获取fromClickId,并存到全局中，供shareModule.js（必要）
    wx.showShareMenu({  //4、分享时带上shareTicket（必要）
      withShareTicket: true
    })
  },
  onShareAppMessage: function (res) {
    return {
      path: `${getCurrentPages()[0].route}?fromClickId=${app.globalData.clickId}`,//5、定义转发参数，转发其他页面时需修改（必要）

      success: (res) => { //6、用于转发时添加或更新一条转发记录。为非用户关系网必要条件，只是添加该用户的分享记录（可选）
        console.log('成功更新一条转发记录!')
      }

    }
  }
}) 