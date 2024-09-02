let sections = document.querySelectorAll("section")

sections.forEach((element,i) => {

    i=i+1
    if (i==1) {
        element.style.background="#F6F8F8"
    }
    else{
        element.style.background=`rgb(33, 34, 35,${1 - 1 / i})`
        console.log(element);
        
    }
    let spColor =element.querySelectorAll(".spColor")
    let path =element.querySelectorAll("path")
     
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
     path.forEach((sp) => {
   console.log(sp);
   
       if (i==1) {
         
       }
       else{
   
       
         sp.style.stroke=`rgb(255, 255, 255,${1- 1 /i}`
   
       
       }
     });
});