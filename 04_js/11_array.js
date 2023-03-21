/*  
  배열(Array)
    - 배열을 통해서 여러개의 데이터 관리.
      =>배열 리터럴([])을 사용해서 표현한다.
    - 다른 타입의 데이터를 같이 사용할 수 있다
    - 배열의 크기가 동적으로 변할 수 있다.
    - 인덱스 값을 통해서 특정 요소를 참조 할 수 있다.

*/

let dataList = [1, "rin", {}];

console.log(dataList[rin]);

console.log(dataList.length);

// 배열의 요소 추가 및 제거

let numList = [1, 2, 3, 4];

/* 배열의 맨 마지막에 요소를 추가, 제거 - push, pop 

*/

numList.push(5, 6, 7, 8);
console.log(numList);

let result = numList.pop(); // 맨 마지막 요소 1개를 제거하고, 그 값을 반환한다.
console.log(numList);
let result1 = numList.pop();
console.log(numList);
console.log(result);
console.log(result1);

/* 배열의 맨 앞에 요소를 추가, 제거  - unshift , shift*/

numList.unshift("rin", -2, -3, 0);
console.log(numList);

let shift = numList.shift();
console.log(shift);
console.log(numList);

// 배열의 중간 요소 제거 및 추가: splice(시작인덱스, 삭제할 개수, 새로 추가할 요소......넣고싶은만큼 가득가득가득가득가ㅡㄷㄱ가득)

result = numList.splice(2, 3, 20, 30); //2번째 요소부터 2개 삭제하고 그 값을 반환
console.log(result);
console.log(numList);

// 배열의 중간 요소를 복사 : slice(시작 인덱스, 끝 인덱스)
//  - 끝 인덱스를 포함하지 않음
//  - ex)

result = numList.slice(3, 5);
console.log(result);
console.log(numList);

//요소의 인덱스값 구하기 : indexOf()

console.log(numList.indexOf(10)); // 없는 요소는 -1 반환. 분기처리에 사용.

//요소의 존재 유무 : includes()

console.log(numList.includes(-2)); // 요소의 존재 유무에 따라 true, false 반환

//!

/* console.clear(); */

// includes 함수 구현해보기
Array.prototype.customIncludes = function (num) {
  //console.log(this); // this 가 매서드를 호출한 배열을 가리킨다.

  if (this.includes(num) === true) {
    console.log(true);
  } else {
    console.log(false);
  }
};

//배열을 돌면서 있으면 true
//20 넣으면 잇으면

numList.customIncludes(60);

// console.clear();

//엥 안됨..?

Array.prototype.customIncludes = function (value) {
  // console.log(this.length);

  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return true;
  }
  return false;
};

numList.customIncludes(2);

console.log(numList.customIncludes(2));
