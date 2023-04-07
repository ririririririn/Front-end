import styled from "styled-components";
import Button from "../Common/button";
import { Link } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const [query, Setquery] = useState("");
  return (
    <Container>
      <input type="text" onChange={(e) => Setquery(e.target.value)} />
      <Button>
        <Link to={"/search?query=" + query}>Search</Link>
      </Button>
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
