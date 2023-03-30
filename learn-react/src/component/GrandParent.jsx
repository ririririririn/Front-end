import { createContext, useCallback, useContext, useState } from "react";
import Parent from "./Parent";

export const CountContext = createContext(0);
export const handleCountContext = createContext(null);
function GrandParent() {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => setCount((c) => c + 1), []);
  // const context() = useContext(countContext);
  return (
    <CountContext.Provider value={count}>
      <handleCountContext.Provider value={handleCount}>
        <div
          style={{
            border: "3px solid black",
          }}
        >
          <h1>Grand Parent</h1>
          <p>count : {count}</p>
          <button onClick={handleCount}>+1</button>
          <Parent handleCount={handleCount} />
        </div>
      </handleCountContext.Provider>
    </CountContext.Provider>
  );
}

export default GrandParent;

/* 
  Context API

    - 전역에 상태를 공유하고자 할 때 사용한다.

    1) CreateContext : Context 를 생성한다!
      => Context.Provider 를 통해서 값을 공유받고자 하는 컴포넌트를 감싸준다!!!
      => 공유하고자 하는 값을 value prop 에 지정한다.
      => 기본값은 Context.provider 밖에서 컨텍스트를 사용할 때 제공되는 값이다.

    2) useContext : 컨텍스트가 제공하는 값을 받는다.
      => 원하는 값을 제공하는 컨텍스트를 인자로 전달한다.
    
    - 여러개의 컨텍스트를 중첩해서 사용할 수 있다
    
*/

/*  useCallback 등을 사용할 때 
    함수형 업데이트를 사용하면 의존성을 제거할 수 있다 
    
      => 불필요한 재렌더링을 방지할 수 있다.
    
    
    
    */
