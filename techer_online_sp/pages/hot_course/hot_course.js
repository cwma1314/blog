//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    list: [{ image: '/utils/img/c1.jpg', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' },
    { image: '/utils/img/c2.jpg', id: '1', title: '19版高考英语听力极速冲刺', lisnter: '321313', chapter: '44', topic: '880' },
    { image: '/utils/img/c3.jpg', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' },
    { image: '/utils/img/home_img_book_default.png', id: '1', title: '19版最新高中英语听了提升篇A', lisnter: '321313', chapter: '44', topic: '880' },
    { image: '/utils/img/home_img_book_default.png', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' }
      , { image: '/utils/img/home_img_book_default.png', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' }],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
    value: ''
  },
  onReady:function(){
    wx.setNavigationBarTitle({ title: '热门课程' });
  },
  inputext: function (e) {
    var name = e.detail.value;
    this.setData({ value: name });
  },
  searhFinput: function (e) {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    return
    this.search(e.detail.value.name)
  },
  search: function (name) { },
  loadMore(e) {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
    return
    if (this.data.list.length === 0) return
    var date = this.getNextDate()
    var that = this
    that.setData({
      loading: true
    })
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + (Number(utils.formatDate(date)) + 1),
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.setData({
          loading: false,
          list: that.data.list.concat([{
            header: utils.formatDate(date, '-')
          }]).concat(res.data.stories)
        })
      }
    })
  },
  getNextDate() {
    const now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
  },
  onLoad(e) {
    let that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.setData({
          //list: res.data.stories
        })
      }
    })
    this.index = 1
    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function(userInfo){
    //   //更新数据
    //   that.setData({
    //     userInfo:userInfo
    //   })
    // })

  },
  setLoading(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
})