import React from "react";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import colors from "../constants/colors";

const Footer = () => {
  return (
    <Container className='mt-5'>
      <p>designed & built by onuorah ike &copy; 2021</p>
      <ScrollToTop smooth color={colors.dark} />
    </Container>
  );
};

const Container = styled.div`
  text-transform: capitalize;
  text-align: center;
  & p {
    font-size: 1rem;
    margin: 0;
  }
  color: ${colors.primary};
`;

export default Footer;
