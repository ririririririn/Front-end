import styled from "styled-components";

function Main({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
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
