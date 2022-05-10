import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import menus from "../constants/menus";
import BackgroundImg from "../assets/images/background.jpeg";
import colors from "../constants/colors";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import urls from "../constants/urls";
const NavSm = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <>
      <NavIcon
        className={`${isAnimating ? "active" : ""}`}
        onClick={() => setIsAnimating((prev) => !prev)}
      ></NavIcon>
      <AnimatingContainer
        className={isAnimating ? "clicked" : ""}
        onClick={(e) => setIsAnimating(false)}
      >
        <NavContainer onClick={(e) => e.stopPropagation()}>
          {menus.map((menu) => (
            <div className='ms-3' key={menu.id}>
              <Heading>
                <Link to={menu.path}>{menu.name}</Link>
              </Heading>
            </div>
          ))}
          <Heading className='ms-3'>
            <Link to='/resume'>resume</Link>
          </Heading>
          <div className='ms-3 d-flex gap-3'>
            <IconLink
              href={urls.email}
              target='_blank'
              rel='noreferrer'
              color={colors.light}
            >
              <ImMail size={30} />
            </IconLink>
            <IconLink
              href={urls.github}
              target='_blank'
              rel='noreferrer'
              color={colors.light}
            >
              <FaGithubSquare size={30} />
            </IconLink>
            <IconLink
              href={urls.linkedin}
              target='_blank'
              rel='noreferrer'
              color={colors.light}
            >
              <FaLinkedin size={30} />
            </IconLink>
            <IconLink
              href={urls.twitter}
              target='_blank'
              rel='noreferrer'
              color={colors.light}
            >
              <FaTwitterSquare size={30} />
            </IconLink>
          </div>
        </NavContainer>
      </AnimatingContainer>
    </>
  );
};

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
const NavContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
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
const Heading = styled.h1`
  color: ${colors.light};
  text-transform: capitalize;
  font-weight: 600 !important;
  font-size: 2rem;
  & a,
  a:link {
    color: ${colors.primary};
    text-decoration: none;
  }
`;
const IconLink = styled.a`
  color: ${colors.light};

  &:hover,
  :active {
    color: ${colors.primary};
  }
`;
export default NavSm;
