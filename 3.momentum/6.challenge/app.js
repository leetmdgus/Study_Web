const title = document.querySelector(".hello ");
const colors = ["red", "aquamarine", "blue", "purple"]


const superEventHandler = {
  handleWindowContextmenu: function (){
    title.innerText ="That was a right click! ";
    title.style.color = colors[0];  
  },
  handleMouseEnter: function (){
    title.innerText ="The mouse is here!";
    title.style.color = colors[1];
  },
  handleMouseLeave: function (){
    title.innerText ="The mouse is gone!";
    title.style.color = colors[2];
  },
  handleWindowResize : function() {
    title.innerText = "You just resize!";
    title.style.color = colors[3];
  }, 
}


title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleWindowContextmenu);