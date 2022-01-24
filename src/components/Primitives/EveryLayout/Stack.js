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

// Layout Primitives

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const StackPrimitive = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
`;

const Stack = () => {
  return (
    <Center>
      <StackPrimitive gutter="xl">
        <StackPrimitive gutter="md">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Subscribe to our newsletter to keep you update on all of our amazing
            news
          </p>
        </StackPrimitive>
        <StackPrimitive>
          <StackPrimitive gutter="sm">
            <label htmlFor="">Name</label>
            <input type="text" />
          </StackPrimitive>
          <StackPrimitive gutter="sm">
            <label htmlFor="">Email</label>
            <input type="text" />
          </StackPrimitive>
          <button>Subscribe</button>
        </StackPrimitive>
      </StackPrimitive>
    </Center>
  );
};

export default Stack;
