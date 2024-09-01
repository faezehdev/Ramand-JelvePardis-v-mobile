let tabsContent = document.querySelectorAll(".tabs_content");
let tabsWrapper =document.querySelector(".tabs-wrapper")
if (tabsContent.length<=1) {
    tabsWrapper.style.height = `100vh`
    
}
else{
    tabsWrapper.style.height = `${tabsContent.length*60}vh`

}
tabsContent.forEach((element, i) => {
  i = i + 1;
 let spColor =element.querySelectorAll(".spColor")
  
  spColor.forEach((sp) => {

    if (i==1) {
      if (sp.classList.contains("line")) {
        console.log(sp);
        sp.style.background="#464646"
      }
      else{
        sp.style.color="#464646"

      }
    }
    else{

      if(sp.classList.contains("line")){
       
       sp.style.background=`rgb(255, 255, 255,${1 - 1 /i}`
     }
     else{
      sp.style.color=`rgb(255, 255, 255,${1 - 1 /i}`

    }
    }
  });
  if (i == 1) {
    element.style.background = `#F6F8F8`;
    element.querySelector(".mainT").style.color="#464646"
  } else {
    element.style.background = `rgb(33, 34, 35,${1 - 1 / i})`;
    element.querySelector(".mainT").style.color=`rgb(255, 255, 255,${1 - 1 /i}`;
  }


});

let numbers = document.querySelectorAll(".inner-onglet .number")
numbers.forEach((element,i) => {
  element.querySelector("span").setAttribute("id" , `id${i}`)
  let ni=i+1;
  if (i==0) {
    var slidingTagLiAfterStyle = document.createElement("style");
    slidingTagLiAfterStyle.innerHTML =
    `#id${i}::before{background-color:#464646}#id${i}::after{background-color:#464646}#id${i}{color:#464646}`;
    document.head.appendChild(slidingTagLiAfterStyle);
    
  }
  else{
    var slidingTagLiAfterStyle = document.createElement("style");
    slidingTagLiAfterStyle.innerHTML =
    `#id${i}::before{background-color: rgb(255, 255, 255,${1 - 1 / ni});}#id${i}::after{background-color: rgb(255, 255, 255,${1 - 1 / ni});}#id${i}{color: rgb(255, 255, 255,${1 - 1 / ni});}`;
    document.head.appendChild(slidingTagLiAfterStyle);

  }

  if (i<9) {
    element.querySelector("span").innerHTML = `0${i+1}`
  }
  else{
    element.querySelector("span").innerHTML = `${i}`

  }
});
$(".tabs_content").on("click", function () {
  if (!$(this).hasClass("active")) {
    $(".tabs_content.active").removeClass("active");
    $(this).addClass("active");
    setTimeout(() => {
      $(".tabs_content").removeClass("activeDisplay");
    }, 400);

    setTimeout(() => {
      $(this).addClass("activeDisplay");
    }, 1000);
    setTimeout(() => {
      $(".tabs_content").removeClass("Newactive");
      $(this).addClass("Newactive");
    }, 1200);
  }
});

ScrollTrigger.create({
  trigger: ".tabs",
  start: "top top",
  pin: true,
  endTrigger: ".tabs-wrapper",
  end: "max",
  onUpdate: (self) => {
    let nb = Math.round(gsap.utils.mapRange(0, 1, 0, tabsContent.length-1, self.progress));
    if (!$(".tabs_content").eq(nb).hasClass("active")) {
      $(".tabs_content.active").removeClass("active");
      $(".tabs_content").eq(nb).addClass("active");

      setTimeout(() => {
        $(".tabs_content").removeClass("activeDisplay");
      }, 400);

      setTimeout(() => {
        $(".tabs_content").eq(nb).addClass("activeDisplay");
      }, 1000);
      setTimeout(() => {
        $(".tabs_content").removeClass("Newactive");
        $(".tabs_content").eq(nb).addClass("Newactive");
      }, 1200);
    }
  },
});


const swiper = new Swiper('.swiper', {
    speed : 1000,
      loop:true,
        // If we need pagination
        pagination: {
          el: '.articlePaginetion',
          clickable : true,
        },
      // Navigation arrows
      navigation: {
        nextEl: '.prevArt',
        prevEl: '.nextArt',
      },
      });
    