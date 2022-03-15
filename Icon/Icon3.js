import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: blue;
  background-color: var(--color-off-white);
  border-color: var(--color-mid);
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5em;
  border-radius: 0.25em;
  display: flex;
  gap: 0.5em;
  align-items: center;

  &:hover,
  &:focus {
    background-color: var(--color-light);
    color: red;
  }
`;

const Icon3 = (props) => {
  return (
    <>
      <StyledButton class="menu">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 80"
          width="16"
          height="16"
        >
          <rect width="100" height="20" />
          <rect y="30" width="100" height="20" />
          <rect y="60" width="100" height="20" />
        </svg>
        Menu
      </StyledButton>
    </>
  );
};

export default Icon3;
