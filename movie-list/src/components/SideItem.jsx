import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function SideItem({ menu }) {
  const { pathname } = useLocation();
  const category = pathname.split("/")[1];

  return (
    <Li $active={category === menu.to.split("/")[1]}>
      <MainMenu to={menu.to}> {menu.text}</MainMenu>
      <ul>
        {menu.sub.map((item) => (
          <li key={item.id}>
            <SubMenu to={item.to} $active={pathname === item.to}>
              {item.text}
            </SubMenu>
          </li>
        ))}
      </ul>
    </Li>
  );
}

const Li = styled.li`
  font-weight: 700;
  font-size: 14px;
  width: 100%;

  ul {
    display: none;
  }

  ${({ $active }) =>
    $active &&
    css`
      ul {
        display: block;
      }

      & > a {
        background-color: rgba(255, 255, 255, 0.5);
      }
    `}

  &:hover ul {
    display: block;
  }
`;

const MainMenu = styled(Link)`
  display: block;
  padding: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SubMenu = styled(MainMenu)`
  padding: 10px 20px;
  background-color: ${({ $active }) => $active && "rgba(255, 255, 255, 0.2)"};

  &hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default SideItem;
