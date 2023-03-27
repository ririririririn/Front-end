export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson" />;
}
// 다른 컴포넌트에서 사용할 수 있도록 export
export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

// 컴포넌트 :
//JS 함수 형태로 작성.
//대문자로 시작하는 파스칼 케이스로 작성해야함!!

/* 
    컴포넌트
    - ui를 js 함수 형태로 작성하여 조각으로 만들 수 있다.
    - 컴포넌트 함수는 대문자로 시작해야 한다.
    - 마크업 언어를 return 한다.
      => 해당 요소들이 화면에 출력된다.
    - 복잡한 구조의 ui 를 만들면 재사용성이 증가한다.
    - 하나의 파일에 여러개의 컴포넌트를 작성할 수 있다.
      => 위의 예제에서 Gallary를 부모 컴포넌트, Profile을 자식 컴포넌트라고 볼 수
*/
