import React, { useState } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
import Loader from "../shared/Loader";
const Home = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 2000);
  if (loading) return <Loader />;
  return (
    <Container>
      <Layout>
        <div className='px-3'>
          <Hero />
        </div>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.dark};
  color: ${colors.white};
`;

export default Home;
