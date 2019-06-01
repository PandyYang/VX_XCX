Page({
  data:{
    array:[
      {id:"1001",name:"v中国",value:"中国",checked:true,color:"red",disabled:false},
      { id: "1002",name: "v美国", value: "美国", checked: true, color: "blue", disabled: false },
      { id: "1003",name: "v日本", value: "日本", checked: false, color: "black", disabled: true }
    ]
  },
  changed:function(e){
  },
  formSubmit:function(e){
  },
  formReset:function(){
    console.log("data has been resteed!")
  }
})