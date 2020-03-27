//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isshow: true,
    phone: "",
    pwd: "",
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    let {
      phone,
      pwd,
    } = e.detail.value;
    if (!phone || !pwd) {
      this.setData({
        warn: "学号或密码为空！",
        isSubmit: true
      })
      return;
    }
    wx.login({
      success(res) {
        console.log(res)
        //{errMsg: "login:ok", code: "033vKQ0V0dLF0Z1Xke2V0QPI0V0vKQ0M"}
        wx.request({
          url: 'http://localhost:8100/getUserid',
          data: { "code": res.code },
          method: 'post',
          success(res) {
            console.log('后台返回的数据：', JSON.parse(res.data.data[0]))
            // { session_key: "", expires_in: 7200, openid: "" }
          },
          error(res) {
            console.log('err:', res)
          }
        });
      }
    })
    this.setData({
      ishow: false,
      phone,
      pwd,


    })
  },
  // 自定义的方法：

})