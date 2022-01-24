import React from "react";
import styled from "styled-components";

// Container

const ClusterPrimitive = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  align-items: start;
  background: rgb(14 165 233);
`;

const BoxPrimitve = styled.div`
  width: 4rem;
  height: 4rem;

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

const Cluster = () => {
  return (
    <ClusterPrimitive>
      <BoxPrimitve> Box </BoxPrimitve>
      <BoxPrimitve> Box </BoxPrimitve>
    </ClusterPrimitive>
  );
};

export default Cluster;
