import React, { useContext } from "react";
import styled from "styled-components";
import { ContextProps } from "../constants/interfaces";
import { Context } from "../context/Provider";
import Container from "../layouts/Container";
import Text from "../shared/Text";
import LinkHighlight from "../shared/LinkHighlight";
import WhiteHighlight from "../shared/WhiteHighlight";

const Hero = () => {
  const { darkMode, colors } = useContext(Context);
  return (
    <Container>
      <Hello darkMode={darkMode} colors={colors}>
        Hello👋🏾 I'm,
      </Hello>
      <Header
        darkMode={darkMode}
        colors={colors}
        className='text-uppercase mb-0 m-0'
      >
        onuorah ikechukwu
      </Header>
      <Width className='mt-4'>
        <Text>
          a <WhiteHighlight> software engineer</WhiteHighlight> specializing in
          building (and occasionally designing) awesome
          <WhiteHighlight> web</WhiteHighlight> &
          <WhiteHighlight> mobile applications</WhiteHighlight>. Currently, I’m
          focused on building accessible, human-centered products at{" "}
          <LinkHighlight
            text='Buzzline'
            link='https://www.buzzline.app/'
          ></LinkHighlight>
        </Text>
      </Width>
    </Container>
  );
};
const Header = styled.h1<ContextProps>`
  color: ${(props) => props.colors.light};
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
const Width = styled.div`
  max-width: 700px;
`;
const Hello = styled.h2<ContextProps>`
  color: ${(props) => props.colors.headerColor};
  font-weight: 900;
`;

export default Hero;
