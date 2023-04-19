import Input from "../common/Input";
import Button from "../common/Button";

import { useInputs } from "../../hooks/useInputs";
import { signup } from "../../api/auth";

function SignupForm() {
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    const { name, email, password, pwdVerify } = inputs;
    e.preventDefault();

    // formData!
    // const formData = new FormData(e.target);
    // let entries = formData.entries();
    // for (const pair of entries) {
    //   if (pair[1] === "") {
    //     alert(`${pair[0]} 칸을 입력해주세요.`);
    //     return;
    //   }
    // }

    if (password !== pwdVerify) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    signup(name, email, password);
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
