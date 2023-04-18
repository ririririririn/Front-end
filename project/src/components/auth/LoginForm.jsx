import Input from "../common/Input";
import Button from "../common/Button";

import { useInputs } from "../../hooks/useInputs";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [inputs, handleInputs] = useInputs({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input onChange={handleInputs} name="email" type="text" />
      <Input onChange={handleInputs} name="password" type="password" />
      <Button innerText={"login"}></Button>
      <Button onClick={handleSignUp} innerText={"sign up"}></Button>
    </form>
  );
}

export default LoginForm;
