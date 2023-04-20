import Input from "../common/Input";
import Button from "../common/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    <Form onSubmit={handleSubmit}>
      <Logo>로고</Logo>
      <InputBox>
        <Input onChange={handleInputs} name='name' type='text' />
        <Input onChange={handleInputs} name='email' type='text' />
        <Input onChange={handleInputs} name='password' type='password' />
        <Input onChange={handleInputs} name='pwdVerify' type='password' />
      </InputBox>
      <Button innerText={"회원가입"}></Button>
      <Link to='/auth/login'>계정이 있으신가요?</Link>
    </Form>
  );
}

const Form = styled.form`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid #eee;

  a {
    position: absolute;
    bottom: 25px;
    font-size: 14px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.h1`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const InputBox = styled.div`
  text-align: center;
  margin-bottom: 30px;

  input {
    margin-bottom: 5px;
  }
`;

export default SignupForm;
