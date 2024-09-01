$('.container-Sec').imagesLoaded( {

},  function() {
  $(document).ready(function() {
    setTimeout(()=>{

      gsap.registerPlugin(ScrollTrigger);
      const pageContainer = document.querySelector(".container-Sec");
      /* SMOOTH SCROLL */
      const scroller = new LocomotiveScroll({
        el: pageContainer,
        direction: 'horizontal',
        smooth: true,
        lerp: 0.05,
      });
      scroller.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length
            ? scroller.scrollTo(value, 0, 0)
            : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            left: 0,
            top: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
      });
      let pinBoxes = document.querySelectorAll(".Pin-Wrapp > *");
    let pinWrap = document.querySelector(".Pin-Wrapp");
    let pinWrapWidth = pinWrap.offsetWidth;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    // Pinning and horizontal scrolling
    scrollTween= gsap.to(".Pin-Wrapp", {
      scrollTrigger: {
        scroller: pageContainer, //locomotive-scroll
        scrub: true,
        trigger:"#PinSection",
        pin:true,
        start: "top top",
        end: pinWrapWidth
      },
      x: horizontalScrollLength,
      ease: "none"
    });
    ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
    ScrollTrigger.refresh();
    scroller.update()
    window.addEventListener("load", function () {
      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh();
        scroller.update()
      });
      window.addEventListener("resize", () => {
        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
        ScrollTrigger.refresh(); 
        scroller.update()
      });
      
    // let sliders = document.querySelectorAll('.swiper-first swiper-slide')
    gsap.to('.Logo_First',{
      opacity:0,
      duration:1,
      
      scrollTrigger: {
        trigger:'.swiper-first',
        scrub:true,
        containerAnimation:scrollTween,
        start: "top 20%",  
      },
      ease:"slow(0.5, 0.8)"
     })
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

    gsap.set('.About_Us img',{
      scale:1.1,
    })
    gsap.to('.About_Us img',{
      scrollTrigger: {
        trigger:'.About_Us',
        containerAnimation:scrollTween,
        start: "top top",  
      },
      scale:1
    })
    gsap.to('.About_Us h2',{
        scrollTrigger: {
          trigger:'.About_Us',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to('.About_Us p',{
        scrollTrigger: {
          trigger:'.About_Us',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to('.About_Us a',{
        scrollTrigger: {
          trigger:'.About_Us',
          containerAnimation:scrollTween,
          start: "top top",  
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
          containerAnimation:scrollTween,
          start: "top top",
        },
        ease:"none",
        scale:1
      })
      gsap.to(proj.querySelector('h3'),{
        scrollTrigger: {
          trigger:proj,
          containerAnimation:scrollTween,
          start: "top top",
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to(proj.querySelector('a'),{
        scrollTrigger: {
          trigger:proj,
          containerAnimation:scrollTween,
          start: "top top",
        },
        ease:"none",
        y:0,
        opacity:1
      })
    })
    gsap.to('.Clr-Container h4',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        y:0,
        opacity:1
      })
      gsap.to('.Clr-Container p',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Clr-Container span',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Clr-Container a',{
        scrollTrigger: {
          trigger:'.Clr-Container',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Pro-Title p',{
        scrollTrigger: {
          trigger:'.Pro-Title',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
      gsap.to('.Pro-Title h5',{
        scrollTrigger: {
          trigger:'.Pro-Title',
          containerAnimation:scrollTween,
          start: "top top",  
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
          containerAnimation:scrollTween,
          start: "top top",
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
              containerAnimation:scrollTween,
              start: "top top",
            },
            ease:"none",
            height:0,
          })
      })
      gsap.to('.Pro-Container a',{
        scrollTrigger: {
          trigger:'.Pro-Container',
          containerAnimation:scrollTween,
          start: "top top",  
        },
        ease:"none",
        stagger:.2,
        y:0,
        opacity:1
      })
   let gotStart = document.querySelector('.goStart')
   gotStart.addEventListener('click',()=>{
    scroller.scrollTo(0,0)
   })
    },1000)
  })})
