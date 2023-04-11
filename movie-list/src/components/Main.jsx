import styled from "styled-components";
import SearchBox from "./home/SearchBox";

function Main({ children }) {
  return (
    <Container>
      <Wrapper>
        <SearchBox />
        {children}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 50px;
  background-color: #eee;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  /* background-color: #fff; */
`;

export default Main;
