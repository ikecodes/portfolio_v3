import React from "react";
import { Link } from "react-router-dom";
import colors from "../constants/colors";
import styled from "styled-components";

interface Props {
  menu: {
    id: string;
    name: string;
    path: string;
  };
}
const NavItemLg: React.FC<Props> = ({ menu }) => {
  return (
    <div className='position-relative'>
      <NavItem role='button'>
        <Link to={menu.path}>{menu.name}</Link>
        <MenuLine></MenuLine>
      </NavItem>
    </div>
  );
};

const NavItem = styled.li`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  &:hover div {
    transform: scaleX(-5);
    opacity: 1;
  }
  & a {
    color: ${colors.light};
    text-decoration: none;
    transition: all 0.3s ease-in;
  }
`;
const MenuLine = styled.div`
  height: 3px;
  border-radius: 5px;
  opacity: 0;
  width: 10px;
  background-color: ${colors.primary};
  /* transform-origin: top left; */
  transition: all 0.2s linear;
`;
export default NavItemLg;
