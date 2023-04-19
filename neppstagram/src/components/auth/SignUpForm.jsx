import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInputs from "../../hooks/useInputs";
import { signup } from "../../api/auth";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [inputs, handleInputs] = useInputs({
    name: "",
    email: "",
    password: "",
    pwdVerify: "",
  });

  const { name, email, password, pwdVerify } = inputs;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    // for ~ of : 이터러블(순회가능,반복가능)한 객체를 순회한다
    for (const pair of form.entries()) {
      if (pair[1] === "") {
        alert(`${pair[0]}값 입력해`);
        return;
      }
    }

    if (password !== pwdVerify) {
      alert("비밀번호 입력 같게");
      return;
    }

    try {
      const status = await signup(name, email, password);

      // console.log(status)

      if (status === 201) {
        alert("회원가입에 성공했음");
        navigate("/auth/login");
      }
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  return (
    <div>
      <Title>SignUp</Title>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <input
            name="name"
            onChange={handleInputs}
            type="text"
            placeholder="이름" /*  required */
          />
          <input
            name="email"
            onChange={handleInputs}
            type="text"
            placeholder="이메일" /*  required */
          />
          <input
            name="password"
            onChange={handleInputs}
            type="password"
            placeholder="비번" /* required */
          />
          <input
            name="pwdVerify"
            onChange={handleInputs}
            type="password"
            placeholder="비번확인" /* required */
          />
        </InputWrapper>
        <BtnWrapper>
          <button>Sign Up</button>
          <button type="button" onClick={() => navigate("/auth/login")}>
            취소
          </button>
        </BtnWrapper>
      </form>
    </div>
  );
}

const Title = styled.h2`
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
