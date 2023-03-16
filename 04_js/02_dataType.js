/* 
  자료형 (data Type)
    -컴퓨터가 다룰 수 있는 자료의 형태
*/

/* 
  숫자형(number) 
  -js 정수와 실수를 다른 자료형으로 구분 짓지 않는다
  */

console.log(0.1 + 0.2);
//js 는 정밀한 수학 계산에 적합하지 않다.
//0.30000000000000004 이렇게 나옴

console.log(typeof 3);

/* 문자열 (string)
  - "", ''
*/

/* 
  boolean
  -true 1 faulse 2
 */

let age = 25;
let old = age > 25;
console.log(age);
console.log(old);

/* 
  null , undefined
  - 조건문에 사용하면 false 처럼 동작한다.
  -undefined : 값이 정의되지 않았을 때 => 값이 없을 때
  -null : 유효하지 않은 값이라고 명시를 해놓는 것
*/
let flower;
console.log(flower);

/* 
  array
  -여러개의 값을 저장ㅎ라 때 사용한다
  -인덱스의 값을 통해서 n번째 요소를 참조할 수 있다.
   =>배열의 순서는 0부터 시작한다.


*/

let fruits = ["사과", "포도", "딸기"];

console.log(fruits[2]);
fruits[0] = "귤";
console.log(fruits[0]);
fruits[4] = "배";

console.log(fruits);

/* 
  객체 Object
  -배열과 비슷하게 여러개의 값을 저장할 수 있다
   =>속성은 key:valule의 형태로 사용한다.
  -.을 통해서 해당 객체의 속성값들을 참조할 수 있다.
  
  */

let rin = {
  age: 26,
  name: "rin",
};

console.log(rin.age);

rin.fruits = "복숭아";

console.log(rin);
