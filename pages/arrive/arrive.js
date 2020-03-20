// pages/arrive/arrive.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    tell:'',
    arrivedata: '',
    isarrive: '',
    longitude: '', //经度
    latitude: '', //纬度
    // 经纬度用来定位地图的中心点；
    scale: 16,
    markers: [{
      iconPath: "/image/icon_blue/location.png",
      id: 0, 
      latitude: 31.86715,
      longitude: 106.74733,
      width: 30,
      height: 30,
      callout: {
        content: '我的位置', color: 'while', fontSize: 16,
        borderRadius: 5, borderWidth: 1, borderColor: "#6699FF",
        bgColor: '#6699FF', padding: 10, display: "ALWAYS", textAlign: 'center'
      },
    }],
  },
  // 签到获取位置信息（经纬度）
  arrivelocation() {
    var myset=this;
    wx.authorize({
      scope: 'scope.userLocation',
      success() {
        console.log(222222);
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              const latitude = res.latitude
              const longitude = res.longitude
              const speed = res.speed
              const accuracy = res.accuracy;
              console.log("-----------")
              console.log(latitude);
              console.log(longitude);
              myset.setData({
                longitude: res.longitude,
                latitude: res.latitude
              });
            }
          })
        wx.showToast({
          title: '定位成功',
          icon: 'success',
          duration: 2000
        })
        // wx.showLoading({
        //     title: '定位中',
        //   })
        // setTimeout(function () {
        //   wx.hideLoading()
        // }, 1000)
      },
      fail(){
        wx.showLoading({
          title: '定位失败',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1000)
      }
    })
  },
  openlocation(){
    wx.openSetting({
      success(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        // console.log('经度：', longitude)
        // console.log('纬度：', latitude)
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        });
        if (longitude >= 106.74633 && longitude <= 106.74833 && latitude > 31.86615 && latitude < 31.86815) {
         that.setData({
           isarrive:'在签到范围内' 
         })
        }
        else{
          that.setData({
            isarrive: '不在签到范围内'
          })
        }

      }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})