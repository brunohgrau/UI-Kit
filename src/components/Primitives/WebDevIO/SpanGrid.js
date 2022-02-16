import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Box1 = styled.div`
  background: yellow;
  grid-column: 1 / span 12;
`;

const Box2 = styled.div`
  background: blue;
  grid-column: 1 / span 6;
`;

const Box3 = styled.div`
  background: green;
  grid-column: 4 / span 4;
`;

const Box4 = styled.div`
  background: red;
  grid-column: 3 / span 2;
`;

const SpanGrid = () => {
  return (
    <>
      <Parent>
        <Box1 class="span-12 section coral">Span 12</Box1>
        <Box2 class="span-6 section green">Span 6</Box2>
        <Box3 class="span-4 section yellow">Span 4</Box3>
        <Box4 class="span-2 section blue">Span 2</Box4>
      </Parent>
    </>
  );
};

export default SpanGrid;
