import styled from "styled-components";

function Input({ onChange, name, type }) {
  return <Inputs onChange={onChange} name={name} type={type}></Inputs>;
}
const Inputs = styled.input`
  width: 400px;
  height: 50px;
  padding: 0 5px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  outline: none;
  border: 2px solid #eee;
  border-radius: 5px;
`;
export default Input;
