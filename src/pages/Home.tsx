import React, { useContext } from "react";
import { Context } from "../context/Provider";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import { ContextProps } from "../constants/interfaces";
import Layout from "../layouts/Layout";
// import Loader from "../shared/Loader";

const Home = () => {
  // const [loading, setloading] = useState(true);
  const { dark, colors } = useContext(Context);
  // setTimeout(() => {
  //   setloading(false);
  // }, 2000);
  // if (loading) return <Loader />;

  return (
    <Container dark={dark} colors={colors}>
      <Layout>
        <div className='px-3'>
          <Hero />
          <About />
        </div>
      </Layout>
    </Container>
  );
};

const Container = styled.div<ContextProps>`
  background-color: ${(props) => props.colors.dark};
  color: ${(props) => props.colors.light};
`;

export default Home;
