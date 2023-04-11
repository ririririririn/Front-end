import { useState } from "react";
import { createTodo } from "../redux/todos-redux";
import { useDispatch } from "react-redux";
function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>
      <button
        onClick={() => {
          dispatch(createTodo(text));
          setText("");
        }}
      >
        등록
      </button>
    </div>
  );
}

export default TodoInput;
