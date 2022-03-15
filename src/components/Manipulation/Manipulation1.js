import React from "react";
import styled from "styled-components";
import { yellow, pink } from "../../utils";

const LayoutContainer = styled.div`
  padding: 5rem;
`;

const Box1 = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${pink[100]};
  color: ${pink[400]};
  transition: 1000ms ease;

  &:hover {
    background-color: ${pink[300]};
    color: ${yellow[100]};
    transform: scale(1.05);
  }
`;

const Box2 = styled.div`
  /* 
        hover:bg-red-900 hover:text-red-100  */

  margin-top: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${pink[100]};
  transition: 1000ms ease;
  &:hover {
    transform: translateX(1rem);
  }
`;

const Manipulation1 = () => {
  return (
    <>
      <LayoutContainer className="p-20  space-y-3">
        <Box1>Box 1</Box1>
        <Box2>Box 2</Box2>
      </LayoutContainer>
    </>
  );
};

export default Manipulation1;
