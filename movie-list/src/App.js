import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:8000/todos").then((res) => console.log(res));
  }, []);

  return (
    <div>
      <ul></ul>
    </div>
  );
}

export default App;
