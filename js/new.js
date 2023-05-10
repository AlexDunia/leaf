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
      head2.style.position = "fixed";
      head2.style.top = "100px";
      // head3.classList.add("fixed-nav2");
      console.log("thankgod")
   }
   else{
    head.classList.remove("fixed-nav");
    head2.style.position = "absolute";
    head2.style.top = "180px";
  
   //  head.style.transition = "0.5s"; 
   //  head3.classList.remove("fixed-nav2");
   //  head3.style.transition = "0.5s"; 
   }
   })


   // const foot = document.querySelector(".fflex");



   // window.addEventListener ("scroll", function () {
   //    const footheight = foot.getBoundingClientRect().height;
   //    const scrollHeight = window.pageYOffset;


   // if(scrollHeight > footheight){
   //    head2.style.position = "absolute";
   // }

   // else{
   //    head2.style.position = "fixed";
   // }
// })


// Try something new.

// var x = window.matchMedia("(max-width: 1200px)")

window.addEventListener ("scroll", function () {
if (window.matchMedia("(max-width: 1200px)").matches){
   head2.style.position = "absolute";
}
else{
   head2.style.position = "fixed";
}

})


// menu toogle

function menutoggle(){
   const menuu = document.querySelector(".mqlist");
   //  I think you should set a class from the main html
   //  make it recognisable with JS
   const burger = document.querySelector(".menu")
   // let imageToSpin = document.getElementById('self');
   // let rotate = document.querySelector(".rotated")
   // const ry = document.querySelector(".ryy")
   // let please = document.querySelectorAll("#nav-icon1")
   // const mainmenu = document.getElementById("menuItem");

     if (menuu.style.display === "block")
        {
        menuu.style.display = "none";
       //    burger.setAttribute('aria-expanded'),
       // burger.classList.contains('opened')
       burger.setAttribute('aria-expanded', burger.classList.contains('opened'))
       burger.classList.remove('opened');
       head2.style.top = "240px"
        head3.style.marginTop = "300px"
            //   head3.style.marginTop = "-5px"
       // " aria-label="Main Menu"

        }
        else 
        {
           menuu.style.display = "block";
              burger.classList.toggle('opened');
              head2.style.top = "280px"
            //   head3.style.marginTop = "200px"

           console.log("problem no dey finish so")
          }
       }

