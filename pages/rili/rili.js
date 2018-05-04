// pages/rili/rili.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    nowyue: new Date().getMonth()  , //当前月
    nowyear: new Date().getFullYear()  //当前年

  },
  IsLeap(year) {
    return (year % 100 == 0) ? ((year % 400 == 0) ? 1 : 0) : ((year % 4 == 0) ? 1 : 0);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.yue(this.data.nowyue,this.data.nowyear)



  },


  // 月份
  yue(getmonth,year){
 
    var dayMouth = [31, 28 + this.IsLeap(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   //所有的月份
    var mouth = getmonth;  //当前是几月

    var mouthDays = dayMouth[mouth];   //拿到这个月多少天

    var date = new Date(year, mouth, 1);   //当前月的第一天是星期几
    var nowDay = date.getDay();

    var trCount = Math.ceil((mouthDays + nowDay) / 7);   //多少行
    
    var arrdata = [];  //所有的数字
    var removedata = []  //要删除的数字
    for (var i = 0; i < trCount; i++) {
      /*日历每行数据的开头*/
      for (var j = 0; j < 7; j++) {
        var idx = i * 7 + j; //表单的自然序号
        var data = idx - nowDay + 1; //当前表格的日期数
        arrdata.push(data)
        if (data <= 0 || data > mouthDays) {
          removedata.push(data)
        }
      }
    }
// 判断两个数组，如果所有的里面有要删除的数字，那么久让他为空
    for (var i = 0; i < arrdata.length; i++) {
      for (var j = 0; j < removedata.length; j++) {
        if (arrdata[i] == removedata[j]) {
          arrdata[i] = " "
        }
      }
    }
    this.setData({
      day: arrdata
    })

  },

  // 下月
  next(){
    if (this.data.nowyue >10){
      this.setData({
        nowyue: 0,
        nowyear: this.data.nowyear+1
      })
    }else{
      this.setData({
        nowyue: this.data.nowyue + 1
      })
    }

    
    this.yue(this.data.nowyue,this.data.nowyear)
  },

  // 上月
  up(){
    console.log(this.data.nowyue)
    if (this.data.nowyue < 1){
      this.setData({
        nowyue: 11,
        nowyear: this.data.nowyear -1
      })
    }else{
      this.setData({
        nowyue: this.data.nowyue - 1
      })
    }
  
    this.yue(this.data.nowyue, this.data.nowyear)
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