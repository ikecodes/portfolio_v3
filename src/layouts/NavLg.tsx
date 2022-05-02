import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logo-placeholder.png";
import NavItemLg from "./NavItemLg";
import menus from "../constants/menus";
import colors from "../constants/colors";

const NavbarLg = () => {
  return (
    <NavContainer>
      <div className='row p-0 m-0 py-3 px-3 align-items-center'>
        <div className='col-lg-4 m-0 p-0'>
          <Link to='/'>
            <Image src={Logo} />
          </Link>
        </div>
        <div className='col-lg-8 align-self-center p-0'>
          <NavMenu>
            <ul className='d-flex justify-content-end gap-4 align-items-center'>
              {menus.map((menu) => (
                <NavItemLg key={menu.id} menu={menu} />
              ))}
              <Link to='/login'>
                <ResumeBtn className='mx-1'>resume</ResumeBtn>
              </Link>
            </ul>
          </NavMenu>
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  /* background-color: ${colors.dark}; */
`;
const NavMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Image = styled.img`
  height: auto;
  width: 5rem;
`;

const ResumeBtn = styled.button`
  background-color: transparent;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  padding: 0.5rem 1.3rem;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.primaryLight};
  }
`;

export default NavbarLg;
