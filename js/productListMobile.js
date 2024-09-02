let Productss = document.querySelectorAll(' .Product')
Productss.forEach(p=>{
  console.log(p.querySelector('img'));
  
  gsap.to(p.querySelector('.bg-Color'),{
      ease:"none",
      height:0,
      scrollTrigger: {
        trigger:p,
        start: "top 80%",  
        end:"bottom bottom" 
      },
    })
    gsap.to(p.querySelector('h2'),{
        ease:"none",
       opacity:1,
       y:0,
       scrollTrigger: {
        trigger:p,
        start: "top 80%",  
        end:"bottom bottom" 
      },
      })
})
