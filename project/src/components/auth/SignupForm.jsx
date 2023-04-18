import Input from "../common/Input";
import Button from "../common/Button";

import { useInputs } from "../../hooks/useInputs";
import { signup } from "../../api/auth";

function SignupForm() {
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
    pwdVerify: "",
  });

  const handleSubmit = async (e) => {
    const { name, eamil, password, pwdVerify } = inputs;
    e.preventDefault();
    signup(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleInputs} name="name" type="text" />
      <Input onChange={handleInputs} name="email" type="text" />
      <Input onChange={handleInputs} name="password" type="password" />
      <Input onChange={handleInputs} name="pwdVerify" type="password" />
      <Button innerText={"sign up"}></Button>
      <Button innerText={"cancle"}></Button>
    </form>
  );
}

export default SignupForm;
