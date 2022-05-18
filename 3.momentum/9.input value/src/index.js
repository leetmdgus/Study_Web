const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// const loginInput =document.querySelector("#login-form input");
// const loginButton =document.querySelector("#login-form button");
 
function handleLoginButtonClick(){
  const username = loginInput.value; 
  // if(username === ""){
  //   alert("Please write your name");
  // } else if(username.length > 12){
  //   alert("Your name is too long.")
  // } else{
  //   console.log("hello ", username);
  // }
  
  console.log(username);

}

function onLoginSubmit(event){
  event.preventDefault();  // It is stop default any event.
  console.log(loginInput.value);
}

//loginButton.addEventListener("click", handleLoginButtonClick)
loginForm.addEventListener("submit", onLoginSubmit)

// onLoginSubmit({information})

