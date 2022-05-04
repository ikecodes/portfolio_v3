import React, { useContext } from "react";
import styled from "styled-components";
import ScrollToTop from "react-scroll-to-top";
import { Context } from "../context/Provider";

const Footer = () => {
  const { colors } = useContext(Context);
  return (
    <Container className='h-25'>
      <ScrollToTop smooth color={colors.dark} />
    </Container>
  );
};

const Container = styled.div``;

export default Footer;
