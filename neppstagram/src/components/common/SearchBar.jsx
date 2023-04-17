import styled from "styled-components";
import { useState, useRef, Link } from "react";
import { searchUser } from "../../api/users";
import { useQuery } from "react-query";

function SearchBar() {
  const [input, setInput] = useState("");
  const { data } = useQuery({
    queryKey: ["users/search", input],
    queryFn: () => searchUser(input, 1),
  });
  console.log(data);
  searchUser("test", 1).then((res) => res.console);

  //디바운스 - 마지막 요청만 수행. 일정시간 내에 또 실행되면 기존 timeout 취소
  const timeout = useRef(null);

  const handleInput = (e) => {
    //기존에 등록된 스케줄이 있으면 취소
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(() => {
      setInput(e.target.value);
    }, 400);
  };

  return (
    <Container>
      <InputBox>
        <input onChange={handleInput} type="text" />
      </InputBox>
      {data?.length > 0 && (
        <ResultList>
          {data?.map((user) => (
            <ResultItem key={user.id}>
              <Link to={`users/${user.id}`}>{user.name}</Link>
            </ResultItem>
          ))}
        </ResultList>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const InputBox = styled.div`
  border: 1px solid black;
  padding: 5px;
  input {
    border: none;
    outline: none;
  }
`;

const ResultList = styled.div`
  border: 1px solid black;
  border-top: none;
  position: absolute;
  width: 100%;
  background-color: #fff;
`;

const ResultItem = styled.li`
  & + & {
    border-top: 1px solid black;
  }

  a {
    display: block;
    padding: 5px;
  }
  a:hover {
    background-color: #eee;
  }
`;

export default SearchBar;
