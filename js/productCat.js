let Productss = document.querySelectorAll('.swiper-slide > .Product')
Productss.forEach(p=>{
  console.log(p.querySelector('img'));
  
  gsap.to(p.querySelector('.bg-Color'),{
      ease:"none",
      height:0,
    })
})


//productCat slider
let productCat = new Swiper('.swiper-productCat',{
    speed: 1000,
    slidesPerView:2.5,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor:true,
    pagination: {
        el: '.swiper-pagination',
              clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
          },
      },
    on:{
        init(e){
            let SlidesLength = e.slides.length
            e.slides.forEach(r=>{
            gsap.to(r.querySelectorAll('.swiper-slide .Title h2'),{
             y:0,
             opacity:1
              })
            })
            let slides = document.querySelectorAll('.swiper-slide')
            let i = 1
            slides.forEach((slide)=>{
                slide.setAttribute('data-index',i)
                let Current = slide.querySelector('.Current')
                Current.innerText=`0${i}`
                i++
                if(i>=SlidesLength){
                  return
                }
            })
        },
        
        slideChangeTransitionStart(e){

        }
    }
})