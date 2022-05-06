import React from "react";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import colors from "../constants/colors";

const Footer = () => {
  return (
    <Container className='h-25'>
      <ScrollToTop smooth color={colors.dark} />
    </Container>
  );
};

const Container = styled.div``;

export default Footer;
