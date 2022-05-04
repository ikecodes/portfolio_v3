import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menus from "../constants/menus";
import { Context } from "../context/Provider";
import { ContextProps } from "../constants/interfaces";
const NavSm = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { darkMode, colors } = useContext(Context);

  return (
    <>
      <NavIcon
        className={`${isAnimating ? "active" : ""}`}
        onClick={() => setIsAnimating((prev) => !prev)}
        darkMode={darkMode}
        colors={colors}
      ></NavIcon>
      <AnimatingContainer
        className={isAnimating ? "clicked" : ""}
        onClick={(e) => setIsAnimating(false)}
      >
        <NavContainer
          darkMode={darkMode}
          colors={colors}
          onClick={(e) => e.stopPropagation()}
        >
          {menus.map((menu) => (
            <div className='ms-3' key={menu.id}>
              <Heading darkMode={darkMode} colors={colors}>
                <Link to={menu.path}>{menu.name}</Link>
              </Heading>
            </div>
          ))}
          <Heading darkMode={darkMode} colors={colors} className='ms-3'>
            <Link to='/resume'>resume</Link>
          </Heading>
        </NavContainer>
      </AnimatingContainer>
    </>
  );
};

const NavIcon = styled.span<ContextProps>`
  cursor: pointer;
  position: absolute;
  height: 3rem;
  width: 4rem;
  right: 1.5rem;
  top: 1rem;
  z-index: 1000;
  display: none;
  &::before {
    position: absolute;
    content: "";
    top: 0.5rem;
    height: 0.3rem;
    width: 3rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.colors.light};
    transform-origin: center;
    transform: rotate(0deg);
    transition: all 0.2s ease-in;
  }
  &::after {
    position: absolute;
    top: 1.5rem;
    content: "";
    height: 0.3rem;
    width: 2rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.colors.light};
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
      width: 3rem;
      transform: rotate(45deg);
    }
    &::after {
      width: 3rem;
      transform: rotate(-45deg);
    }
  }
`;
const AnimatingContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: rgb(0, 0, 0, 0.8);
  transform: translateX(100%);
  transition: all 0.3s ease-in;
  &.clicked {
    transform: translateX(0);
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const NavContainer = styled.div<ContextProps>`
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.colors.box};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: capitalize;
  transform: translateX(30%);
  gap: 2rem;
  & li {
    margin: 1rem 0;
  }
`;
const Heading = styled.h1<ContextProps>`
  color: ${(props) => props.colors.light};
  text-transform: capitalize;
  font-weight: 600 !important;
  font-size: 3rem;
  & a,
  a:link {
    color: ${(props) => props.colors.headerColor};
    text-decoration: none;
  }
`;
export default NavSm;
