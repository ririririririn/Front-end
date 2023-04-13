import { useNavigate, useState } from "react-router-dom"
import styled from "styled-components"
import {login} from '../../api/auth'
import useInputs from "../../hooks/useInputs"

export default function LoginForm(){
  const navigate = useNavigate()
  const [inputs,handleInputs] = useInputs({
    name:'',
    email:'',
    password:'',
    pwdVerify:'',
  })

  const {name,email,password,pwdVerify} = inputs;


 const handleSubmit =(e) =>{
    e.preventDefault();
 

    try{
      const status = login(inputs);
      console.log(status)
      if(status === 200){
        alert('로그인 성공')
      navigate('/')}
   }catch(e){console.log(e)}
 
 
  }

  return <div>
    <Title>Login</Title>
    <form onSubmit={handleSubmit}>
      <InputWrapper>    
        <input name='email' type="text" />
        <input name='password' type="password" />
      </InputWrapper>
      <BtnWrapper>    
        <button>Login</button>
        <button onClick={()=>navigate('/auth/signup')}>회원가입</button>
      </BtnWrapper>

    </form>
  </div>
}

const Title = styled.h2`
text-align:center;

`

const InputWrapper = styled.div`
    display:flex;
  flex-direction:column;
`


const BtnWrapper = styled.div`
    display:flex;
  flex-direction:column;
`


