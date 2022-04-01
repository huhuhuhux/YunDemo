var db=wx.cloud.database();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataObj:""
    },
//查询数据
    getData(){
        db.collection("demolist").where({
            age:18
        })
        .get().then(res=>{
                console.log(res)
                this.setData({
                    dataObj:res.data
                    })
         })
    },

    //添加数据
    addData(){
        wx.showLoading({
            title: '数据加载中哦，请等一下',
            mask: true,
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
        db.collection("demolist").add({
            data:{
                name:"华为",
                age:55,
                sex:"无"
            }
        }).then(res=>{
            console.log(res);
            
        })
    },

    btnSub(res){
        
        //var {name,age,home}=res.detail.value;
        //存入对象
        var user = res.detail.value;
        db.collection("demolist").add({
            data:user
        }).then(res=>{
            console.log(res);
            
        })


    }


})