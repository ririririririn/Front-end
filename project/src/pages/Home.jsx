import { Outlet } from "react-router-dom";
import Post from "../components/common/Post";
import styled from "styled-components";
function Home() {
  return (
    <>
      <MainContainer>
        <PostBox>
          <Post></Post>
        </PostBox>
      </MainContainer>
      <SideContainer></SideContainer>

      <RandomUserContainer></RandomUserContainer>
    </>
  );
}
const MainContainer = styled.div``;
const SideContainer = styled.div``;
const PostBox = styled.div`
  /* border: 1px solid #000; */
`;

const RandomUserContainer = styled.div``;

export default Home;
