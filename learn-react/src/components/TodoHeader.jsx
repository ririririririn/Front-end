export default function TodoHeader({ undoneCount }) {
  const today = new Date().toLocaleDateString("ko-kr", { dateStyle: "full" });
  console.log(today);

  return (
    <div>
      <h2>{today}</h2>
      <p>해야할일 : {undoneCount}</p>
    </div>
  );
}
