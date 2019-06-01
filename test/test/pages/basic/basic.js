Page({

  /**
   * 页面的初始数据
   */
  data: {
    mycontent:'test',
    mycontent2:[
      {
        name:"img",
        attrs:{
          class:"course-banner",
          src:"//img1.sycdn.imooc.com/szimg/5cda946c0826e4c006000338.jpg"
        }
      }
    ],
    addPrecent:function() {
      var newpercent = this.data.mypercent + 20;
      this.setData({
        mypercent :newPercent
      })
    }
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