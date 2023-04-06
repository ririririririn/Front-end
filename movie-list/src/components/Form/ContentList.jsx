import styled from "styled-components";
import FilterBox from "./FilterBox";
import { useEffect } from "react";
import { useState } from "react";
import { tmdbAxios } from "../../api/tmdbAxios";

function ContentList() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    tmdbAxios
      .get("/trending/all/week")
      .then(({ data }) => setItems(data.results));
  }, []);

  if (!items) return <div>로딩 중..</div>;
  return (
    <div>
      <FilterBox></FilterBox>
      <ul>
        {items.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContentList;
