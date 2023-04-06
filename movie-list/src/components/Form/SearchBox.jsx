import styled from "styled-components";
import Button from "../Common/button";

function SearchBox() {
  return (
    <Container>
      <input type="text" />
      <Button>Search</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0px 20px;
  position: relative;
  input {
    flex: 1;
    border: none;
    outline: none;
    padding: 10px 7px;
    border-radius: 20px;
    margin-right: 20px;
  }
`;

export default SearchBox;
