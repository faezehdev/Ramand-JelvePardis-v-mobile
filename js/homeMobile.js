
gsap.to(".preLoad", {
  scale: 0,
  delay: 5,
  ease: "expo.in",
});
gsap.to(".blinder", {
  scaleY: 0,
  stagger: 0.15,

  delay: 0.8,
  duration: 2,
  ease: "expo.in",
});
gsap.to(".secondP .char", {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 1.2,
  duration: 1.5,
  ease: "expo.in",
});
gsap.to(".firstP .char", {
  y: 0,
  opacity: 1,
  stagger: 0.05,
  delay: 1.2,
  duration: 1.5,
  ease: "expo.in",
});
setTimeout(() => {
  var swiper = new Swiper('.swiper-first', {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
   speed:4000,
  });
 }, 4000);

   

    gsap.set('.About_Us img',{
      scale:1.1,
    })
    gsap.to('.About_Us img',{
      scrollTrigger: {
        trigger:'.About_Us',
        start: "top 90%",  
      },
      scale:1
    })
    gsap.to('.About_Us h2',{
        scrollTrigger: {
          trigger:'.About_Us',
          start: "top 90%",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to('.About_Us p',{
        scrollTrigger: {
          trigger:'.About_Us',
          start: "top 100%",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to('.About_Us a',{
        scrollTrigger: {
          trigger:'.About_Us',
          start: "top 100%",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
    let projects = document.querySelectorAll('.Project')
    projects.forEach((proj)=>{
      gsap.set(proj.querySelector('img'),{
        scale:1.1,
      })
      gsap.to(proj.querySelector('img'),{
        scrollTrigger: {
          trigger:proj,
          start: "top 100%",  
        },
        ease:"none",
        scale:1
      })
      gsap.to(proj.querySelector('h3'),{
        scrollTrigger: {
          trigger:proj,
          start: "top 100%",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to(proj.querySelector('a'),{
        scrollTrigger: {
          trigger:proj,
          start: "top 100%",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
    })
    gsap.to('.Clr-Container h4',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          start: "top 100%",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to('.Clr-Container p',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          start: "top 100%",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Clr-Container span',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          start: "top 100%",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Clr-Container a',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          start: "top 100%",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Pro-Title p',{
        scrollTrigger: {
          trigger:'.Pro-Title',
          start: "top 100%",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Pro-Title h5',{
        scrollTrigger: {
          trigger:'.Pro-Title',
          start: "top 100%",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.set('.IMG-c img',{
        scale:1.1
      })
      gsap.to('.IMG-c img',{
        scrollTrigger: {
          trigger:'.IMG-c',
          start: "top 100%",  
        },
        ease:"none",
        scale:1
      })
      let Productss = document.querySelectorAll('.Pro-Container .Product')
      Productss.forEach(p=>{
        console.log(p.querySelector('img'));
        
        gsap.to(p.querySelector('.bg-Color'),{
            scrollTrigger: {
              trigger:p,
              start: "top 100%",  
            },
            ease:"none",
            height:0,
          })
      })
      gsap.to('.Pro-Container a',{
        scrollTrigger: {
          trigger:'.Pro-Container',
          start: "top 100%",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
   let gotStart = document.querySelector('.goStart')
   gotStart.addEventListener('click',()=>{
    lenis.scrollTo(0,0)
   })
