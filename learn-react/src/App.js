const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  const title = "react";
  return (
    <>
      <h1
        style={{
          color: "red",
          fontWeight: "lighter",
        }}
      >
        Hello {title}!
      </h1>
      <h2>오늘은 {formatDate(today)}</h2>
      <img className="avatar" src={avatar} alt={description} />
    </>
  );
}

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

         
        
        
        
        
            
*/

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
