//01_varialbe.js
/*
 변수(variable)
  - 메모리에 데이터를 저장할 공간을 확보하고, 변수 이름을 통해서 접근할 수 있다.
  => 값에 이름을 붙인다.


  변수 선언(Decalration)
  -메모리에 변수 공간을 사용하겠다고 선언한다.
   =>변수,함수 등의 이름을 식별자(indentifier)라고 한다.
  -let, var, const(상수) 키워드와 함께 변수 이름을 작성한다.
  -변수를 선언만 하면 undifined라는 값이 초기화된다.

  변수 할당(Assignment)
  -만들어진 변수에 값을 저장한다.
  -'=' 연산자를 사용한다
  -'='을 기분으로 우항의 값이 좌항에 할당된다.

  변수 참조(Reference)
  -변수 이름을 통해서 저장된 값을 조회한다.

  변수 초기화
  -변수 선언과 동시에 할당을 진행한다.
   => 할당을 생략하면 undifined(정의되지 않은)가 초기화 된다.

   변수명 짓는 규칙
   -var 는 키워드이기 때문에 변수이름으로 사용할 수 없다.
   -문자, _,
   -숫자로 시작할 수 없다.
   -파스칼 케이스는 생성자의 식별자로 사용하고, 리액트에서 사용함
    ex) UserName


*/

let price = 1000;
console.log(price);

var userName;
userName = "rin!";
console.log(userName);
