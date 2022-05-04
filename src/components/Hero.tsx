import React, { useContext } from "react";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";
import Container from "../layouts/Container";
import ColoredHighlight from "../shared/ColoredHighlight";
import WhiteHighlight from "../shared/WhiteHighlight";

const Hero = () => {
  const { darkMode, colors } = useContext(Context);
  return (
    <Container>
      <Header
        darkMode={darkMode}
        colors={colors}
        className='text-uppercase mb-0 m-0'
      >
        onuorah ikechukwu
      </Header>
      <Text darkMode={darkMode} colors={colors} className='mt-4'>
        I’m a <WhiteHighlight> software engineer</WhiteHighlight> specializing
        in building (and occasionally designing) exceptional
        <WhiteHighlight> digital experiences</WhiteHighlight>. Currently, I’m
        focused on building accessible, human-centered products at
        <ColoredHighlight> Buzzline</ColoredHighlight>
      </Text>
    </Container>
  );
};
const Header = styled.h1<ContextProps>`
  color: ${(props) => props.colors.headerColor};
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

const Text = styled.p<ContextProps>`
  color: ${(props) => props.colors.dim};
  max-width: 700px;
`;

export default Hero;
