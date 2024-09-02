let i = 1
let Productss = document.querySelectorAll(' .Product')
Productss.forEach(p=>{
  gsap.to(p.querySelector('.bg-Color'),{
      ease:"none",
      height:0,
      scrollTrigger: {
        trigger:p,
        start: "top 100%",  
      },
    })
    gsap.to(p.querySelector('h2'),{
      ease:"none",
      y:0,
      opacity:1,
      scrollTrigger: {
        trigger:p,
        start: "top 100%",  
      },
    })
    p.setAttribute('data-index',i)
    let Current = p.querySelector('.Current')
    Current.innerText=`0${i}`
   
    if(i>=Productss.length){
      return
    }
    i++

})

