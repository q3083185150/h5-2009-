// // 登录页选项卡切换
// $('.e-mail').click(function(){
//   $('.box1').css({
//       display:'block'
//   })
//   $('.box2').css({
//     display:'none'
// })
// })
// $('.number').click(function(){
//     $('.box1').css({
//         display:'none'
//     })
//     $('.box2').css({
//       display:'block'
//   })
// })

// // 利用jquery ajax方法发送请求
// $.ajax({
//     url:"",
//     data:{
        
//     }
// })


$(".btn").click(function(){
    console.log("123")
    var username= $(".username")[0].value 
    // console.log(username)
   var userpass=$(".userpass")[0].value 
   $.ajax({
       url:"../../model/login.php",
       data:{uname:username,upass:userpass},
       dataType:"json",
    success:function(res){
       console.log(res)
        if(res[0].username==username&&res[0].userpass==userpass){
            alert("登录成功")
            // location.href="../bmall.html"
            window.open("http://localhost/pinyougou/zhuye.html")
          
        }else{
            alert("用户名或密码错误")
        }

    },
    error:function(){
        alert("请求失败")
    }
   })
})