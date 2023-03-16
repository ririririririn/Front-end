/*  
  반복문
  -코드를 반복해서 실행한다 



  for(초기값;조건; 증감식)
  -조건이 true 라면 실행
  -false 면

  증감식을 제대로 작성하지 않으면 무한반복에 빠진다.




 */

let num = 0;

for (num; num < 5; num++) {
  console.log(num);
}

console.clear();

//구구단 2단 출력하기

for (let i = 1; i <= 9; i++) {
  console.log(` 2 * ${i} = ${2 * i} `);
}

//for문 중첩

for (let a = 0; a < 5; a++) {
  console.log("외부for");

  for (let b = 0; b < 5; b++) {
    console.log("중첩for");
  }
}

// 구구단 2~9단

for (let i = 1; i <= 9; i++) {
  console.log(`${i}단 시작`);
  for (let j = 1; j <= 9; j++) {
    console.log(`${i * j}`);
  }
}

/* 
  while 조건식 
  -조건식이 false 가 될 때까지 반복한다
  -외부 변수를 변경하는 식으로 종료 조건을 만족한다
  -break문을 통해서 종료할 수 있다.
  -continue
  -반복횟수가 불명확할 때 주로 사용한다
  */

let age = 30;

// while문으로 짝수만 출력하기

console.clear();
let x = 0;

while (x <= 100) {
  if (x % 2 === 0) {
    console.log(x);
  }
  x++;
}

let v = "g";
