import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import styled from "styled-components";
function Header() {
  const [hidden, setHidden] = useState(true);
  const toggleSearchBar = () => {
    setHidden(!hidden);
  };
  console.log(hidden);

  return (
    <>
      <Container>
        <HeaderWrapper>
          <Logo>
            <Link to="/">로고</Link>
          </Logo>
          <Nav>
            <li>
              <SearchBar
                style={{ display: !hidden ? "block" : "none" }}
              ></SearchBar>
              <Button
                onClick={toggleSearchBar}
                innerText={<AiOutlineSearch size={25} />}
              ></Button>
            </li>
            <li>
              <Link to="/">
                <AiOutlineHome size={25} />
              </Link>
            </li>
            <li>
              <Link to="">
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