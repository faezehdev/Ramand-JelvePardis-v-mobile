gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 70%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})

const swiper = new Swiper('.awardsSlider', {
    slidesPerView:4.5,
  speed : 1000,
    spaceBetween: 43,
  });