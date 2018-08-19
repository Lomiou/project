jQuery($=>{
  let oul = $('.popular .r-side ul');
  let left = oul[0].offsetLeft;
  let idx = 0;
  let timer = setInterval(()=>{
    idx++;
    if(idx >= 3){
      idx = 0;
    }
    oul.animate({'left':-idx * '210'},1500)
  },3000);
 
});