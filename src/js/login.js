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
    }
    randomCode();
    //数据验证



  })
})