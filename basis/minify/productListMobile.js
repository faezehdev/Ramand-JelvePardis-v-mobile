let Productss=document.querySelectorAll(" .Product");Productss.forEach((o=>{console.log(o.querySelector("img")),gsap.to(o.querySelector(".bg-Color"),{ease:"none",height:0,scrollTrigger:{trigger:o,start:"top 80%",end:"bottom bottom"}}),gsap.to(o.querySelector("h2"),{ease:"none",opacity:1,y:0,scrollTrigger:{trigger:o,start:"top 80%",end:"bottom bottom"}})}));