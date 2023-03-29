import { useState, useRef } from "react";

// src/components/TodoInput.jsx
export default function TodoInput({ createTodo }) {
  // text 상태 관리하기
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    createTodo(text);
    inputRef.current.focus();
    setText("");
  };
  const inputRef = useRef("");
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={handleText} ref={inputRef} value={text} />
        <button>등록</button>
      </form>
    </div>
  );
}
