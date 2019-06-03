// pages/personal_info/personal_info.js
Page({

  /**
    * 页面的初始数据
    */
  data: {
    region: ['安徽省', '合肥市', '包河区'],
    customItem: '全部',
    date: "1992-10-12",
  },
  /**
   * 获取表单数据
   */
  submitData: function (event) {
    console.log(event.detail.value)
    wx.showToast({
      title: '数据修改成功',
    })
  },
  /**
 * 获取行业数据
 */
  bindCityChange: function (e) {
    this.setData({
      region: e.detail.value
    })

  },
  /**
 * 获取日期数据
 */
  bindDateChange: function (event) {
    this.setData({
      date: event.detail.value
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
  wx.setNavigationBarTitle({
    title: '完善个人信息',
  })
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