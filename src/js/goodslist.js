require(['config'],function(){
  require(['jquery'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    console.log($('.search li a'))
    //鼠标移入事件
    $('.search li a').bind({
      mouseenter:function(){$(this).addClass('on')},
      mouseleave:function(){$(this).removeClass('on')},
      click:function(){$(this).addClass('on')}
    })

    // $('.search li a').on('mouseleave',function(){
    //   $(this).removeClass('on')
    // })
  })
})