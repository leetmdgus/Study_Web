const title = document.querySelector("#hello h1");

function handleTitleClick(){
  const currentColor = title.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato";
  } else {
    newColor = "blue"
  }
  title.style.color = newColor;
}

function handleTitleClick2(){
  const clickedClass = 'active';
  if(title.className === clickedClass){
    title.className = "";
  }else{
    title.className = clickedClass;
  }
}

function handleTitleClick3(){
  const clickedClass = "active";
  if(title.classList.contains(clickedClass)){
    title.classList.remove(clickedClass);
  }else{
    title.classList.add(clickedClass);
  }

}

function handleTitleClick4(){
  title.classList.toggle("active")
}

title.addEventListener("click", handleTitleClick4);

