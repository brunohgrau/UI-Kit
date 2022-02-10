import React from "react";
import styled from "styled-components";
const spacingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem"
};
const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto"
};

// Layout Primitives

const Split = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction ?? fractions["1/2"]]};
`;

const Stack = styled.div`
  display: grid;
  gap: ${(props) =>
    spacingMap[props.gutter] ? spacingMap[props.gutter] : spacingMap.lg};
`;

const SplitPrimitive = () => {
  return (
    <Split fraction="1/2" gutter="xxl">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Stack>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Name</label>
        <input type="text" />
      </Stack>
    </Split>
  );
};

export default SplitPrimitive;
