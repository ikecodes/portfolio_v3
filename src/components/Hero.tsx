import React from "react";
import styled from "styled-components";
import Container from "../layouts/Container";
import Text from "../shared/Text";
import LinkHighlight from "../shared/LinkHighlight";
import WhiteHighlight from "../shared/WhiteHighlight";
import colors from "../constants/colors";

const Hero = () => {
  return (
    <Container>
      <Hello>Hello👋🏾 I'm,</Hello>
      <Header className='text-capitalize mb-0 m-0'>onuorah ikechukwu</Header>
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
const Header = styled.h1`
  color: ${colors.primary};
  font-size: 7rem;
  font-weight: 900;
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
const Hello = styled.h2`
  color: ${colors.light};
  font-weight: 900;
`;

export default Hero;
