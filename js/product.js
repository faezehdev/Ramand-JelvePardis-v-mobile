  // Enable Scroll

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

  gsap.to('.Section-1 .bg-Color',{
    ease:"none",
    height:0,
  })
  gsap.to('.Banner h1',{
      ease:"none",
     opacity:1,
     y:0,
    })
    gsap.to('.Banner p',{
        ease:"none",
       opacity:1,
       y:0,

 })
 gsap.to('.Section-2 p',{
  ease:"none",
 opacity:1,
 y:0,
 stagger:.2,
 scrollTrigger: {
  trigger:'.Section-3',
  start: "top 90%",  
  end:"bottom bottom" 
},
})
 gsap.to('.Section-3 h2',{
    ease:"none",
   opacity:1,
   y:0,
   scrollTrigger: {
    trigger:'.Section-3',
    start: "top 90%",  
    end:"bottom bottom" 
  },
  })
  gsap.to('.Section-3 p',{
    ease:"none",
   opacity:1,
   y:0,
   scrollTrigger: {
    trigger:'.Section-3',
    start: "top 90%", 
    end:"bottom bottom" 
  },
  })
  gsap.to('.Section-3 a',{
    ease:"none",
   opacity:1,
   y:0,
   scrollTrigger: {
    trigger:'.Section-3',
    start: "top 90%", 
    end:"bottom bottom" 
  },
  })
  gsap.to('.Section-3 .bg-Color',{
    ease:"none",
    height:0,
   scrollTrigger: {
    trigger:'.Section-3',
    start: "top 90%", 
    end:"bottom bottom" 
  },
  })

  
//productCat slider
let productCat = new Swiper('.swiper-gallery ',{
  speed: 1000,
  slidesPerView:1,
  spaceBetween: 30,
  grabCursor:true,
  pagination: {
      el: '.GallerySlider .swiper-pagination',
            clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '<span class="line"></span>' + '</span>';
        },
    },
    navigation: {
      nextEl: ".GallerySlider .swiper-button-next",
      prevEl: ".GallerySlider .swiper-button-prev",
    },
 
})