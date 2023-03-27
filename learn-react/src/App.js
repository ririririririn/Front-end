import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItem = chemists.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name}></img>
      <b>{person.name}</b> : {person.profession}
      <p>{person.accomplishment}</p>
    </li>
  ));
  return <ul>{listItem}</ul>;
}

/* 
  
  2. 컴포넌트 export/import

    - 루트 컴포넌트는 기본적으로 create-react-app으로 프로젝트를 만들면,
      app.js가 루트 컴포넌트가 된다.
      => index.js 가 가장 먼저 실행되고, 가장 먼저 렌더링 되는 컴포넌트가 app 컴포넌트이다.
      =>  언제든 변경할 수 있다.
    - export/import를 통해서 컴포넌트를 별도의 파일로 관리할 수 있다.
      => export default 나 named export 둘 다 상관없지만,
        핵심이 되는 컴포넌트는 export default  권장!
      => named export 를 적절히 활용하면 하나의 파일에서 여러 컴포넌트를 내보낼 수 있다.


*/

/* 
  3.JSX (JavaScript and XML)
    - 자바스크립트 마크업 언어를 포함시키기 위한 확장된 문법
      => js 지만 html 구조를 한 눈에 알아보기 쉽다.
    - JSX는 React 개발을 도와주는 하나의 도구이다. react 와는 별개임
      => create-react-app을 통해 프로젝트를 생성하면 Babel 이라는 도구가 포함된다.

  4. JSX 문법

    1) 컴포넌트는 무조건 하나의 루트 요소를 반환해야 한다.
      => 불필요한 요소 (ex. div) 싫으면 <> </> 로 감싸기
          <> </> 는 Fragment 라고 한다
  
      jsx 안에 자바스크립트 값 포함 시키기 (표현
        -jsx안에서 {}안에 js 표현식을 작성하면 동ㅈ겅니 값ㅇ르 사용 할 수 있다,
          => 변수, 연산,함수 호출, 객체 리터럴 등 다양한 
            자바스크립트 값을 포함시킬 수 있다.
          = 값으로 평가되는 표현식이여야 한다. if문 for문(XXXXx)
          -styl속성을 통해 스타일을 지정할 때는 객체를 전달해야한다.
          => {{}} 형태로 잓어한다. 겉의 '''''{ } 는 자바스크립트 값임을 명시하고 안쪽의 {}객체 리터럴이다.
      

    2) <img>와 같은 셀프 클로징 태그에는 /로 닫아주어야한다.
      => ex) <img src=""> => <img src=""/>
          
    3) JSX에서는 거의 대부분 카멜케이스를  사용한다.
      => 작성한 속성(Attribute) 등이 결국에는 js 객체로 변환되기 때문.
      => 요소에 클래스를 부여할 때도 className을 사용한다.

         
        
  /* 
  
  5.Props
  
  - 같은 컴포넌트를 여러번 사용할 때 내용 등을 다르게 렌더링 할 수 있다.
  - 컴포넌트에 프로퍼티들을 나열하면 자식 컴포넌트의 첫번째 매개변수로 props 객체가 전달된다.
    => key-value 형태로 전달된다.
    => 매개변수에 {}를 사용하면 비구조화 할당이 되어 코드를 간소화 할 수 있다.
  - 매개변수 기본값 문법을 사용하여 프로퍼티가 전달되지 않았을 때 기본값을 적용할 수 있다.
  - 부모 컴포넌트가 받은 props 를 자식 컴포넌트한테 모두 전달할 때는 펼침 연산자를 통해서 간단하게 전달할 수 있다.        
  */

/* 
  6. children 
      -컴포넌트의 여는 태그와 닫는 태그 사이의 내용은 children 이라는 약속된 프로퍼티로 전달된다.
        =>원하는 위치 작성하여 출력할 수 있다.

*/

/* 
  조건부 렌더링
  - 조건에 따라 보여줄 내용이 달라지거나 혹은 렌더링 여부를 결정할 수 있다.

  1) if 문을 통해 조건에 따라 다른 jsx를 return 한다.
  => 간단한 내용보다는 조건에 따라 컴포넌트 자체가 달라지는 것처럼 구조 자체가 바뀔 때 사용한다.
  => 조건에 따라 내용을 렌더링하지 않고자 할 때는 null을 사용한다.

  2)삼항 연산자( ? :)
  => if문에 따른 return 값을 조금 더 간결하게 표현 가능할 때 사용한다.
  => jsx 안에서는 if문 사용이 불가능하기 때문에 jsx 안에서 return을 다르게 할 때 사용한다.

  3) &&
   => 단순히 앞에 조건에 따라 뒤에 내용이 렌더링 될지 말지 정할 때 사용한다.
*/

/* 
  8.배열 렌더링하기
  - jsx에 배열을 포함시키면 배열에 있는 아이템들을 렌더링할 수 있다.
  - 데이터를 배열로 관리하면서 map()과 filter() 함수를 통해서 렌더링할 수 있다.
      =>map() : 데이터를 jsx로 변환할 ㅅ ㅜ잇다
      =>filter() : 렌더링할 데이터를 필터링할 수 있다.
  - 배열을 렌더링할 때는 jsx 에 고유한 key 값을 부여해야한다.
    => react가 각 데이터를 구분해서 성능최적화를 할 수 있다.



*/
