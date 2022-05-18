const title = document.querySelector("div h1");

function handleTitleClick(){
  const ranColor = ["blue","red","green","yellow","black"];
  const num = Math.floor(Math.random() * ranColor.length);
  title.style.color = ranColor[num];
}

title.addEventListener("click",handleTitleClick);