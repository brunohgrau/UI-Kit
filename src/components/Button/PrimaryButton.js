import styled from "styled-components";
import React from "react";

export const Button = styled.button`
  /* box model */
  padding: 0.5rem 1rem;
  background-color: rgb(37 99 235);
  /* typography */
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: rgb(255 255 255);

  /* manipulation */
  &:hover {
    background-color: rgb(59 130 246);
  }

  &:focus {
    outline: 3px solid rgb(59 130 246);
    outline-offset: 2px;
    /* outline-opacity: 0.6; */
  }

  /* misc */
  border-radius: 0.375rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const PrimaryButton = () => {
  return (
    <>
      <Button>Button</Button>
    </>
  );
};

export default PrimaryButton;
