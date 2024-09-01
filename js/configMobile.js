let OpBtn = document.querySelector('header .Toggles')
let Menu = document.querySelector('header.Mobile-Header')
let IS = false
OpBtn.addEventListener('click',()=>{
    
    if(!IS){
        Menu.classList.toggle('Open')
        gsap.to('header .Menu-link',{
        opacity:1,
        x:0,
        stagger:.3,
        })
        IS = true
    }
    else{
      
        IS = false
        gsap.to('header .Menu-link',{
            opacity:0,
            x:'100%',
            stagger:.3,
            })
            setTimeout(() => {
                Menu.classList.toggle('Open')
            }, 1000);
    }
})