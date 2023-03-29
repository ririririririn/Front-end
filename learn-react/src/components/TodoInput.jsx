import { useRef } from "react";

// src/components/TodoInput.jsx
export default function TodoInput({ createTodo, onChange }) {
  // text 상태 관리하기
  // const [text, setText] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    createTodo();
    inputRef.current.focus();
  };
  const inputRef = useRef(null);
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={onChange} ref={inputRef} />
        <button>등록</button>
      </form>
    </div>
  );
}
