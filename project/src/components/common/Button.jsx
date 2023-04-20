import styled from "styled-components";

function button({ innerText, onClick }) {
  return <Button onClick={onClick}>{innerText}</Button>;
}

const Button = styled.button`
  width: 400px;
  height: 50px;
  background-color: #4c7dc2;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  font-weight: 500;
`;

export default button;
