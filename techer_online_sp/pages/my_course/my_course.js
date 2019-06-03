// pages/my_course/my_course.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    my_course_list: [{ image: '/utils/img/c1.jpg', id: '1', title: '19版最新高中英语听了提升篇B', percent: '12', read_num: '32', plan_num: '44' },
    { image: '/utils/img/c2.jpg', id: '1', title: '19版高考英语听力极速冲刺', percent: '12', read_num: '32', plan_num: '44' },
    { image: '/utils/img/c3.jpg', id: '1', title: '19版最新高中英语听了提升篇B', percent: '12', read_num: '32', plan_num: '44' }]
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
    wx.setNavigationBarTitle({ title: '我的课程' });
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