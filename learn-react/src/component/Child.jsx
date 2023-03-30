import React, { useContext, useEffect } from "react";
import { handleCountContext } from "./GrandParent";

function Child() {
  const handleCount = useContext(handleCountContext);

  useEffect(() => {
    console.log("Child Conponent render!");
  });

  return (
    <div
      style={{
        border: "3px solid yellow",
      }}
    >
      <h3>Child</h3>
      <button onClick={handleCount}>+1</button>
    </div>
  );
}

export default Child;
