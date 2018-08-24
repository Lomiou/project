require(['config'],function(){
  require(['jquery','common'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    var goodslist = localStorage.getItem('key');

    if( goodslist.length<= 0){
        goodslist = [];
    }else{
        goodslist = JSON.parse(goodslist);
    };

    render();
    //点击删除
    $('.glist').on('click','span.sc',function(){
      let currentLi = $(this).closest('li');
      let idx = currentLi.index();
      console.log(idx)
      console.log(goodslist)
      goodslist.splice(idx,1)
      console.log(goodslist)
      localStorage.setItem('key',JSON.stringify(goodslist));
      render();
    })


    function render(){ 
      var glist = $('.box-hd dd.glist');
      var zong = $('.jies .jiesuan .r-0');
      
    
      var ul = $('<ul\>');
      var total = 0;
      var zqty = 0;

      let content=goodslist.map(a=>{
        total +=a.cnprice*a.qty;
        zqty += a.qty*1
        return `<li titel="${a.titel}">
        <span class="col-md-1"><input type="checkbox"></span>
        <span class="col-md-3"><img src="${a.imgurl}">${a.titel}</span>
        <span class="col-md-1">${''}</span>
        <span class="col-md-2 r-0">￥${a.cnprice}</span>
        <span class="col-md-2">${a.qty}</span>
        <span class="col-md-2 r-0">￥${a.cnprice}</span>
        <span class="col-md-1 sc">X</span>
        </li>`
      }).join('\n')
      
      ul.html(content)
      // content.appendTo(glist)
      glist.html(ul)
      zong.text(total.toFixed(2));
      $('.jies .jiesuan span#car-count').html(zqty)
      $('.jies .jiesuan span.r-4').html((total/6.8).toFixed(2));
      $('.myCar .car-head #car-num').html(zqty);
    }

  }) 
})