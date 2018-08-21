require(['config'],function(){
  require(['jquery','lxzoom'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    // $('.goodsbox .pic span')
    console.log($('.size li a'))
    console.log($('.goodsbox .pic span'))
    $('.smallpic li').on('mouseenter',function(){
      $(this).addClass('active').siblings().removeClass('active');
      $('.goodsbox .pic span').eq($(this).index()).css('display','block').siblings().css('display','none')
    });
    $('.size li').on('mouseenter',function(){
      $(this).addClass('active').siblings().removeClass('active');
    });
    //放大镜插件，感谢老谢的贡献
    // $('.goodsbox .pic').lxzoom({width:460,height:460});
    // $('.smallpic').on('mouseenter','img',function(){
    //   $('.goodsbox .pic img').attr({
    //     'src':this.src,
    //     'data-big':this.dataset.big
    //   });
    // })
  })
})