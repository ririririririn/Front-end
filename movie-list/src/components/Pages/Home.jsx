// import styled from "styled-components";

import ContentList from "../Form/ContentList";
import SearchBox from "../Form/SearchBox";

const filters = {
  trending: [
    { id: 1, text: "오늘", active: true, url: "/trending/all/day" },
    { id: 2, text: "이번 주", active: false, url: "/trending/all/week" },
  ],
};

function Home() {
  return (
    <div>
      <SearchBox></SearchBox>
      <ContentList title="트렌딩" filterList={filters.trending}></ContentList>
    </div>
  );
}

export default Home;
