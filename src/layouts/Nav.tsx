import { useEffect, useState } from "react";
import styled from "styled-components";
import NavItemLg from "./NavItemLg";
import menus from "../constants/menus";
import colors from "../constants/colors";
import NavSm from "./NavSm";
import { motion } from "framer-motion";

const Nav = () => {
  const [show, setShow] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [pageY, setPageY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  let oldValue = 0;
  let newValue = 0;
  let scrollTimeout;
  const controlNav = () => {
    window.addEventListener("scroll", (e) => {
      newValue = window.scrollY;
      setPageY(window.scrollY);
      if (oldValue < newValue) {
        setShow(false);
      } else if (oldValue > newValue || window.scrollY === 0) {
        setShow(true);
      }
      oldValue = newValue;
    });
  };

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isScrolling) {
      document.body.classList.add("scrolling");
    } else {
      document.body.classList.remove("scrolling");
    }
  }, [isScrolling]);
  return (
    <NavContainer
      className={`${show === true || isAnimating === true ? "" : "noShow"} ${
        show === true && pageY !== 0 ? "shadow" : ""
      }`}
    >
      <Wrapper>
        <div className="row p-0 m-0 py-3 align-items-center">
          {/* <div className='col-lg-4 m-0 p-0'>
            <Link to='/'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
              >
                <Image src={Logo} />
              </motion.div>
            </Link>
          </div> */}
          <motion.div
            className="col-lg-12 align-self-end p-0"
            initial={{ opacity: 0, x: 5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <NavMenu>
              <ul className="d-flex justify-content-end gap-4 align-items-center">
                {menus.map((menu) => (
                  <NavItemLg key={menu.id} menu={menu} />
                ))}
                {/* <a href={urls.resume} target='_blank' rel='noreferrer'>
                  <Button>resume</Button>
                </a> */}
              </ul>
            </NavMenu>
          </motion.div>
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
  background-color: ${colors.dark};
  transition: all 0.3s ease-in;
  &.noShow {
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
