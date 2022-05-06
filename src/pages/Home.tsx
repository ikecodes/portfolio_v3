import React from "react";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../layouts/Layout";
import Work from "../components/Work";
import BackgroundImg from "../assets/images/background.jpeg";
import colors from "../constants/colors";
// import Loader from "../shared/Loader";

const Home = () => {
  // const [loading, setloading] = useState(true);
  // setTimeout(() => {
  //   setloading(false);
  // }, 2000);
  // if (loading) return <Loader />;

  return (
    <Container>
      <Layout>
        <Wrapper>
          <Hero />
          <About />
          <Work />
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
