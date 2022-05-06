import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";

interface Props {
  menu: {
    id: string;
    name: string;
    path: string;
  };
}
const NavItemLg: React.FC<Props> = ({ menu }) => {
  const { darkMode, colors } = useContext(Context);
  return (
    <div className='position-relative'>
      <NavItem darkMode={darkMode} colors={colors} role='button'>
        <Link to={menu.path}>{menu.name}</Link>
        <MenuLine darkMode={darkMode} colors={colors}></MenuLine>
      </NavItem>
    </div>
  );
};

const NavItem = styled.li<ContextProps>`
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-size: 1rem;
  &:hover div {
    transform: scaleX(-3);
    opacity: 1;
  }
  & a {
    color: ${(props) => props.colors.light};
    text-decoration: none;
    transition: all 0.3s ease-in;
  }
`;
const MenuLine = styled.div<ContextProps>`
  height: 3px;
  border-radius: 5px;
  opacity: 0;
  width: 10px;
  background-color: ${(props) => props.colors.primary};
  /* transform-origin: top left; */
  transition: all 0.2s linear;
`;
export default NavItemLg;
