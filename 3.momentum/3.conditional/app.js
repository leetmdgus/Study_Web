
let age = prompt("How old are you?"); 
// 사용을 잘안 함. 
// 1. css 변경 불가. 
// 2. 몇몇 브라우저는 팝업을 못띄우게 함
// 그래서 요즘엔 팝업창을 새로 만듬

console.log(typeof age);  
// string 출력 
// typeof(age)기능

console.log(parseInt(age));  
//Not a number;
//age가 문자라면 NaN  


//isNaN()
//NaN이라면 true 아니면 false 반환

console.log(isNaN(age));
// Write document in console, we can see html file.
// as you know, console.dir(document) , document is object;
// document can show html like JavaScript. and it seem to object.

// this is very important
// The reason why, 
// I could get title of my html document from Javascript.
// to using documnet, we can load with Html in Javascript

// document.title = "Hi";
// We are reading Html from Javascript, 
// also we are able to change Html.
