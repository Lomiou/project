require(['config'],function(){
  require(['jquery'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    //选择注册方式
    
    // $('.reg-nav a').eq(0).on('click',function(){
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $('.reg-viw .phoneReg').prop('display','none');
    //   $('.reg-viw .emailReg').prop('display','blcok');
    // })

    // $('.reg-nav a').eq(1).on('click',function(){
    //   $(this).addClass('active').siblings().removeClass('active');
    //   $('.reg-viw .emailReg').prop('display','none');
    //   $('.reg-viw .phoneReg').prop('display','blcok');
    // })
    //默认邮箱注册认证
   
    // if($($('.reg-nav a')[0]).hasClass('active')){
      // $('.reg-viw .emailReg').addClass('show')
      // $('.reg-viw .phoneReg').removeClass('show')
      var $email
      $('#inputEmail3').on('blur',function(){
        //获取邮箱的value值
        // let $email = $('#inputEmail3').val();
        $email = $('#inputEmail3').val();
        if(!/^[a-z0-9][\w\-]{2,29}@[a-z0-9\-]{2,67}\.[a-z]{2,6}$/.test($email)){
          $('#inputEmail3').next().removeClass('hide');
          return false;
        }
        else{
          // $('#inputEmail3').next().removeClass('hide').text('可以使用').addClass('g-0');
          $.ajax({
            type:'GET',
            url:"../api/reg.php",
            data:{username:$email},
            success:function(data){
              if(data === 'no'){
                $('#inputEmail3').next().removeClass('hide').text('邮箱已注册').addClass('r-0');
              }else{
                $('#inputEmail3').next().removeClass('hide').text('可以使用').addClass('g-0');
              }
            }
  
          });
        }

        //验证是否注册
       
      });
    
    //手机号注册
    // if($($('.reg-nav a')[1]).hasClass('active')){
     
      // $('#inputEmail2').on('blur',function(){
      //   //获取手机号的value值
      //   let $phone = $('#inputEmail2').val();
  
      //   if(!/^1[3-9]\d{9}$/.test($phone)){
      //     $('#inputEmail2').next().removeClass('hide');
      //     return false;
      //   }else{
      //     $('#inputEmail2').next().removeClass('hide').text('可以使用').addClass('g-0');
      //   }
      // });


      //密码验证
      var $password1;
      $('#inputPassword3').on('blur',function(){
        //获取密码框的value值
        // let $password1 = $('#inputPassword3').val();
        $password1 = $('#inputPassword3').val();
        //判断密码是否为空
        if($password1.length === 0){
          $('#inputPassword3').next().removeClass('hide');
          return false;
        }else if($password1.length < 6 || $password1.length > 18 || /\d{6,18}/.test($password1) || /[a-zA-Z]{6,18}/.test($password1) || !/[a-zA-z\d]{6,18}/.test($password1)){
          $('#inputPassword3').next().removeClass('hide g-0').text('密码位6~18位的数字和字母组合');
        }else{
          $('#inputPassword3').next().removeClass('hide').text('成功').addClass('g-0');
        }
      });
      //验证二次密码
      $('#inputPassword2').on('blur',function(){
        let $password2 = $('#inputPassword2').val();
        if($password2 != $('#inputPassword3').val()){
          $('#inputPassword2').next().text('两次输入的密码不一致').addClass('r-0');
        }else{
          $('#inputPassword2').next().text('成功').addClass('g-0');
        }
      });
      
      $('.btn-submit').on('click',function(){
        $email = $('#inputEmail3').val();
        $password1 = $('#inputPassword3').val();
        if($email ==='' || $password1 ===''){
          alert('请输入邮箱或密码');
          return false;
        }else if(!$('.checkbox #pdu')[0].checked){
          alert('请勾选用户协议');
          return false;
        }else{
          console.log($email)
          console.log($password1)
          $.ajax({
            type:"POST",
            url:"../api/register.php",
            data:{username:$email,password:$password1},
            success:function(data){ 
              console.log(data)
              if(data === 'success'){
                window.location.reload()
                $(location).attr('href','../index.html')
                
              }
            },
            // dataType:'json'
          })
      //     $.post(
      //       '../api/register.php',{"username":"$email","password":"$password1"},
      //       function(data){
      //         if(data === 'success'){
      //           console.log(999)
      //           window.location().reload();
      //           $(location).attr('href','../index.html')
      //         }
      //   },
      //     "json"
      // )

        }
        //需要补充跳转注册成功界面
      
       
      })

    })
  })
