/* 

    동기 (asynchronous)와 비동기 (asynchronous)
      - 동기적 : 결과값을 기다린다
      - 비동기적 : 결과값을 기다리지 않는다.
      - js 싱글 스레드 기반의 논블로킹 언어이다
*/

let a = 10;
let b = 20;

let result = a + b;
console.log(result);

/* 
    스케줄링 - 비동기적 처리
      - 특정 코드를 일정시간 뒤에 실행하거나 일정 시간마다 반복한다

    setTimeout (콜백함수, 시간)
      - 콜백함수를 일정시간 뒤에 실행한다.
      - js 가 직접 관리하는 것이 아니라 실행환경에서 도와준다.
      - id값을 반환하는데 이 id 값으로 실행이 되기 전에 스케줄을 취소할 수도 있다.
          => clearTimeout(id)를 통해서 스케줄을 취소한다. 

    setInterval(콜백함수, 지연시간)
      - setTimeout 과 차이점은 일정 시간마다 반복적으로 실행한다.

    콜백지옥
      - 비동기 처리를 하는 가장 기본적인 방법은 콜백함수
        => 콜백함수를 계속해서 중첩해서 사용하는 콜백지옥에 빠진다.
        => 가독성이 떨어지고 코드를 이해하기 힘들어진다.


*/
console.log("setTimeout 시작!"); // 실행순서 1
const timeout = setTimeout(function () {
  // 실행순서 3
  console.log("실행");
}, 2000);
console.log("setTimeout 종료!"); // 실행순서 2

clearTimeout(timeout);

let second = 0;
let interval = setInterval(function () {
  console.log(++second);
}, 1000);

//5초 뒤에 인터벌 취소하기
// const cancel = const
const seconds5 = setTimeout(() => {
  clearInterval(interval);
}, 5000);

let data = null;
//데이터를 받아오는데 3초가 걸린다고 가정
setTimeout(() => {
  data = {
    name: "rin",
  };
}, 3000);
console.log(data.name); // null 의 name 을 받아오ㄹ고해서 오류

