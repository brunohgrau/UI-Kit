import React from "react";
import styled from "styled-components";

const Inline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: start;
  align-items: start;
  background: rgb(14 165 233);
`;

const BoxPrimitve = styled.div`
  width: 8rem;
  height: 8rem;

  /* ↓ Padding set to the first point on the modular scale */
  padding: 1rem;
  /* ↓ Assumes you have a --border-thin var */
  border-radius: 50%;
  /* ↓ Always apply the transparent outline, for high contrast mode */
  outline: var(--border-thin) transparent;
  outline-offset: calc(var(--border-thin) * -1);
  /* ↓ The light and dark color vars */
  color: white;
  background-color: grey;
  font-size: 1rem;
  text-align: justify;
`;

const InlinePrimitive = () => {
  return (
    <Inline>
      {" "}
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
      <BoxPrimitve> </BoxPrimitve>
    </Inline>
  );
};

export default InlinePrimitive;
