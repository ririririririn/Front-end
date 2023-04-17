import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import SearchBar from "./SearchBar";
function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">Neppstagram</Link>
        </Logo>
        <SearchBar></SearchBar>
        <NavList>
          <li>
            <Link to="/">
              <AiOutlineHome size={20} />
            </Link>
          </li>
          {/* <li>
          <Link>검색</Link>
        </li> */}
          <li>
            <Link to="/posts">
              <AiOutlineEdit size={20} />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <AiOutlineUser size={20} />
            </Link>
          </li>
        </NavList>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  gap: 300px; /* justify-content: space-between; */
  ul {
    display: flex;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
`;
const Logo = styled.h1``;
const NavList = styled.ul`
  li {
  }
`;

export default Header;
