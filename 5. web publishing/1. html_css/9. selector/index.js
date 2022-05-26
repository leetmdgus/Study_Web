
직속자식은 .div>i와 같이 쓴다. css파일에서

.two, .four{} 와 같이 복수 선택이 가능하다. 

.outside.one // outside클래스를 갖고있으면서 one클래스도 갖고 있는태그

Pseudo-class(가상 클래스)
:을 이용하면 몇 가지 가상 클래스를 선택할 수 있다. 

n번째 자식
.div1 p:nth-child(3){}
//div1의 자식인 p태그중 3번째

// .div1 p:first-child
// .div1 p:last-child
// .div1 p:not(:last-child)
// .div1 p:not(:first-child)


마우스 오버
// h1:hover {} <-마우스가 태그에 올라갔을 때

상속되는 것들
color
font-family
font-size
font-weight
line-height
list-style
text-align
visibility
-> 물론 항상 그렇다고는 할 수 없다. 
예를 들어 a태그는 color속성이 상속되지 않는다. 
a태그가 억지로 상속을 받아오기 위해서는 해당속성의 inherit값을 써야한다. 

.div2 a{
  color:inherit;
}