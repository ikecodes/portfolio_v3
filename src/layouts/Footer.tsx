import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <Container className='h-25'>
      <ScrollToTop smooth color={colors.primary} />
    </Container>
  );
};

const Container = styled.div``;

export default Footer;
