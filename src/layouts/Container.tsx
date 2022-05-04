import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;
  position: relative;
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
export default Container;
