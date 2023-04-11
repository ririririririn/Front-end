import styled from "styled-components";
import SearchFilter from "../search/SearchFilter";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { tmdbAxios } from "../../api/tmdbAxios";
import { useState } from "react";
import Poster from "../Common/Poster";

const initialFilter = [
  { id: 1, text: "영화", active: true, type: "movie" },
  { id: 2, text: "TV 프로그램", active: false, type: "tv" },
  { id: 3, text: "인물", active: false, type: "person" },
];

function Search() {
  //쿼리 스트링으로 넘어온 keyword 꺼내기
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query");

  const [results, setResults] = useState(null);

  const [filterList, setFilterList] = useState(initialFilter);

  const handleFilter = (id) => {
    setFilterList(
      filterList.map((filter) =>
        filter.id === id
          ? { ...filter, active: true }
          : { ...filter, active: false }
      )
    );
  };

  useEffect(() => {
    setFilterList(initialFilter);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      const { type } = filterList.find((filter) => filter.active);
      const { data } = await tmdbAxios.get(`search/${type}`, {
        params: {
          query,
        },
      });

      setResults(data.results);
    };

    fetchData();
  }, [query, filterList]);

  if (!results) return <div>로딩 중zz...</div>;

  return (
    <Container>
      <SearchFilter filterList={filterList} handleFilter={handleFilter} />
      <UlPost>
        {results.map((item) => (
          <li key={item.id}>
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
