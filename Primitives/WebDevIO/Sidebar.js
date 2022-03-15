import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 25%) 1fr;
`;

const Box1 = styled.div`
  background: yellow;
`;

const Box2 = styled.div`
  background: blue;
`;

const Sidebar = () => {
  return (
    <>
      <Parent>
        <Box1 class="yellow">Min: 100px / Max: 25%</Box1>
        <Box2 class="section blue">
          This element takes the second grid position (1fr), meaning it takes up
          the rest of the remaining space.
        </Box2>
      </Parent>
    </>
  );
};

export default Sidebar;
