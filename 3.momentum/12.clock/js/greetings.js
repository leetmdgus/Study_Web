const loginForm = document.getElementById("login-form");
const loginButton = loginForm.querySelector("button");
const loginInput = loginForm.querySelector("input");

const greeting = document.getElementById("greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function paintGreetings(userame){
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${userame}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  // show the greetings;
  paintGreetings(savedUsername);
}


const link = document.querySelector("a");
function handleLinkClick(event){
  event.preventDefault();
  console.dir(event); 
  
}

loginForm.addEventListener("submit", handleLinkClick);
// MouseEvent;;// 유저가 클릭한 X, Y좌표를 얻을 수 있다. 
// funciont handleLinkeClick({information about the event that just happened})

