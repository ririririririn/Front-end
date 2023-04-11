function TodoHeader() {
  const todayStr = new Date().toLocaleDateString("ko-kr", {
    dateStyle: "full",
  });
  return (
    <div>
      <h2>{todayStr}</h2>
    </div>
  );
}

export default TodoHeader;
