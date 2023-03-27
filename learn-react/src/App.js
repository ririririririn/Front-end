export default function TodoList() {
  return (
    // This doesn't quite work!
    <div>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}

/* 
  컴포넌트 export/import
  
    - 루트 컴포넌트는 기본적으로 create-react-app으로 프로젝트를 만들면,
      app.js가 루트 컴포넌트가 된다.
      => index.js 가 가장 먼저 실행되고, 가장 먼저 렌더링 되는 컴포넌트가 app 컴포넌트이다.
      =>  언제든 변경할 수 있다.
    - export/import를 통해서 컴포넌트를 별도의 파일로 관리할 수 있다.
      => export default 나 named export 둘 다 상관없지만,
         핵심이 되는 컴포넌트는 export default  권장!
      => named export 를 적절히 활용하면 하나의 파일에서 여러 컴포넌트를 내보낼 수 있다.


*/
