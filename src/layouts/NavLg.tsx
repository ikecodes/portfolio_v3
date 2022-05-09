import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logo-placeholder.png";
import NavItemLg from "./NavItemLg";
import menus from "../constants/menus";
import Button from "../shared/Button";

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
                <a href='#e' target='_blank'>
                  <Button>resume</Button>
                </a>
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

const Wrapper = styled.div`
  padding: 0 3rem;
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export default NavbarLg;
