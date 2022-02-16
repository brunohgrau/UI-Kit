import React from "react";
import styled from "styled-components";

// Container

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
  background-color: grey;
  font-size: 1rem;
  text-align: justify;
`;

const Box = () => {
  return (
    <BoxPrimitve>
      <p>
        The following props (attributes) will cause the component to rerender
        when altered. They can be altered by hand—in browser developer tools—or
        as the subjects of inherited application state.
      </p>
    </BoxPrimitve>
  );
};

export default Box;
