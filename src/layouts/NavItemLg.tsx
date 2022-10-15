import { Link } from "react-scroll";
import styled from "styled-components";
import colors from "../constants/colors";

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
        <Link to={menu.path} spy={true}>
          {menu.name}
        </Link>
        <MenuLine></MenuLine>
      </NavItem>
    </div>
  );
};

const NavItem = styled.li`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  text-transform: capitalize;
  transform-origin: left;
  font-size: 1rem;
  &:hover div {
    width: 100%;
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
  opacity: 1;
  width: 0px;
  background-color: ${colors.primary};
  transition: all 0.2s linear;
`;
export default NavItemLg;
