const swiper = new Swiper('.swiper', {
speed : 1000,
  
    // If we need pagination
    pagination: {
      el: '.articlePaginetion',
      clickable : true,
    },
  // Navigation arrows
  navigation: {
    nextEl: '.nextArt',
    prevEl: '.prevArt',
  },
  });


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
  