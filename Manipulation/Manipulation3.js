import React from "react";
import styled from "styled-components";
import { pink } from "../../utils";

const LayoutContainer = styled.div`
  padding: 5rem;
`;

const BoxContainer = styled.div`
  display: grid;
  place-content: center;
  width: 6rem;
  height: 6rem;
  padding: 0.5rem;
  background: ${pink[300]};
  color: white;
  text-align: center;

  /* Create the animation... */

  @keyframes drop-in {
    from {
      transform: rotate(-30deg) translateY(-100%);
      opacity: 0;
    }
    to {
      transform: rotate(0deg) translateY(0%);
      opacity: 1;
    }
  }

  /* ...and then apply it: */
  animation: drop-in 1000ms;
`;

const Manipulation3 = () => {
  return (
    <LayoutContainer>
      <BoxContainer>Box</BoxContainer>
    </LayoutContainer>
  );
};

export default Manipulation3;
