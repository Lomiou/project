require(['config'],function(){
  require(['jquery'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
  })
})