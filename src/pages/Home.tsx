import React, { useContext } from "react";
import { Context } from "../context/Provider";
import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import colors from "../constants/colors";
import Layout from "../layouts/Layout";
// import Loader from "../shared/Loader";
const Home = () => {
  // const [loading, setloading] = useState(true);
  const value = useContext(Context);
  // setTimeout(() => {
  //   setloading(false);
  // }, 2000);
  // if (loading) return <Loader />;
  console.log(value);
  return (
    <Container>
      <Layout>
        <div className='px-3'>
          <h1>{value?.dark ? "hey" : "fuk"}</h1>
          <Hero />
          <About />
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
