/* 

    built_in 객체


      1. 전역 객체
          - js 가 가장 먼저 생성하는 특수한 객체.
          - 실행되는 환경에 따라 달라진다.
            => 브라우저 환경에서는 window, node 환경에서는 global 이라는
               식별자를 통해서 참조 가능하다.
            => 환경에 따라서 필요한 메서드, 프로퍼티 등을 가진다.
          - 어디서든 참조할 수 있는 최상위 객체(프로토타입에서의 상위라는 얘기 X)
          - 전역 객체가 제공하는 프로퍼티나 메서드는 전역객체 식별자를 생략하고 참조할 수 있다.

        2. 빌트인 객체
            - 개발에 필요할만한 기능을 제공하는 여러 객체가 전역 객체에 포함되어 있다.

        3. 호스트 객체
            - 



*/

console.log("hello world"); // global.console.log()에서 전역 객체인 global 생략
console.log(globalThis); /// 실행환경과 관계없이 전역객체 참조.

var a = 10; // var 키워드를 전역에서 사용하면 전역 객체의 프로퍼티로 할당된다.
console.log(globalThis.a); // 10
let b = 100;
console.log(globalThis.b);

// Math : 수학과 관련된 메서드 및 프로퍼티를 제공한다.
console.log(Math.PI); // 3.14....

// 소수점 이하 숫자 처리

console.log(Math.floor(3.2)); //3
console.log(Math.ceil(4.9)); // 5 소수점 이하 숫자를 올림한다
console.log(Math.round(1.4)); // 소수점 이하 숫자를 반올림 한다

//1.12 => 소수점 둘재자리 이하 반올림 1.12를 1.1 만들기
console.log(Math.round(1.12 * 10) / 10);

Math.random(); //0~1 사이의 랜덤한 실수를 반환한다. 0 <= x < 1 // 1은 안나온다!!!!!

let random = Math.floor(Math.random() * 100) + 1; // 1~100 사이의 랜덤한 숫자 1과 100 포함
console.log(random);

//로또 번호 1~45 사이의 숫자 6개 배열로 반환하는 함수 만들기
// => 반복문 종료 시점? 배열의 갯수가 6개가 될 때 = > 언제 6개가 될지 알 수 없다.
// 랜덤한 숫자가 중복 X => 배열에 하나씩 집어넣으면서 있는 값인지 확인?

function getLottoNums() {
  let nums = [];

  while (nums.length < 6) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!nums.includes(num)) {
      nums.push(num);
    }
  }
  console.log(nums);
  return nums;
}
getLottoNums();

/* function getLottoNum02() {
  let rangeNum = [];
  let numbers = [];
  for(let i =1; i<=45;i++){
    rangeNum.push(i);
  }
  for(let i = 0; i <6; i++){
    let idx = 
  }
}

 안좋은예시
 */

/*

    date : 시간과 날짜 관련된 프로퍼티와 메서드 제공

s


*/
let today = new Date();

console.log(today); // 객체지만 그냥 참조해서 콘솔창에 출력하면 시간과 날짜가 ㅍ기된다.

let year = today.getFullYear();
console.log(year);
console.log(today.getDay());
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMonth()); // 0~11 사이의 숫자 반환

let dateStr = today.toLocaleDateString("ko-kr");
console.log(dateStr);
