import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { tokenState } from "../../state/auth";
import { useQuery } from "react-query";
import { getCurrentUser } from "../../api/users";

function Public() {
  const [token, setToken] = useRecoilState(tokenState);
  // const { error } = useQuery("users/current", getCurrentUser);
  const navigate = useNavigate();

  useQuery("users/current", getCurrentUser, {
    onError: (error) => {
      if (error?.response?.status === 401) {
        setToken(null);
        localStorage.removeItem("access=token");
        alert("로그인이 만료되었습니다.");
        navigate("auth/login");
      }
    },
  });

  if (!token) return <Navigate to="/auth/login" />;

  return (
    <Container>
      <Header></Header>
      <Outlet></Outlet>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

export default Public;
