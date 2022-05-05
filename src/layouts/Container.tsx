import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
// const Content = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 0;
//   transform: translateY(-50%);
// `;
export default Container;
