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

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  /* ...and then apply it: */
  animation: slide-in 1000ms;
  animation-timing-function: linear;
`;

const Manipulation4 = () => {
  return (
    <LayoutContainer>
      <BoxContainer>Box</BoxContainer>
    </LayoutContainer>
  );
};

export default Manipulation4;
