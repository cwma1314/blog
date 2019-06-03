const app = getApp()
var innerAudioContext = '';
var playing = false
var areaWidth //播放进度滑块移动区域宽度
var viewWidth //播放进度滑块宽度
var lastTime //滑块移动间隔计算
Page({
  onReady: function(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    //this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    tab: 0,
    cs_id:'',
    navTitle:'',
    cs_type:'2',//章节类型 1：专项2模拟
    winHeight: "",//窗口高度
    is_show_answer:false,//是否显示答案
    // 展开折叠
    selectedFlag: false,
    uhide:'-1',
    list01: [
      { item_id: 1 }, { item_id: 11 }, { item_id: 11 },
    ],
    voice: {
      playing: false, //是否正在播放
      canPlay: false, //是否可以播放、加载完毕
      time: {}, //当前播放时间
      tip: "19版最新高中英语听力",
      src: "http://114.115.206.179:8181/teacher/test1.mp3",
      margin: 0
    },
    specials: {preface: '<p><span style=\"font-family:宋体\">&nbsp;&nbsp;冰冻三尺非一日之寒，英语听力能力的习得需要慢火常温，循序渐进，不断操练。在专项“能力操练”里，我们安排了精听的练习，同学们需要仔细听每一个音频，并做记录，以笔答的形式完成任务。精听是泛听的基础和前沿，只有精听打好扎实基础，大量的泛听才有意义，否则泛听就等于盲听，如八戒吃人参果</span><span style=\"font-size:13px;font-family:宋体\">——</span><span style=\"font-family:宋体\">囫囵吞枣，收获甚微。</span></p><p style=\"text-align: center;\"><strong>一、数字、日期、时间、价格</strong></p><p><span style=\"font-family:宋体\">&nbsp;&nbsp;在高考英语听力中，跟数字有关的考题总结归纳起来，就是数字、日期、时间、价格四大方面。</span></p><p><span style=\"font-family:宋体\">常见题干有：</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Whattime...?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Howmuchis...?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Howmany...?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Atwhatage...?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Howlong...?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Whenwillthemanmeet...?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Whattimeisitnow?</span></p><p><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">Whendoesthetrainleave?</span></p><p><span style=\"font-family:宋体\">以2017年和2018年全国卷为例，在试卷中出现了1或2道此类考题，约占整套试题的5%</span><span style=\"font-family:宋体\">~</span><span style=\"font-family:宋体\">10%。</span></p><p><strong><span style=\"font-family:宋体\">【</span><span style=\"font-family:宋体\">相关表达</span><span style=\"font-family:宋体\">】</span></strong></p><p><span style=\"font-family:宋体\">数字表达：</span><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">quarter,twice,one-third,couple,half(of),double,twiceasmuch/manyas,compared,off,above,below,among,rising,increasing,fewer,about,onaverage,around,over,majority,percentage,population,discount,normalprice/originalprice,servicecharge,reservationnumber,newrate</span></p><p><span style=\"font-family:宋体\">时间表达：</span><spanstyle=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">before,after,until,rightnow,bythistime,thelasttime,from...to...,infifteenminutes,Firstly...secondly...,check-indate,check-outdate</span></p><p><span style=\"font-family:宋体\">同级比较：</span><span style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">as...as...,notas/notso...as...,twice(half)as...as...</span></p><p><span style=\"font-family:宋体\">不同级比较：</span><spa style=\"font-family:&#39;Times New Roman&#39;,&#39;serif&#39;\">more/less...than,notmore...than,never/nothingbetter,thaneverbefore,thananyone/anythingelse</span></p><p><strong><span style=\"font-family:宋体\">【</span><span style=\"font-family:宋体\">解题技巧</span><span style=\"font-family:宋体\">】</span></strong></p><p><span style=\"font-family:宋体\">听力材料中涉及的数字，常会以基数词、序数词、小数、百分比等形式出现，这就要求学生辨别各种形式的数字，熟悉数字之间的关系，能够速记跟解题相关的数字。很多题目的答案不是简单的数字信息再现，而是需要经过简单的运算才能得出，学生需要加倍小心这类数字计算题。</span></p><p><br/></p>', url: 'http://114.115.206.179:8181/teacher/test.mp3', chapters: [{ name: '专项一 能力训练', topics: [{ id: '1', type: '1', name: '听下面6组数据。每组数字读两遍。', options: '<p>(1)_______________&nbsp; &nbsp;(2)_______________&nbsp; &nbsp; (3)________________</p ><p>(4)_______________&nbsp; &nbsp;(5)_______________&nbsp; &nbsp;(6)________________&nbsp;&nbsp;<br /></p>', answer: [{ index: '1', value: 'A' }, { index: '2', value: 'A' }, { index: '3', value: 'A' }, { index: '4', value: 'A' }, { index: '5', value: 'A' }, { index: '6', value: 'A' }], score: '2', originaltxt: 'fqwefqwfqwfwqfqwfqwfqwff', analysis: '' }, { id: '2', type: '1', name: '听下面4组电话号 码。每组号码读两遍。', options: '<p>(7)_______________&nbsp; &nbsp;(8)_______________&nbsp; &nbsp; (9)________________&nbsp; &nbsp;(10)_______________</p>', answer: [{ index: '7', value: 'A' }, { index: '8', value: 'A' }, { index: '9', value: 'A' }, { index: '10', value: 'A' }], score: '2', originaltxt: '', analysis: '' }, { id: '3', type: '1', name: '听下面1段对话,完成表格。独白读两遍。', options: '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width:500px\"> 	<tbody> 		<tr> 			<td>Activity</td> 			<td>(11)________________</td> 		</tr> 		<tr> 			<td>Time</td> 			<td>(12)________________</td> 		</tr> 		<tr> 			<td>Day</td> 			<td>(13)________________</td> 		</tr> 	</tbody> </table>  <p>&nbsp;</p> ', answer: [{ index: '11', value: 'A' }, { index: '12', value: 'A' }, { index: '13', value: 'A' }, { index: '14', value: 'A' }, { index: '15', value: 'A' }, { index: '16', value: 'A' }], score: '2', originaltxt: '', analysis: '' }, { id: '4', type: '1', name: '听下面1段对话,完成表格。对话读两遍。', options: '<table><tbody><tr class=\"firstRow\">             <td valign=\"top\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"145\">                 Fruit             </td>             <td valign=\"top\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"682\">                 Price             </td>         </tr>         <tr>             <td valign=\"top\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"145\">                 Apple             </td>             <td valign=\"top\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"682\">                 (17)________________yuan each.             </td>         </tr>         <tr>             <td valign=\"top\" colspan=\"1\" rowspan=\"1\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"145\">                 Pineapple             </td>             <td valign=\"top\" colspan=\"1\" rowspan=\"1\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"682\">                 (18)________________yuan each.             </td>         </tr>         <tr>             <td valign=\"top\" colspan=\"1\" rowspan=\"1\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"145\">                 Banana             </td>             <td valign=\"top\" colspan=\"1\" rowspan=\"1\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"682\">                 (19)________________yuan for a bunch.             </td>         </tr>         <tr>             <td valign=\"top\" colspan=\"1\" rowspan=\"1\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"145\">                 Kiwi             </td>             <td valign=\"top\" colspan=\"1\" rowspan=\"1\" style=\"word-break: break-all; border:1px solid #000000;\" width=\"682\">                 (20)_____________yuan for four;(21)__________yuan for nine.             </td>         </tr>     </tbody> </table>', answer: [{ index: '17', value: 'A' }, { index: '18', value: 'A' }, { index: '19', value: 'A' }, { index: '20', value: 'A' }], score: '2', originaltxt: '', analysis: '' }] }] },
tests: {
  preface: '', url: 'http://114.115.206.179:8181/teacher/test.mp3', chapters: [{
    name: '第一节', topics: [{ type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.vdsvsdvdvvewwegwevewvwev' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A'], score: '2', originaltxt: 'efefewfewffwe', analysis: '' }, {
          type: '2',name:'How is the weather today?',options:[{name:'A',value:'A.BeiJing opera.'},{name:'B',value:'B.Russian ballet.'},{name:'C',value:'C.Western opera.'}],answer:['A']},{type:'2',name:'How is the weather today?',options:[{name:'A',value:'A.BeiJing opera.'},{name:'B',value:'B.Russian ballet.'},{name:'C',value:'C.Western opera.'}],answer:['A']},{type:'2',name:'How is the weather today?',options:[{name:'A',value:'A.BeiJing opera.'},{name:'B',value:'B.Russian ballet.'},{name:'C',value:'C.Western opera.'}],answer:['A']},{type:'2',name:'How is the weather today?',options:[{name:'A',value:'A.BeiJing opera.'},{name:'B',value:'B.Russian ballet.'},{name:'C',value:'C.Western opera.'}],answer:['A']},{type:'2',name:'How is the weather today?',options:[{name:'A',value:'A.BeiJing opera.'},{name:'B',value:'B.Russian ballet.'},{name:'C',value:'C.Western opera.'}],answer:['A']}]},
        {
          name: '第二节', topics: [{ type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.vdsvsdvdvvewwegwevewvwev' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A'] }, {
            type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A']
          }, { type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A'] }, { type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A'] }, { type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A'] }, { type: '2', name: 'How is the weather today?', options: [{ name: 'A', value: 'A.BeiJing opera.' }, { name: 'B', value: 'B.Russian ballet.' }, { name: 'C', value: 'C.Western opera.' }], answer: ['A'] }]
        }]}
  },
  onReady:function(){
    var that = this;
    wx.setNavigationBarTitle({ title: that.data.navTitle });
  },
  onUnload: function () {//如果页面被卸载时被执行
    innerAudioContext.stop();
  },
  onLoad: function (obj) {
    var that = this;
    //接收上一个页面传过来的参数
    if (obj && obj.id) {
      this.setData({ 
        cs_id: obj.id,
        navTitle: obj.title || '课程测试',
        cs_type: obj.type
      })
    }
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 180;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    });
    
    //第一次进来应该获取节点信息，用来计算滑块长度
    if (areaWidth == undefined || areaWidth == null || viewWidth == undefined || viewWidth == null) {
      var query = wx.createSelectorQuery()
      setTimeout(function () { //代码多的情况下需要延时执行，否则可能获取不到节点信息
        //获取movable的宽度，计算改变进度使用
        query.select('#movable-area').boundingClientRect(function (rect) {
          areaWidth = rect.width
        }).exec()
        query.select('#movable-view').boundingClientRect(function (rect) {
          viewWidth = rect.width // 节点的宽度
        }).exec()
      }, 1000)
    }
    innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.src = that.data.voice.src
    //播放
    innerAudioContext.obeyMuteSwitch = false
    innerAudioContext.autoplay = false
    innerAudioContext.onPlay(() => {
      console.log('onPlay')
      playing = true
      that.data.voice.playing = true
      that.data.voice.canPlay = true //加载完成后可以
      that.setData({
        voice: that.data.voice
      })
    })
    innerAudioContext.onStop(() => {
      console.log('onStop')
      playing = false
      that.data.voice.playing = false

      that.setData({
        voice: that.data.voice
      })
    })
    innerAudioContext.onPause(() => {
      console.log('Pause')
      playing = false
      that.data.voice.playing = false
      that.setData({
        voice: that.data.voice
      })
    })
    //播放进度
    innerAudioContext.onTimeUpdate(() => {
      that.data.voice.progress = Math.round(100 * innerAudioContext.currentTime / innerAudioContext.duration)
      that.data.voice.time = dateformat(Math.round(innerAudioContext.currentTime))
      that.data.voice.margin = Math.round((areaWidth - viewWidth) * (innerAudioContext.currentTime / innerAudioContext.duration)) //计算当前滑块margin-left
      that.setData({
        voice: that.data.voice
      })
    })
    //播放结束
    innerAudioContext.onEnded(() => {
      console.log("onEnded")
      playing = false
      that.data.voice.progress = 100
      that.data.voice.playing = false
      that.data.voice.time = dateformat(Math.round(innerAudioContext.duration))
      that.data.voice.margin = Math.round(areaWidth - viewWidth)
      that.setData({
        voice: that.data.voice
      })

    })
    //播放错误
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
      playing = false
      that.data.voice.playing = false
      that.setData({
        voice: that.data.voice
      })
      wx.showToast({
        title: '错误:' + res.errMsg,
        icon: "none"
      })
    })

  },
  //移动结束再setData，否则真机上会产生 “延迟重放” 
  seekTouchEnd: function (e) {
    var that = this
    setTimeout(function () {
      that.setData({
        voice: that.data.voice
      })
      innerAudioContext.seek(innerAudioContext.duration * (that.data.voice.progress / 100))
      innerAudioContext.play()
    }, 300)
  },
  //移动音频滑块，此处不能设置moveable-view 的x值，会有冲突延迟
  voiceSeekMove: function (e) {
    var that = this
    if (e.detail.source == "touch") {
      innerAudioContext.stop()
      if (that.data.voice.canPlay) {
        var progress = Math.round(e.detail.x / (areaWidth - viewWidth) * 100)
        that.data.voice.progress = progress
        that.data.voice.margin = e.detail.x
        that.data.voice.time = dateformat(Math.round(innerAudioContext.duration * (that.data.voice.progress / 100)))
      }
    }
  },
  //点击播放、暂停
  voiceClick: function () {
    var playing2 = this.data.voice.playing
    if (playing2) {
      innerAudioContext.pause()
    } else {
      innerAudioContext.play()
    }
  },
  radioChange(e) {
    var that = this;
    var radioValue = e.detail.value;
    that.setData({
      topic_value: radioValue
    })
    console.log(that.data.topic_value);
  },
  tab_slide: function (e) {//滑动切换tab 
    var that = this;
    that.setData({ tab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.tab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        tab: e.target.dataset.current
      })
    }
  },
  // 展开折叠选择  
  changeToggle: function (e) {
    var that= this;
    let selectedFlag = false;
    if (that.data.selectedFlag) {
      selectedFlag = false;
    } else {
      selectedFlag = true;
    }
    this.setData({
      selectedFlag: selectedFlag
    })
  },
  changeOriginalTxt: function (event){
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.target.dataset.productid;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: '-1'
      })
    } else {
      that.setData({
        uhide: itemId
      })
    } 
  },
  tapShowFlowerRank: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定提交试题吗?请检查!',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '正在提交试题...',
            mask: true
          })
          that.setData({
            is_show_answer: true
          });
          setTimeout(function () {
            wx.hideLoading()
          }, 2000)
        } else if (res.cancel) {
        }
      }
    })
  }
})
function dateformat(second) {
  //天
  var day = Math.floor(second / (3600 * 24))
  // 小时位
  var hour = Math.floor((second - day * 3600 * 24) / 3600);
  // 分钟位
  var min = Math.floor((second - day * 3600 * 24 - hour * 3600) / 60);
  // 秒位
  var sec = (second - day * 3600 * 24 - hour * 3600 - min * 60); // equal to => var sec = second % 60;

  return {
    'day': day,
    'hour': p(hour),
    'min': p(min),
    'sec': p(sec)
  }
}
//创建补0函数
function p(s) {
  return s < 10 ? '0' + s : s;
}