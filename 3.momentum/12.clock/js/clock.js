const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");  
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  //padEnd(2, "0"); 은 뒤에 0 추가. 
  

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
// 1초마다 실행

// const date = new Date();
// date.getDate();
// date.getDay();//sunday = 0; 
// date.getFullYear();
// date.getHours();
// date.getMinutes();
// date.getSeconds();

