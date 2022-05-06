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
      <Wrapper>
        <div className='row p-0 m-0 py-3 align-items-center'>
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
      </Wrapper>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
`;
const NavMenu = styled.div`
  & ul {
    list-style: decimal;
  }
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
  border: 2px solid ${colors.primary};
  padding: 0.5rem 1.3rem;
  font-size: 1.2rem;
  text-transform: capitalize;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.primaryLight};
  }
`;
const Wrapper = styled.div`
  padding: 0 3rem;
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export default NavbarLg;
