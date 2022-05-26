import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/images/logo-placeholder.png";
import NavItemLg from "./NavItemLg";
import menus from "../constants/menus";
import Button from "../shared/Button";
import colors from "../constants/colors";
import NavSm from "./NavSm";
import urls from "../constants/urls";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  let oldValue = 0;
  let newValue = 0;
  const controlNav = () => {
    window.addEventListener("scroll", (e) => {
      newValue = window.pageYOffset;
      if (oldValue < newValue) {
        // console.log("Up");
        setShow(false);
      } else if (oldValue > newValue || window.pageYOffset === 0) {
        // console.log("Down");
        setShow(true);
      }
      oldValue = newValue;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);

    return () => {
      window.removeEventListener("scroll", controlNav);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavContainer
      className={`${show === true || isAnimating === true ? "" : "noShow"}`}
    >
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
                <a href={urls.resume} target='_blank' rel='noreferrer'>
                  <Button>resume</Button>
                </a>
              </ul>
            </NavMenu>
          </div>
        </div>
        <NavIcon
          className={`${isAnimating ? "active" : ""}`}
          onClick={() => setIsAnimating((prev) => !prev)}
        ></NavIcon>
        <NavSm isAnimating={isAnimating} setIsAnimating={setIsAnimating} />
      </Wrapper>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-left: 2px solid ${colors.primary};
  border-right: 2px solid ${colors.primary};
  border-top: 2px solid ${colors.primary};
  background-color: ${colors.dark};
  transition: all 0.3s ease-in;
  &.noShow {
    /* visibility: hidden;
    opacity: 0; */
    transform: translateY(-100%);
  }
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

const NavIcon = styled.span`
  cursor: pointer;
  position: absolute;
  height: 3rem;
  width: 4rem;
  right: 0rem;
  top: 1rem;
  z-index: 1000;
  display: none;
  &::before {
    position: absolute;
    content: "";
    z-index: 1000;
    top: 0.5rem;
    height: 0.2rem;
    width: 2.5rem;
    border-radius: 0.5rem;
    background-color: ${colors.light};
    transform-origin: center;
    transform: rotate(0deg);
    transition: all 0.2s ease-in;
  }
  &::after {
    position: absolute;
    top: 1.5rem;
    content: "";
    z-index: 1000;
    height: 0.2rem;
    width: 1.5rem;
    border-radius: 0.5rem;
    background-color: ${colors.light};
    transform-origin: center;
    transform: rotate(0deg);
    transition: all 0.2s ease-in;
  }
  @media only screen and (max-width: 700px) {
    z-index: 1000;
    display: inline-block;
  }
  &.active {
    &::before {
      top: 1.5rem;
      width: 2rem;
      transform: rotate(45deg);
    }
    &::after {
      width: 2rem;
      transform: rotate(-45deg);
    }
  }
`;

export default Nav;
