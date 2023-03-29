import { useRef, useState } from "react";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

let nextId = 4;

const initialState = [
  { id: 1, text: "React 프로젝트 생성하기", done: true },
  { id: 2, text: "컴포넌트 만들기", done: true },
  { id: 3, text: "상태 관리하기", done: false },
];

export default function App() {
  const [todos, setTodos] = useState(initialState);

  const createTodo = (text) => {
    //concat(): 전달된 인자가 배열이면 두 배열을 합친 새로운 배열을 반환
    // => 인자가 배열이 아니면 기존배 열에 추가한 새로운 배열을 반환

    setTodos(todos.concat({ id: nextId++, text: text, done: false }));
  };

  const toggleTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoHeader todos={todos} />
      <TodoInput createTodo={createTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </div>
  );
}
