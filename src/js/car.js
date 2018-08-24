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
      goodslist.splice(idx,1)
      localStorage.setItem('key',JSON.stringify(goodslist));
      render();
    })
    //全选
    var checkbox = $('.box-hd .glist :checkbox');
   
    $('.box-hd #all').on('click',function(){
      checkbox.prop('checked',this.checked);
    })
    //删除选中商品
    $('.omit #btn').on('click',function(){
      let oli = checkbox.filter(':checked').closest('li');
      for(let i = 0; i < oli.length;i++){
        let num = $(oli[i]).index();
        console.log(num)
        goodslist.splice(num-i,1); 
      }
      localStorage.setItem('key',JSON.stringify(goodslist));
      render();
      window.location.reload();
    })
    //清空购物车
    $('.omit #clearall').on('click',function(){
      goodslist = [];
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
        <span class="col-md-1 sc" style="cursor: pointer;">X</span>
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