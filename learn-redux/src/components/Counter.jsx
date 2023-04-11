import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counter-redux";

function Counter() {
  //dispatch : 상태 업데이트를 발생시키는 함수
  const dispatch = useDispatch();

  // selector: 스토어의 여러 상태값들 중 선택
  const count = useSelector(({ counter }) => counter);

  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          return dispatch(increase(5));
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          return dispatch(decrease(5));
        }}
      >
        -1
      </button>
    </div>
  );
}

export default Counter;
