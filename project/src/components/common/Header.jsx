import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SearchBar from "./SearchBar";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import styled from "styled-components";

function Header() {
  const [hidden, setHidden] = useState(true);
  const searchLiRef = useRef(null);
  // useEffect(() => {}, [searchLiRef]);
  const toggleSearchBar = (e) => {
    e.stopPropagation();

    if (searchLiRef.current.contains(e.target)) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };
  window.addEventListener("click", toggleSearchBar);
  return (
    <>
      <Container>
        <HeaderWrapper>
          <Logo>
            <Link to="/">로고</Link>
          </Logo>
          <Nav>
            <li ref={searchLiRef}>
              <SearchBar
                style={{ display: !hidden ? "block" : "none" }}
              ></SearchBar>
              <button>
                <AiOutlineSearch size={25} />
              </button>
            </li>
            <li>
              <Link to="/">
                <AiOutlineHome size={25} />
              </Link>
            </li>
            <li>
              <Link to="upload">
                <AiOutlineUpload size={25} />
              </Link>
            </li>
            <li>
              <Link to="mypage">
                <AiOutlineUser size={25} />
              </Link>
            </li>
          </Nav>
        </HeaderWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #ccc;
  background-color: #fff;
`;

const HeaderWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.h1``;
const Nav = styled.ul`
  display: flex;
  /* align-items: center; */

  li {
    display: flex;
    margin-left: 10px;

    svg {
      padding: 5px 5px;
    }
  }
`;

export default Header;
