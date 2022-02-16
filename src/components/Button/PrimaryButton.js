import styled from "styled-components";
import React from "react";

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.buttonColor || "#00baff"};
  font-size: ${(props) => props.fontSize || "1.125rem"};
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: rgb(255 255 255);
  &:hover {
    background-color: ${(props) => props.hoverColor || "#09a4e6"};
  }
  &:focus {
    outline: 3px solid rgb(59 130 246);
    outline-offset: 2px;
  }
  border-radius: ${(props) => props.borderRadius || "1rem"};
  border: none;
  cursor: pointer;
`;

const PrimaryButton = (props) => {
  return (
    <>
      <Button
        buttonColor={props.buttonColor}
        hoverColor={props.hoverColor}
        borderRadius={props.borderRadius}
        fontSize={props.fontSize}
      >
        Button
      </Button>
    </>
  );
};

export default PrimaryButton;
