import React, { useState } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Layout from "../layouts/Layout";
import Work from "../components/Work";
import colors from "../constants/colors";
import Contact from "../components/Contact";
import PageLoader from "../shared/PageLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  if (loading) return <PageLoader />;

  return (
    <Container>
      <Layout>
        <Wrapper>
          <Hero />
          <Work />
          <Contact />
        </Wrapper>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.dark};
  background-position: center;
  color: ${colors.light};
`;
const Wrapper = styled.div`
  padding: 0 3rem;
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export default Home;
