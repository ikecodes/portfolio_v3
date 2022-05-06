import React, { useContext } from "react";
import { Context } from "../context/Provider";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import { ContextProps } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Work from "../components/Work";
import BackgroundImg from "../assets/images/background.jpeg";
// import Loader from "../shared/Loader";

const Home = () => {
  // const [loading, setloading] = useState(true);
  const { darkMode, colors } = useContext(Context);
  // setTimeout(() => {
  //   setloading(false);
  // }, 2000);
  // if (loading) return <Loader />;

  return (
    <Container darkMode={darkMode} colors={colors}>
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

const Container = styled.div<ContextProps>`
  /* background-color: ${(props) => props.colors.dark}; */
  background-image: url(${BackgroundImg});
  background-position: center;
  /* background-size: cover; */
  /* background-attachment: fixed; */
  border: 2px solid ${(props) => props.colors.primary};
  color: ${(props) => props.colors.light};
`;
const Wrapper = styled.div`
  padding: 0 3rem;
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

export default Home;
