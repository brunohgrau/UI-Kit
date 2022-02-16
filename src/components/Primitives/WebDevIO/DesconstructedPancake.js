import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Box = styled.div`
  flex: 1 1 150px;
  margin: 5px;
  background: red;
  gap: 1rem;
`;

const DesconstructedPancake = () => {
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

export default DesconstructedPancake;
