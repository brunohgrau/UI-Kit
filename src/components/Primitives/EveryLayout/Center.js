import React from "react";
import styled from "styled-components";

// Util

const CenterContainer = styled.div`
  /* ↓ The maximum width is the maximum measure */

  /* ↓ Only affect horizontal margins */
  margin-left: auto;
  margin-right: auto;
  /* ↓ Apply the minimum horizontal space */
  padding-left: 2rem;
  padding-right: 2rem;
  background: grey;
  /*  ↓  Center Children */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxPrimitve = styled.div`
  width: 320px;
  height: 320px;

  /* ↓ Padding set to the first point on the modular scale */
  padding: 1rem;
  /* ↓ Assumes you have a --border-thin var */
  border-radius: 20px;
  /* ↓ Always apply the transparent outline, for high contrast mode */
  outline: var(--border-thin) transparent;
  outline-offset: calc(var(--border-thin) * -1);
  /* ↓ The light and dark color vars */
  color: white;
  background-color: blue;
  font-size: 1rem;
  text-align: justify;
`;

// Container

const Center = () => {
  return (
    <CenterContainer>
      <BoxPrimitve> </BoxPrimitve>
    </CenterContainer>
  );
};

export default Center;
