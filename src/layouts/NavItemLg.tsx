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
      <Link to={menu.path} spy={true}>
        <NavItem role='button'>
          {menu.name}
          <MenuLine></MenuLine>
        </NavItem>
      </Link>
    </div>
  );
};

const NavItem = styled.li`
  font-weight: 400;
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
    color: ${colors.light};
    text-decoration: none;
    transition: all 0.3s ease-in;
  }
  /* &.active div {
    transform: scaleX(-3);
    opacity: 1;
  } */
`;
const MenuLine = styled.div`
  height: 3px;
  border-radius: 5px;
  opacity: 0;
  width: 10px;
  background-color: ${colors.primary};
  transition: all 0.2s linear;
`;
export default NavItemLg;
