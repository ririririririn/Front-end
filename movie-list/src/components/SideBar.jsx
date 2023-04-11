import styled from "styled-components";
import SideItem from "./SideItem";
import { Link } from "react-router-dom";

const menuList = [
  {
    id: 1,
    text: "영화",
    to: "/movie/popular",
    sub: [
      { id: 1, text: "인기", to: "movie/popular" },
      {
        id: 2,
        text: "현재 상영 중",
        to: "/movie/playing",
      },
      {
        id: 3,
        text: "높은 평점",
        to: "/movie/top",
      },
    ],
  },
  {
    id: 2,
    text: "TV",
    to: "/tv/popular",
    sub: [
      {
        id: 1,
        text: "인기",
        to: "/tv/popular",
      },
      {
        id: 2,
        text: "오늘 상영",
        to: "/tv/playing",
      },
      {
        id: 3,
        text: "현재 상영 중",
        to: "/tv/playing",
      },
      {
        id: 4,
        text: "높은 평점",
        to: "/tv/top",
      },
    ],
  },
  {
    id: 3,
    text: "인물",
    to: "/person/popular",
    sub: [
      {
        id: 1,
        text: "인기 인물",
        to: "/person/popular",
      },
    ],
  },
];

function SideBar() {
  return (
    <Container>
      <Logo>
        <Link to="/">NEPP MOVIE</Link>
      </Logo>
      <UlContainer>
        {menuList.map((menu) => (
          <SideItem menu={menu} key={menu.id}></SideItem>
        ))}
      </UlContainer>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.main};
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #f3f3e8;
  margin-top: 50px;
  padding-left: 20px;
`;

const UlContainer = styled.ul`
  margin-top: 60px;
  color: #f3f3e8;
`;
