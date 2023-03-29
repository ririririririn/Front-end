export default function TodoHeader({ todos }) {
  const today = new Date().toLocaleDateString("ko-kr", { dateStyle: "full" });
  console.log(today);
  const undoneCount = todos.filter((todo) => !todo.done).length;
  return (
    <div>
      <h2>{today}</h2>
      <p>
        해야할일 : {undoneCount}/{todos.length}
      </p>
    </div>
  );
}
