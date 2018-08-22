require(['config'],function(){
  require(['jquery','common'],function($){
    //吸顶菜单
    $(function($){
      let xd = $('header');
    let doc = $(document);
    let win = $(window);
    win.on('scroll',function(){
      if(doc.scrollTop() > 500){
        xd.addClass('fixed');
      }else{
        xd.removeClass('fixed');
      }
    })

    //楼梯菜单
    let popular = $('.popular');
    let stairs = $('.stairs');
    let stairsli = $('.stairs p');
    // let $i = stairsli.children('i')
    //显示楼梯菜单
    win.on('scroll',function(){
      let $scroll = $(this).scrollTop();
      if($scroll >= 1200){
        stairs.addClass('show');
      }else{
        stairs.removeClass('show');
      }
    });
    
    // 点击楼梯跟换当前模块
    stairsli.on('click',function(){
      $('html').animate({
        scrollTop: popular.eq($(this).index()).offset().top
      },1000)
    })
    //回到顶部
    $('.stairs .totop').on('click',function(){
      $('html').animate({
        scrollTop : 0
      },1000)
    })
    })
//-<--------------end---------->
//<-----------新品上市---------->
$(function($){
  $.ajax({
    url:'./api/index.php',
    dataType:'json',
    success:function(data){
      let bd =$('.bd')
      let ul = $('.bd ul');
      ul.html(data.map(a=>{
            return  `<li data-id="${a.id}"><a href="#">
            <img src="${a.imgurl}">
            <div class="fd">
            <p>${a.titel}</p>
            <p><span class="r-0">${a.cnprice}</span><span class="ml-10">$${(a.cnprice/6.8).toFixed(2)}</span></p>
            <p><span>${a.origin}</span><span class="ml-10"><img src="${a.originmap}" style="width:18px;height:13px;"></span></p>
            </div></a></li>`
          }).join('')) 

//<---------商品标题移动----->
    
    $('.bd ul li').bind({
      mouseenter:function(){
        $(this).children('a').children('.fd').animate({bottom:0},1000);
        clearInterval(timer);
      },
      mouseleave:function(){
        $(this).children('a').children('.fd').animate({bottom:-80},1000);
        autoplay();
      }
    })
//------------end----------->
//-------商品栏移动---------->
      autoplay();
      var timer;
      function autoplay(){
        let left = bd[0].offsetLeft;
        let idx = 0;
        timer = setInterval(()=>{
          idx++;
          if(idx >= 5){
            idx = 0;
          }
          bd.animate({'left':-idx * '1200'},2000)
        },5000);
      }
      //-----------------
    }
  });
})
//----热门商品------->
$(function($){
  $.ajax({
    url:'./api/hot.php',
    dataType:'json',
    success:function(data){
      let hotTitel =$('.hotTitel')
      let ul = $('.hotTitel ul');
      ul.html(data.map(a=>{
            return  `<li data-id="${a.id}"><a href="#">
            <img src="${a.imgurl}">
            <div class="hot-r">
            <p>${a.titel}</p>
            <p><span class="r-0">${a.cnprice}</span><span class="ml-10">$${(a.cnprice/6.8).toFixed(2)}</span></p>
            <p><span>${a.origin}</span><span class="ml-10"><img src="${a.originmap}" style="width:18px;height:13px;margin-top:7px;"></span></p>
            </div></a></li>`
          }).join('')) 

        }
      });
    })
//------------------------->end

//popular------------------>
  $(function($){
    $.ajax({
      url:'./api/index.php',
      dataType:'json',
      success:function(data){
        let ul = $('.list-clear ul');
        ul.html(data.map(a=>{
          return  `<li data-id="${a.id}"><a href="#">
          <img src="${a.imgurl}">
          <div class="ffd">
          <p>${a.titel}</p>
          <p><span class="r-0">${a.cnprice}</span><span class="ml-10">$${(a.cnprice/6.8).toFixed(2)}</span></p>
          <p><span>${a.origin}</span><span class="ml-10"><img src="${a.originmap}" style="width:18px;height:13px;"></span></p>
          </div></a></li>`
        }).join(''))
        
        //商品标题移动
        
        $('.list-clear ul li').bind({
          mouseenter:function(){
            $(this).children('a').children('.ffd').animate({bottom:0},1000)
          },
          mouseleave:function(){
            $(this).children('a').children('.ffd').animate({bottom:-80},1000)
          }
        })
        //----------->
      }
    })
  })
    
  //---------底部----------》
  })
})