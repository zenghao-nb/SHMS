// pages/holidayWrite/holidayWrite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sdate: '2019-09-01',
    edate: '2019-09-03',
  },
  // 离校时间
  bindDateChanges: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sdate: e.detail.value
    })
  },
  // 到校时间
  bindDateChangee: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      edate: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})