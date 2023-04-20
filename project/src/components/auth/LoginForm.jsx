import Input from "../common/Input";
import Button from "../common/Button";

import { useInputs } from "../../hooks/useInputs";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../api/auth";

function LoginForm() {
  const [inputs, handleInputs] = useInputs({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const token = login(inputs);
      if (token) {
        console.log("로그인성공");
        // navigate("/");
      }
    } catch {
      alert("이메일이나 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Logo>로고</Logo>
      <InputBox>
        <Input onChange={handleInputs} name='email' type='text' />
        <Input onChange={handleInputs} name='password' type='password' />
      </InputBox>
      <Button innerText={"로그인"}></Button>
      <Link to={"/auth/signup"}>계정이 없으신가요?</Link>
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

export default LoginForm;
