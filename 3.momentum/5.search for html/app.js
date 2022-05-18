const hellos = document.getElementsByClassName("hello");

console.dir(hellos)
// hellos is array. 

const title = document.getElementsByTagName("h1");
// title is anchor and div section button 
console.log(title)

const title1 = document.querySelector(".div h1");
// css방식으로 검색할 수 있다. 
// 즉, class내부에 있는 hello 안 h1을 찾을 수 있다는 것이다. 
// querySelector는 첫번째 element만 가져온다. array가 아니다. 
// 만약 다 가져오고 싶다면
// querySelectorAll을 사용하면 조건에 부합하는 element를 다 가져온다. 
// 그리고 array로 가져온다. 
console.log(title1);

title1.innerText ="Oh Hi!"

title1.style.color = "red";

function handleTitleClick(){
  console.log("title was clicked!");
  title1.style.color = "blue";

}
title1.addEventListener("click", handleTitleClick);
// handleTitleClick에서 괄호를 넣지 않는다. !
// 괄호를 넣으면 바로 실행되어 버린다ㅜㅜ

// console.dir(element)를 통해 사용가능한 event를 알 수 있다. 
// on으로 시작하는 것이 event이고 사용할때는 on을 빼고 사용한다. 

// html header example을 seach하고 web apis에 접속하면 여러 event들을 알 수 있다 .

function handleMouseEnter(){
  title1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
  title1.innerText = "Mouse is gone!"
}
title1.addEventListener("mouseenter", handleMouseEnter);
title1.addEventListener("mouseleave", handleMouseLeave);


title1.onclick = handleTitleClick;//이처럼 쓸 수 있다. 
title1.onmouseenter = handleMouseEnter;

// 단어 전체 선택 -> F2

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("copier!");
}

function handleWindowOffline(){
  alerf("SOS no Wifi!");
}
function handleWindowOnline(){
  alert("Sooo good");
}
window.addEventListener("resize", handleWindowResize);
//document.div 로는 가져올 수 없음. document.body, head, title등만있고
// 다른 것들언 getElementId 와 같이 가져와야함.

window.addEventListener("copy", handleWindowCopy);

window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);