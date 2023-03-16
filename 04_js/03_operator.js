/* 
  연산자 (operator)
    - 피연산자에 연산을 통해서 새로운 값을 생성.

  피연산자 (Operand)
    - 연산에 사용되는 값.

*/

//= : 할당연산자 . 우항의 값을 좌항에 할당한다.

//산술 연산자 : 피연산자에 산술된 값을 반환한다.
// + - * / %

let age = 20;
age = age + 20;

console.log(age);

console.log(age);
console.clear;
age = age + 10 / 2;
console.log(age);

/* 
  산술 할당 연산자
  - 산술과 할당 동시에 한다.
*/

age += 10;
console.log(age);

/* 
  단항 산술 연산자
   -피연산자가 하나인 연산자
*/

age = 10;

age++;
console.log(age);

let result = age++;
console.log(result);

a = 10;
let result01 = a++ + 10;
/* --age; */ console.log(result01, age);

console.log(age);

/* 연결 연산자 문자열  */
console.log("hi" + " rin");

console.log(1 + "1"); //문자로 바뀜 결과 11

//perseInt(문자열) => 숫자로 변환 가능한 문자열을 숫자형으로 바꾼다.

//숫자 +문자열 => 연결 연산자
//숫자 - 문자열 => 문자열을 숫자로 변환해서 산술

/* 
  비교연산자
    -피연산자끼리 값을 비교하여 true 혹은 false를 반환한다
    =>조건식에 사용한다
*/

console.log(1 !== "1");

/* 
  논리 연산자
  || or
  && and
  ! not
*/
let q = 20;
let w = 10;

q = w;
w = q + q;
console.log(q);
console.log(w);
