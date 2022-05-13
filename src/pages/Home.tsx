import React, { useState } from "react";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../layouts/Layout";
import Work from "../components/Work";
import BackgroundImg from "../assets/images/background.jpeg";
import colors from "../constants/colors";
import Contact from "../components/Contact";
import Spinner from "../shared/Spinner";

const Home = () => {
  const [loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false);
  }, 5000);
  if (loading) return <Spinner />;

  return (
    <Container>
      <Layout>
        <Wrapper>
          <Hero />
          <About />
          <Work />
          <Contact />
        </Wrapper>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${BackgroundImg});
  background-position: center;
  border: 2px solid ${colors.primary};
  color: ${colors.light};
`;
const Wrapper = styled.div`
  padding: 0 3rem;
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export default Home;
