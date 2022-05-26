import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import menus from "../constants/menus";
import colors from "../constants/colors";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import urls from "../constants/urls";

interface Props {
  isAnimating: boolean;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavSm: React.FC<Props> = ({ isAnimating, setIsAnimating }) => {
  return (
    <>
      <AnimatingContainer
        className={isAnimating ? "clicked" : ""}
        onClick={() => setIsAnimating(false)}
      >
        <NavContainer onClick={(e) => e.stopPropagation()}>
          {menus.map((menu) => (
            <div className='ms-3' key={menu.id}>
              <Heading>
                <Link to={menu.path} onClick={() => setIsAnimating(false)}>
                  {menu.name}
                </Link>
              </Heading>
            </div>
          ))}
          <Heading className='ms-3'>
            <a href={urls.resume} target='_blank' rel='noreferrer'>
              resume
            </a>
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
const AnimatingContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 200;
  /* border-top: 2px solid ${colors.primary}; */
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
  background-color: ${colors.box};
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
