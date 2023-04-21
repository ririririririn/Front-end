import { Outlet } from "react-router-dom";
import Post from "../components/home/Post";
import styled from "styled-components";
import CurrentUserBox from "../components/home/CurrentUserBox";
function Home() {
  return (
    <>
      <MainContainer>
        <PostBox>
          <Post></Post>
        </PostBox>
      </MainContainer>
      <SideContainer>
        <CurrentUserBox></CurrentUserBox>
      </SideContainer>

      <RandomUserContainer></RandomUserContainer>
    </>
  );
}
const MainContainer = styled.div`
  padding: 50px;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
const SideContainer = styled.div``;
const PostBox = styled.div`
  border: 1px solid #000;
`;

const RandomUserContainer = styled.div``;

export default Home;
