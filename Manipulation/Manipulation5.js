import React from "react";
import styled from "styled-components";
import { pink } from "../../utils";

const LayoutContainer = styled.div`
  padding: 5rem;
`;

const BoxContainer = styled.div`
  width: 75px;
  height: 75px;
  background: slateblue;
  padding: 8px;
  display: grid;
  place-content: center;
  color: white;
  text-align: center;
  border-radius: 50%;

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-20px);
    }
  }

  animation: bounce 300ms alternate infinite cubic-bezier(0.2, 0.65, 0.6, 1);
`;

const Manipulation5 = () => {
  return (
    <LayoutContainer>
      <BoxContainer></BoxContainer>
    </LayoutContainer>
  );
};

export default Manipulation5;
