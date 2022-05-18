const body = document.querySelector("body");

function handleWindowResize(){
  let backgroundColor;
  const width = window.innerWidth;

  if(0 < width && width < 400){
    backgroundColor = "purpleBackground";
  }else if(400 <= width && width < 800){
    backgroundColor = "blueBackground";
  }else{
    backgroundColor = "yellowBackground";
  }
  body.className = backgroundColor;

}


window.addEventListener("resize", handleWindowResize);

// alt + f12;
// f12;

// refactoring
// ctrl + shift + R -> 함수를 싸맬 수 있읍, 혹은 변수로 만들 수 있음
// 다른 파일로 빼고 싶을 때도 사용 가능하다. 

// renaming 
// f2를 하면 연관된 모든 변수를 바꿔준다. 

// snippets
// muli커서
// 커서를 누를때 alt를 누르면 다중 선택 이 가능
// 타이핑을 동시에 할 수 있다. 

// emmet
// div 안 p태크 만들고 싶을 때, 
// div>p*3 
// div.container>p.title*5
// css
// dn + tap
// m100 +tap

// ctrl +L
// alt + 방향키

// 복사 -> shitf + alt + 방향키

//ctrl+p -> 파일 검색
// ctrl +` -> 터미널 열기

// alt + shift + i; 커서 여러개 생성
// shift + alt + drag

// ctrl b
// ctrl home