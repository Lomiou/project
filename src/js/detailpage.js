require(['config'],function(){
  require(['jquery','lxzoom'],function($){
    //引入头尾
    $('.site-header').load('./header.html');
    $('.footer').load('./footer.html');
    // $('.goodsbox .pic span')
    // console.log($('.size li a'))
    // console.log($('.goodsbox .pic span'))
  
    //放大镜插件，感谢老谢的贡献
    // $('.goodsbox .pic').lxzoom({width:460,height:460});
    // $('.smallpic').on('mouseenter','img',function(){
    //   $('.goodsbox .pic img').attr({
    //     'src':this.src,
    //     'data-big':this.dataset.big
    //   });
    // })
    
    //获取页面传递信息
    function GetRequest(){
      var url = decodeURI(location.search); //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
              theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
          }
      }
      return theRequest;
  }
    var Request = new Object();
    Request = GetRequest();
    var $id =  Request.id;
    console.log
    $.ajax({
      url:"../api/detailpage.php",
      data:{id : $id},
      dataType:'json',
      success:function(data){
    
        let goods = $('.goods');
        goods.html(
          
          `<div class="goodsbox fl">
          <div class="pic">
            <span><img src="${data.imgurl}" alt=""></span>
            <span><img src="../img/pic2_big.jpg" alt=""></span>
            <span><img src="../img/pic3_big.jpg" alt=""></span>
            <span><img src="../img/pic4_big.jpg" alt=""></span>
            <span><img src="../img/pic5_big.jpg" alt=""></span>
          </div>
          <div class="smallpic">
            <ul class="clearfix">
              <li><img src="${data.imgurl}" ></li>
              <li><img src="../img/pic2.jpg" ></li>
              <li><img src="../img/pic3.jpg" ></li>
              <li><img src="../img/pic4.jpg" ></li>
              <li><img src="../img/pic5.jpg" ></li>
            </ul>
          </div>
        </div>
        <div class="detail fr">
          <div class="tit">
            <span>包邮</span>
            <h1>${data.titel}</h1>
          </div>
          <!-- 商品编码 -->
          <p>
            商品编码：<span class="ml-10">${data.id}</span><span class="ml-40">原产地：${data.origin}</span>
          </p>
          <!-- 加强说明 -->
          <div class="shuoming">
              属性：S码 88片 适用于3-6KG 宝宝<br>
              属性：M码 80片 适用于5-10KG 宝宝<br>
              属性：L码 72片 适用9-13KG 宝宝<br>
              属性：XL码 64片 适用12KG以上宝宝
          </div>
          <!-- 价格 -->
          <dl>
            <dt>价格：</dt>
            <dd><b id="cnp">￥${data.cnprice}</b><b id="usa">$22.62</b></dd>
          </dl>
          <!-- 尺寸 -->
          <div class="size clearfix">
            <div class="chicun fl">尺寸</div>
            <ul class="fl">
              <li><a href="javascript:;">L</a></li>
              <li><a href="javascript:;">M</a></li>
              <li><a href="javascript:;">S</a></li>
              <li><a href="javascript:;">XL</a></li>
            </ul>
          </div>
          <!-- 数量 -->
          <div class="qty clearfix">
            <p>数量：</p>
            <div class="shuliang">
              <input type="number" value="1">
              <em>库存：<span>${data.store}</span></em>
            </div>
          </div>
          <!-- 发货地 -->
          <p>发货地：<span>${data.shopto}</span></p>

          <!-- //添加购物车 -->
          <div class="goods-car">
            <a href="javascript:;">立即购买</a>
            <a href="javascript:;">加入购物车</a>
            <a href="javascript:;">添加关注</a>
          </div>
          <!-- //不配送的地区 -->
          <p>不配送范围：<span class="r-0">不发货范围包括内蒙古自治区、西藏自治区、新疆维吾尔自治区</span></p>
          <div class="succeed">
            <p>商品添加成功!</p>
          </div>
        </div>
      `
         
        
        )
        $('.imgs').html(`<img src="${data.detaileimg}">`)


        $('.smallpic li').on('mouseenter',function(){
          $(this).addClass('active').siblings().removeClass('active');
          $('.goodsbox .pic span').eq($(this).index()).css('display','block').siblings().css('display','none')
        });
        $('.size li').on('mouseenter',function(){
          $(this).addClass('active').siblings().removeClass('active');
        });

        console.log($('.goods-car a').eq(1))
      }
    })
    
   
    //从数据库获取商品信息
    // $.ajax({
    //   url:'../API/detailpage.php',
    //   data:{id=$id},
    // })

    //点击添加购物车
   
  })
})