console.log("Hello world"); 
console.log("Hello world"); 
console.log("Hello world"); 

// 이것은 코멘트 입니다. 
/*이것도 코멘트 입니다. 
와웅 */

let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4000;

function func(sentense) {
  console.log("Hello world");
  console.log("Hi");
  console.log(sentense)
  return 3;
}

// === 은 자료형까지 비교하게 된다. 
// 1 과 "1"은 ==에서는 true, ===에서는 false가 나온다. 

// 불리언형이 아닌 경우 불리언형으로 변환하는 방법
// !!(null) // false;
// !null --> true;
// !"hello" -> false

//typeof 연산자..!
// typeof "name" -> string;

//function hiHello(){};
// typeof hiHello --> function

//typeof 'Hello'+ 'Codeit' --> stringCodeit

// typeof 8-3 -> NaN
// Not a number;
// typeof 연산자는 일반 연산자보다 우선순위가 높다. 
// 따라서 괄호를 이용하여 우선순위를 조절해준다. 

// typeof 연산자를 사용할때는 다른 연산자와의 우선순위(precedence)를 고려한다. 


// 형변환 Type Conversion
Number('3');
String(10);
Boolean(3); //true
//Boolean false == '', NaN, 0, undifined <-falsy
//Boolean true == "     ", 2, "asfdjkl"
Number(true) == 1;

// NaN은 Not a number의 약자지만 Number로 인식된다. 

console.log('4'-true) // 3출력

console.log('two'>=1); // 비교가 불가능할 경우 false;


1=='1'; 1!=3; // 일치 , 불일치
2===3; 3!==4;  //동등, 부등


//템플릿 문자열
// template: 일정할 틀, 형식
const year = 2022; 
let month = 3;
let day = 11;
console.log(`생년월일은 ${year}년 ${month}월 ${day}일`)

function getTwice(x){
  return x*2;
}
const myNumber = 3;

console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다. `);




