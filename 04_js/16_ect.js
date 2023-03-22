function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3));

// js 에서는 정의된 매개 변수보다 인자가 많이 전달되어도 오류 발생 X

function sumTotal() {
  let args = Array.from(arguments);
  console.log(args);
  //reduce 사용해서 전체 총합 반환하기
  return args.reduce(sum, 0);
}

sumTotal(1, 2, 3, 4, 5, 6, 7);

/*  

    rest 매개변수 : 매개변수 앞에 ...을 붙이면 들어오는 매개 변수들을 배열로 받는다.
     => rest 매개변수는 마지막에 위치해야한다.

*/

function sumTotal(...args) {}

// 펼침(Spread) 연산자 => 배열, 혹은 객체를 펼치는 효과가 있다.

let nums = [1, 2, 3, 4];
console.log(...nums);
console.log(1, 2, 3, 4);
console.log(sumTotal(...nums));
