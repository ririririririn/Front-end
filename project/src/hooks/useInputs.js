import { useState } from "react";

export function useInputs(initialState) {
  const [inputs, setInputs] = useState(initialState);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return [inputs, handleInputs];
}
