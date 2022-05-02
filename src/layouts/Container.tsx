import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

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
  padding: 2.5rem 0;
  color: ${colors.primary};
`;
export default Container;
