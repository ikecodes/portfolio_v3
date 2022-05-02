import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Container from "../layouts/Container";
import ColoredHighlight from "../shared/ColoredHighlight";
import WhiteHighlight from "../shared/WhiteHighlight";

const Hero = () => {
  return (
    <Container>
      <Header className='text-uppercase mb-0 m-0'>onuorah ikechukwu</Header>
      <Text className='text-capitalize'>software engineer</Text>
      <Text2 className='mt-4'>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional
        <WhiteHighlight> digital experiences</WhiteHighlight>. Currently, I’m
        focused on building accessible, human-centered products at
        <ColoredHighlight> Buzzline</ColoredHighlight>
      </Text2>
    </Container>
  );
};
const Header = styled.h1`
  color: ${colors.headerColor};
  font-size: 7rem;
  font-weight: 600;
  @media (max-width: 1200px) {
    font-size: 6rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
  }
  @media (max-width: 576px) {
    font-size: 4rem;
  }
`;
const Text = styled.p`
  font-size: 3rem;
  color: ${colors.white};
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;
const Text2 = styled.p`
  color: ${colors.secondary};
  max-width: 700px;
`;

export default Hero;
