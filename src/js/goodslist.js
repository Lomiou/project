require(['config'],function(){
  require(['jquery'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    // console.log($('.search li a'))
    //鼠标移入事件
    $('.search li a').bind({
      mouseenter:function(){$(this).addClass('on')},
      mouseleave:function(){$(this).removeClass('on')},
      click:function(){$(this).addClass('on')}
    })

    // $('.search li a').on('mouseleave',function(){
    //   $(this).removeClass('on')
    // })

    //发送请求，并返回数据数据
    $.get(
      "../api/goodslist.php",
      {"qty":"40","pageNo":"1"},
      function(data){
        console.log(data);
        let list = $('.list')
        let ul = $('.list ul');
        ul.html(data.data.map(a=>{
            return  `<li data-id="${a.id}"><a href="#">
            <img src="${a.imgurl}">
            <div class="hot-r">
            <p>${a.titel}</p>
            <p><span class="r-0">￥${a.cnprice}</span><span class="ml-10">$${(a.cnprice/6.8).toFixed(2)}</span></p>
            <p><span>${a.origin}</span><span class="ml-10"><img src="${a.originmap}" style="width:18px;height:13px;margin-top:0px;"></span></p>
            </div></a></li>`
          }).join('')) 
        //创建分页
        let page = $('<div\>');
        page.addClass('page');
        let pageLen = Math.ceil(data.total/data.qty);                      //分页数量
          for(let i = 0; i < pageLen; i++){                                //生成html结构
            let span = $('<span\>');
            span.text(i+1);
            span.appendTo(page);
            if( i === data.pageNo-1){                                       //获取当前页
              span.addClass('active');                                   //当前页高亮
            }
          }
          page.appendTo(list);
          
      },
      "json"
    )
    //点击切换分页
    $('.list .page').on('click','span',function(e){
      _pageNo = $(this).text();
      $.get("../api/goodslist.php",{"qty":"40","pageNo":"_pageNo"})
    })
  })
})