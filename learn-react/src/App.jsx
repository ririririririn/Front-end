import { useCallback, useMemo, useRef, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function getUndoneCount(todos) {
  console.log("해야할 일 세는 중");
  return todos.filter((todo) => !todo.done).length;
}

const initialState = [
  { id: 1, text: "React 프로젝트 생성하기", done: true },
  { id: 2, text: "컴포넌트 만들기", done: true },
  { id: 3, text: "상태 관리하기", done: false },
];
let nextId = 4;
export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  //useMemo (연산할 함수, 의존성 배열):의존하고 있는 값이 변했을 때만 연산
  const undoneCount = useMemo(() => getUndoneCount(todos), [todos]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  // useCallback(함수,의존성배열):의존하고 있는 값이 변했을 때에만 함수를 재 생성
  const createTodo = useCallback(() => {
    setTodos(todos.concat({ id: nextId++, text: text, done: false }));
  }, [todos, text]);

  const toggleTodo = useCallback(
    (id) => {
      const newTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      setTodos(newTodos);
    },
    [todos]
  );

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoHeader todos={todos} undoneCount={undoneCount} />
      <TodoInput createTodo={createTodo} onChange={onChange} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
