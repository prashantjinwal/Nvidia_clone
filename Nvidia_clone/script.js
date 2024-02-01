
let ham_btn = document.querySelector(".hambur-btn");
let menus = document.querySelector(".drop-menu-up");
let ban1 = document.querySelector(".ban-1");
let bander = document.querySelector(".bander");
let link_btn = document.querySelector(".btn-links");
let link_btn2 = document.querySelector(".btn-links2");
let hide_link = document.getElementById("hide-link");
let hide_link2 = document.getElementById("hide-link2");


ham_btn.addEventListener("click", () => {
    
     menus.classList.toggle("left-0");
 
}) 


function hideandUnhidelinks (){
     if(hide_link.style.display == "none"){
          hide_link.style.display = "block";
     }else{
          hide_link.style.display = "none";
     }
     
}
function hideandUnhidelinks2(){
     if(hide_link2.style.display == "none"){
          hide_link2.style.display = "block";
     }else{
          hide_link2.style.display = "none";
     }
     
}