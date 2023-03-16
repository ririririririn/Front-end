/* 
  조건문
  -조건에 따라서 실행할 코드를 작성한다.

*/

let num = 9;

if (num % 2 === 0) {
  console.log("짝수임");
} else if (num % 2 === 1) {
  console.log("홀수임");
}

/* 
  switch(비교될 값)
  - 조건이 아니라 값을 비교해서 일치하는 케이스를 실행한다.
  case 값 : 실행될 코드
   => 값이 일치하는 case의 코드를 실행한다.
   일치하는 case 이후의 case들도 실행된다.


*/

let data = "자료";

switch (typeof data) {
  // ca/*  */se "number":
  case "number":
    console.log("숫자맞당");
    break;
  case "string":
    console.log("문자당");
    break;
  default:
    console.log("없서");
    break;
}

let score = 69;

//100~90 : A
//80~89 : B
if (score > 100 || score < 0) {
  console.log("점수는 100~0사이");
} else {
  switch (Math.floor(score / 10)) {
    case 10:
    case 9:
      console.log("A");
      break;
    case 8:
      console.log("B");
      break;
    case 7:
      console.log("C");
      break;
    case 6:
      console.log("D");
      break;
    default:
      console.log("F");
      break;
  }
}
