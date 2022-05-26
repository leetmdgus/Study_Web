// 할당 연산자(Assignment operators);

let name = 'CodeIt';
let x = 5;

//복합할당 연산자(Compound assignment operators);
//다음 두 줄은 같다. 
x += 1;
x = x+1;

// 증가(increment), 감소(decrement)연산자
x = x+1;
x+=1;
x++;

x--;

// 옵셔널 파라미터 
// 파라미터에 미리 값을 할당한 것
// 옵셔널 파라미터는 가장 뒤쪽으로 선언한다. 
function sayHello(name="Hyun"){
}


// 변수의 Scope : 범위 영역. 
// function 은 functio 안에서. 
// {}<- 이 안에서

let y = 3; // 글로벌 변수, 전역 변수(Global Variable)
function myName(){  //블록문(Vlock Statement)
  let y = 4; //로컬 변수, 지역변수 (Local Variable)
}


// 스위치문(switch)
switch(x){
  case 1:
    console.log("");
    break;
  default:
}
// switch문은 break;문을 만나기 전까지 다 실행해버린다. 
// 스위치는 if의 ==와 다르게 자료형을 엄격하게 구분한다. 


// for문
// i++부분을 꼭 채우지 않아도 된다. 
// 초기화 부분도 반드시 채울 필요는 없다. 
// 세미콜론은 생략하지 못한다. 
for(;x<10;){
}

// 100까지 짝수찍기
for(let i = 2; i<=100; i+=2){ 
  console.log(i);
}

function printTriangle(height) {
	// 여기에 코드를 작성해 주세요.
	let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
	
}

// 테스트 코드 삼각형 만들기
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);