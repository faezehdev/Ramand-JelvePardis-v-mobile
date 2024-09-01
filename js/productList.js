let Productss = document.querySelectorAll(' .Product')
Productss.forEach(p=>{
  console.log(p.querySelector('img'));
  
  gsap.to(p.querySelector('.bg-Color'),{
      ease:"none",
      height:0,
      scrollTrigger: {
        trigger:p,
        start: "top 60%",  
        end:"bottom bottom" 
      },
    })
    gsap.to(p.querySelector('h2'),{
        ease:"none",
       opacity:1,
       y:0,
       scrollTrigger: {
        trigger:p,
        start: "top 60%",  
        end:"bottom bottom" 
      },
      })
})

// Enable Scroll

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
