/* 

  프로미스(promise)
    - 비동기처리를 도와주는 객체
    - 인스턴스를 생성할 때 콜백함수를 인자로 전달한다.
      1) 콜백함수의 첫번째 인자 : resolve 함수
        => 성공했을 때, 데이터를 반환해주는 함수
        => 인스턴스의 then 메서드의 콜백함수로 전달된다.
        => resolve 가 될 때까지 then의 다음 코드를 실행하지 않는다.
      2) 콜백함수의 두번째 인자 : reject 함수
        => 실패했을 때, 에러를 발생시키는 함수
        => reject 함수의 인자로 이유를 전달하면 된다.
        => 인스턴스의 catchl 매서드를 통해서 에러를 처리할 수 있다.
        
    - api 통신을 통해서 서버에서 데이터를 받아올 때 promise가 반환된다.  

    -프로미스에는 세가지 상태가 있다  
      1)풀필드 : 리졸브 
      2)리젝티드:리젝트 
      3)펜딩: 둘 다 안되어있는 상태
*/

/* 리졸브 나 리젝트가 되기 전까지 프로미스 실행안됨!!!!!!!!!!!! */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("에러발생");
  }, 3000);
});

console.log("데이터요청");

promise.then((value) => {
  console.log("데이터 받아오기 성공");
  console.log(value);
});

promise.setTimeout(() => {
  if (!data) {
    reject("찾는 영화가 없습니다.");
  }
});

/* 전달받은 영화명의 영화가 있는지 */

function getData() {
  return new Promise();
}

getData().then();

/*
  async/sync 
    - 함수 앞에다가 async를 붙이면 비동기 처리 함수가 된다.


*/

async function render(title) {
  let data = getDat(title);
  console.log(data)
}

render('')