//index.js
//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    list: [{ image: '/utils/img/c1.jpg', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter:'44', topic:'880'},
      { image: '/utils/img/c2.jpg', id: '1', title: '19版高考英语听力极速冲刺', lisnter: '321313', chapter: '44', topic: '880' },
      { image: '/utils/img/c3.jpg', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' },
      { image: '/utils/img/home_img_book_default.png', id: '1', title: '19版最新高中英语听了提升篇A', lisnter: '321313', chapter: '44', topic: '880' },
      { image: '/utils/img/home_img_book_default.png', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' }
      , { image: '/utils/img/home_img_book_default.png', id: '1', title: '19版最新高中英语听了提升篇B', lisnter: '321313', chapter: '44', topic: '880' }],
    banner:[{image:'/utils/img/c1.jpg',title:'',id:'1'},
      { image: '/utils/img/c2.jpg', title: '', id: '2' },
      { image: '/utils/img/c3.jpg', title: '', id: '3' }],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    my_course_list: [{ image: '/utils/img/c1.jpg', id: '1', title: '19版最新高中英语听了提升篇B', percent: '12', read_num: '32', plan_num:'44'},
      { image: '/utils/img/c2.jpg', id: '1', title: '19版高考英语听力极速冲刺', percent: '12', read_num: '32', plan_num: '44' },
      { image: '/utils/img/c3.jpg', id: '1', title: '19版最新高中英语听了提升篇B', percent: '12', read_num: '32', plan_num: '44' }]
  },
  //事件处理函数
  bindViewTap(e) {
    wx.navigateTo({
      url: '../banner_detail/banner_detail?id=' + e.target.dataset.id
    })
  },
  bindViewMyMoreTap(e) {
    wx.navigateTo({
      url: '../my_course/my_course?id='
    })
  },
  bindViewHotMoreTap(e){
    wx.navigateTo({
      url: '/pages/hot_course/hot_course',
    })
  },
  onLoad() {
    let that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.setData({
          //banner: res.data.top_stories,
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

  }
})
