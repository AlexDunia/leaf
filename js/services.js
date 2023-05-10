// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

//  fixed nav

console.log("working")
// const fixedhead = document.querySelector(".fixed-nav");
const head = document.querySelector(".bg");
 const head2 = document.querySelector(".linkscroll");
 const head3 = document.querySelector(".linkscrolltext");
//  const head3 = document.querySelector(".slideflexmq");
//  const fixedhead = document.querySelector(".fixednav");


window.addEventListener ("scroll", function () {
   const headheight = head.getBoundingClientRect().height;
   const scrollHeight = window.pageYOffset;
   
   
   if (scrollHeight > headheight){
      head.classList.add("fixed-nav");
   }
   else{
    head.classList.remove("fixed-nav");
   }
   })
    
    
    // menu toogle
    
    function menutoggle(){
       const menuu = document.querySelector(".mqlist");
       //  I think you should set a class from the main html
       //  make it recognisable with JS
       const burger = document.querySelector(".menu")
     
    
         if (menuu.style.display === "block")
            {
            menuu.style.display = "none";
           burger.setAttribute('aria-expanded', burger.classList.contains('opened'))
           burger.classList.remove('opened');
            
    
            }
            else 
            {
               menuu.style.display = "block";
                  burger.classList.toggle('opened');
              }
           }
    