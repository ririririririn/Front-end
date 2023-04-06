import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.main};
  background: linear-gradient(
    90deg,
    rgba(28, 211, 172, 1) 0%,
    rgba(2, 181, 228, 1) 100%
  );
  padding: 10px 20px;
  font-weight: 700;
  color: #fff;
  position: absolute;
  right: 0;
`;

export default Button;
