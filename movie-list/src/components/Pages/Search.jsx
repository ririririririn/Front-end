import styled from "styled-components";
import SearchBox from "../Form/SearchBox";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { tmdbAxios } from "../../api/tmdbAxios";
import { useState } from "react";
import Poster from "../Common/Poster";

function Search() {
  //쿼리 스트링으로 넘어온 keyword 꺼내기
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await tmdbAxios.get("search/movie?query=", {
        params: { query },
      });

      setResults(data.results);

      console.log(data.results);
    };
    fetchData();
  }, [query]);

  if (!results) return <div>로딩 중...</div>;

  return (
    <Container>
      <SearchBox></SearchBox>
      <UlPost>
        {results.map((item) => (
          <li>
            <Poster data={item} />
          </li>
        ))}
      </UlPost>
    </Container>
  );
}

export default Search;

const Container = styled.div``;

const UlPost = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  /* align-items: center; */

  flex-wrap: wrap;
  gap: 20px;

  li {
    /* width: 154px; */
  }
`;
