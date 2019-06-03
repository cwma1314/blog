Page({
  data: {
    art: { image:'/utils/img/home_img_book_default.png'},
    currentIndex: 0,
    chapter_list: [{
      type: '1', chapter: [{
        id: '1', title: '一、数学、日期、时间、价格', sub_titles: [{ id: '1', name: '专项一能力操作' }, { id: '2', name: '专项二考场操练' }]},
        { id: '2', title: '二、计划、行为、动作、目的', sub_titles: [{id:'2',name:'专项三能力操作'},{id:'4',name:'专项四考场操练'}]}]},
      { type: '2', chapter: [{ id: '3', title: '高中英语听力模拟试题一', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题二', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题三', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题四', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题五', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题六', sub_titles: [] }, { id: '3', title: '高中英语听力模拟试题二十', sub_titles: [] }]}],
  },
  onReady() {
    wx.setNavigationBarTitle({
      title: '课程详情'
    })
  },
  onLoad(options) {
    console.log(options.id)
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success(res) {
      }
    })
  },
  // swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  tapShowFlowerRank:function(e){
   wx.showModal({
     title: '提示?',
     content: '确定购买课程,当前课程免费!!!',
     success(res) {
       if (res.confirm) {
         wx.showToast({
           title:'已成功购买课程',
           icon: 'success',
           duration: 2000
         })
       } else if (res.cancel) {
         console.log('用户点击取消')
       }
     }
   })
  }
})