import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todos-redux";

function TodoList() {
  const todos = useSelector(({ todos }) => todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done && "line-through" }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
