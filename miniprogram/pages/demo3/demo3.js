// pages/demo3/demo3.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList:[]
    },
    getData(page=0,num=5){
        wx.cloud.callFunction({
            name:"getData",
            data:{
                num:num,
                page:page
            }
        })
        .then(res=>{    
            this.setData({
              dataList:this.data.dataList.concat(res.result.data)
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getData(0,4);
    },

    

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        var page=this.data.dataList.length
        console.log(page)
        this.getData(page,4) 
    },

})