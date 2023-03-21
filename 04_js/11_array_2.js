/* 
  배열의 고차함수(Higher Order Function)

  고차함수(Higher Order Function) : 
    - 함수를 반환하거나 인자로 전달 받는 함수
      => js 는 함수를 값으로 취급하기 때문에 가능하다.
      => js의 함수는 일급 객체이다. => 구글 검색 추천

   
   */

//함수를 반환하는 함수
function foo() {
  return function () {
    console.log("hi");
  };
}
let bar = foo();

function repeat(n, callback) {
  for (i = 0; i < n; i++) {
    callback(i);
  }
}
repeat(3, bar);

let numbers = [1, 2, 3, 4, 10];
// 배열의 크기만큼 반복, 가독성이 다소 떨어진다.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

/* 
    Array.prototype.forEach(function(요소,인덱스){})

    - 배열의 각 요소를 순회하면서 콜백함수를 실행한다.
      => 배열의 크기만큼 반복실행된다.
    -인자로 콜백함수를 전달한다
      =>콜백함수의 첫번째 매개변수에는 배열의 각 요소들이 한 번씩 전달되며 실행된다.
      => 콜백함수의 두번째 인자의 요소로는 인덱스 값이 적용된다.
    - 배열의 요소를 값으로 사용하여 단순히 반복실행한다.
    - return 되는 값이 없다.
*/
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function (fruit, idx) {
  console.log(fruit, idx);
});

//문제

let users = [
  { name: "rin1", age: 26 },
  { name: "rin2", age: 27 },
  { name: "rin3", age: 28 },
];

let result = users.forEach(function (user) {
  console.log(`안녕 나는 ${user.age}살 ${user.name}이다`);
});

console.log(result); // undifined

/* 
  Array.prototype.filter()
    - forEach 와 마찬가지로 배열을 순회하며 실행된다.
    - 특정 조건을 만족하는 요소만을 모아서 새로운 배열로 반환한다.
      => 인자로 전달된 콜백함수의 return 값이 true 나 false 여야 한다.
      => return 값이 true 인 요소만 배열로 모아서 반환한다!!
    - 원본 배열이 변경되지 않는다!!!!!!!!!!! 중요!!!!!!!!!!!!!!!
*/

let OldUsers = users.filter(function (user) {
  return user.age > 26;
});

console.log(OldUsers);
console.log(users); // 원본 배열이 변경되지 않는다!!

/* 

  Array.prototype.map()
    - forEach 와 마찬가지로 배열을 순회하며 실행된다.
    - 요소의 값을 통해서 새로운 값을 만들어서 배열로 모아서 반환한다. 
    - 콜백함수의 return 값이 새로운 배열 요소로 모여서 반환된다.
      => return 값이 없으면 undifined 가 배열로 모인다.
    - 원본 배열을 변경하지 않는다.


  */

let dbNumbers = numbers.map(function (num) {
  // console.log(num * 2); 안보임
  return num * 2;
});

console.log(dbNumbers);
console.log(numbers); // 원본 배열 바뀌지 않음!!!!!!!!!!1

//

// users 에서 이름만 모은 name리스트 만들기

let nameList = users.map(function (user) {
  return user.name;
});

console.log(nameList);
console.log(users);

/* 
  Array.prototype.reduce()
    - 결과를 누적시키는 누산기를 사용한다
    - 콜백 함수의 첫번째 매개변수에는 이전 회차의 값, 두번째 인자는 현재 회차의 값.
      => 첫번째 회차에서는 이전에 초기값이 전달 된다.
    - 콜백함수의 세번째 매개변수는 초기값을 설정한다. 

*/

let total = numbers.reduce(function (acc, curr) {
  return acc * curr;
});
console.log(total);

let total02 = numbers.reduce(add, 0);

function add(a, b) {
  return a + b;
} // 함수 외부에서 만드는 방법

console.log(total, total02);

//
let fillArr = users.filter((user) => user.age >= 30);

let oldUserNames = fillArr.map((user) => user.name);

/* let oldUserNames = users.map(function (user) {
  if (user.age > 26) {
    return user.name;
  }
}); */

oldUserNames = users.filter((user) => user.age > 26).map((user) => user.name);

console.log(oldUserNames);

/* 유사 배열
  - 배열처럼 key 값이 인덱스이고, length 프로퍼티를 갖는 객체.
  - 이름처럼 배열과 유사하지만 배열은 아니기 때문에 배열의 다른 함수들을 사용하는 것이 불가능.
    => HTMLCollection, NodeList 등...... 많음
  */

let arrayLike = {
  0: "rin1",
  1: "rin2",
  2: "rin3",
  length: 3,
};
console.log(arrayLike[0]);

/* Array.from: 유사배열 혹은 반복가능한 객체(이터러블)을 배열로 만들어서 반환한다. */
let arr = Array.from(arrayLike);

console.log(arr);
arr.forEach((item) => console.log(item));

/* 
  원시값과 참조 값
    
    원시값(Primative)
      - 변경이 불가능한 값.
      - 복사를 하면 값 복사가 일어남
      
    객체
      - 변경이 가능한 값.
      - 복사를 하면 주소 복사가 일어남.
      - 객체의 프로퍼티가 객체인 경우는 얕은 복사와 깊은 복사의 차이가 있다.
        => 얕은 복사: 겉에만 값 복사가 일어나고 프로퍼티가 객체인 경우 참조 복사가 일어난다.
        => 깊은 복사: 프로퍼티가 객체인 경우에도 값 복사가 일어나게 재귀적으로 복사.
*/
