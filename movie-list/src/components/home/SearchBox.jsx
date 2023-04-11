import styled from "styled-components";
import Button from "../Common/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?query=" + query);

    // setQuery("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button>검색</Button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  /* display: flex; */
  margin: 0px 20px;
  position: relative;

  form {
    display: flex;
  }

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
