require(['config'],function(){
  require(['jquery'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    $('.reg-viw .code .authcode').on('click',function(){
      randomCode();
    })
    function randomCode(){
      let code = '';
      for( let i = 0; i < 4; i++){
        code += parseInt(Math.random() *10)
      }
      $('.reg-viw .code .authcode').html(code)
      return code;
    }
    randomCode();
    //数据验证
    var incode;
    var aucode;
    $('.code input').on('blur',function(){
      aucode = $('.reg-viw .code .authcode').html();
      incode = $('.code input').val();
      if(incode === ''){
        alert('请输入验证码');
        return false;
      }else if( incode != aucode){
        alert('验证码输入不正确')
      }
    })

    console.log($('input.btn-login'))
    $('input.btn-login').on('click',function(){
      //获取用户名密码
      let user = $('input#user').val();
      let psw = $('input#psw').val();
      if(user ===''|| psw === ''){
        alert('请输入用户名和密码');
        return false;
      }else if(incode === ''){
        alert('请输入验证码');
        return false;
      }
      console.log(88)
      $.ajax({
        // type:'POST',
        url:'../api/login.php',
        data:{username:user,password:psw},
        success:function(data){
          if(data === 'success'){
            window.location.reload()
            $(location).attr('href','../index.html')
          }
        }
      })

    })
    // let aucode = $('.reg-viw .code .authcode').val();
    // console.log(aucode)
    // let incode = $('.code input').val();
    // if(incode === ''){
    //   alert('请输入验证码');
    //   return false;
    // }else if( incode != aucode){
    //   alert('验证码输入不正确')
    // }


  })
})