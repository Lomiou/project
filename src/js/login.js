require(['config'],function(){
  require(['jquery','common'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');

  })
})