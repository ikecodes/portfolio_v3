import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const Hero = () => {
  return (
    <Container>
      <div>
        <Header className='text-uppercase mb-0 m-0'>onuorah ikechukwu</Header>
        <Text className='text-capitalize'>software engineer</Text>
        <Text2>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional <Highlight2>digital experiences</Highlight2>.
          Currently, I’m focused on building accessible, human-centered products
          at
          <HightLight> Buzzline</HightLight>
        </Text2>
      </div>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  & div {
    margin-top: 10rem;
  }
`;
const Header = styled.h1`
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
  color: ${colors.secondary};
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;
const Text2 = styled.p`
  color: ${colors.secondary};
  max-width: 500px;
`;
const HightLight = styled.span`
  color: ${colors.primary};
  font-weight: 500;
`;
const Highlight2 = styled.span`
  color: ${colors.white};
  font-weight: 500;
`;
export default Hero;
