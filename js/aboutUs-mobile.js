
$('.section1').imagesLoaded( function() {
    $(".section1 .imgS").addClass("activeImg")
  });

  gsap.registerPlugin(ScrollTrigger) 
// Scale in animation
let scrollToTop = document.querySelectorAll('.scrollToTop')
scrollToTop.forEach(s=>{
      gsap.to(s , {
        scrollTrigger:{
          trigger:s,
          start : "top 90%",
          end : "bottom bottom",
        },
        opacity :1,
        y:0,
      })
 
})
