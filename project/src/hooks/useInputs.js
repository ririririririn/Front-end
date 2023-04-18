import { useState } from "react";

export function useInputs() {
  const [inputs, setInputs] = useState();

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  return [inputs, handleInputs];
}
