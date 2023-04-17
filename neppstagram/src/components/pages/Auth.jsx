import styled from "styled-components";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tokenState } from "../../state/auth";

export default function Auth() {
  const token = useRecoilValue(tokenState);

  // 토큰값이 있다면 home으로 이동
  if (token) return <Navigate to="/" />;

  return (
    <Container>
      <OutletWrapper>
        <Outlet></Outlet>
      </OutletWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const OutletWrapper = styled.div`
  border: 1px solid #000;
  padding: 50px 20px;
`;
