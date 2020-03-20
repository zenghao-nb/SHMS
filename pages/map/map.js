// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:"",
    latitude:"",
    scale:15,
    markers: [],//气泡
    polygons:[{
      points:[
        { latitude: 31.56751, longitude: 104.6796},
        { latitude: 31.56751, longitude: 104.1796 },
        { latitude: 31.66751, longitude: 104.1796 },
        { latitude: 31.66751, longitude: 104.6796 },
      ],
      strokeWidth:4,
      strokeColor:"#ff00ff",
      fillColor:"#ffff00"
    }]
  },
  scaleJia(){
    // const mapCtx=wx.createContext('map',this);
    // console.log(mapCtx)
    let number=this.data.scale;
    number++;
    if(number>20){
      number=20;
    }
    
    this.setData({
      scale:number
    })
  },
  scaleJian() {
    // const mapCtx=wx.createContext('map',this);
    // console.log(mapCtx)
    let number = this.data.scale;
    number--;

    if (number < 3) {
      number = 3;
    }
    this.setData({
      scale: number
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that=this;
    // 获取授权
    wx.getSetting({
      success(res){
        console.log(res);
        if(res.authSetting['scope.userLocation']){
          //if为正，用户已经授权地理位置
          //直接获取用户的地理信息：经纬度
          wx.getLocation({
            type: 'wgs84',
            altitude:true,
            success: function(res) {
             console.log(res);
              that.setData({
                longitude: res.longitude,
                latitude: res.latitude,
                
                markers: [{
                  iconPath: "/image/location.png",
                  id: 0,
                  latitude: res.latitude,
                  longitude: res.longitude,
                  width: 50,
                  height: 50,
                  callout: {
                    content: '成都东软A6',
                    // color: '#ff0000',
                    // fontSize:20,
                    // bgColor: 'green',
                    // boederColor: "red",
                    // borderRadio: 2,
                    // borderWidth: 2

                  },
                  label: {
                    content: '成都东软A6'
                  }

                }]
              })
             
              // 获取地理名字
              wx.chooseLocation({
                success: function (res) {
                  console.log(res)
                },
              })
            },
            
          })
        }
        else{
          //反之，用户没有授权地理位置
          //再次发起授权，调用授权的接口==>>获取用户地理位置
          //如果用户拒绝？
          wx.authorize({
            scope: 'scope.userLocation',
            //获取用户地理信息
            success(){
              wx.getLocation({
                success: function(res) {
                  console.log(res)
                  //修改经纬度，定位用户
                    that.setData({
                    longitude:res.longitude,
                    latitude:res.latitude,
                    markers: [{
                      iconPath: "/image/dd.png",
                      id: 0,
                      latitude: res.latitude,
                      longitude: res.longitude,
                      width: 50,
                      height: 50,
                      callout: {
                        content: '成都东软A6',
                        color: '#ff0000',
                        fontSize: 20,
                        bgColor: 'green',
                        boederColor: "red",
                        borderRadio: 2,
                        borderWidth: 2

                      },
                      label: {}

                    }]
                  })
                
                  wx.chooseLocation({
                    success: function(res) {
                    console.log(res)
                    },
                  })
                },
              })
            },
            fail(){
              //授权失败
              //引导用户主动点击按钮授权
                console.log("授权失败")
            }

          })
        }
      }
    })
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

  },

})