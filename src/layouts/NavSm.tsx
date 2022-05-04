import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiMenu5Fill } from "react-icons/ri";
import menus from "../constants/menus";
import { Context } from "../context/Provider";
import { ContextProps } from "../constants/interfaces";
const NavSm = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { darkMode, colors } = useContext(Context);

  return (
    <>
      <OpenIcon onClick={() => setIsAnimating(true)}>
        <RiMenu5Fill role='button' size={40} color={colors.light} />
      </OpenIcon>
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

const OpenIcon = styled.span`
  position: absolute;
  top: 1rem;
  z-index: 100;
  font-weight: 700;
  right: 1.5rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const AnimatingContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 200;
  background-color: rgb(0, 0, 0, 0.3);
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
  transform: translateX(50%);
  gap: 2rem;
  & li {
    margin: 1rem 0;
  }
`;
const Heading = styled.h1<ContextProps>`
  color: ${(props) => props.colors.light};
  text-transform: capitalize;
  font-weight: 600 !important;
  font-size: 2rem;
  & a,
  a:link {
    color: ${(props) => props.colors.dim};
    text-decoration: none;
  }
`;
export default NavSm;
