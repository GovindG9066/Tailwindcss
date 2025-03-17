let  Object_container=document.querySelector(".object-container");

let btn_cont=document.querySelector(".btn-cont");
let btn_circle=document.querySelector(".btn-circle");

// function mode() {
//     btn_cont.addEventListener("click",()=>{
//         btn_circle.classList.toggle("translate-x-full");
//         console.log("click");
        
//     })
// }
// mode();

btn_cont.addEventListener("click",()=>{
    btn_circle.classList.toggle("translate-x-full");
    console.log("clicked");
    

})