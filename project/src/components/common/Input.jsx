import styled from "styled-components";

function Input({ onChange, name, type }) {
  return <Inputs onChange={onChange} name={name} type={type}></Inputs>;
}
const Inputs = styled.input`
  outline: none;
`;
export default Input;
