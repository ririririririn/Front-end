import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Auth() {
  return (
    <Container>
      <Outlet></Outlet>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

export default Auth;
