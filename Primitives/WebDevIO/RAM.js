import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const Box = styled.div`
  background: red;
`;

const RAM = () => {
  return (
    <>
      <Parent>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Parent>
    </>
  );
};

export default RAM;
