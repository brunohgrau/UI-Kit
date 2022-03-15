import styled from "styled-components";
import React from "react";
import { blue } from "../../utils";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: none;
  font-size: ${(props) => props.fontSize || "1.125rem"};
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: ${(props) => props.buttonColor || "blue"};
  border: 1px solid ${(props) => props.buttonColor || "blue"};
  border-radius: ${(props) => props.borderRadius || "1rem"};
  cursor: pointer;
  &:hover {
    background-color: ${blue[100]};
  }
`;

const OutlineButton = (props) => {
  return (
    <>
      <Button
        hoverColor={props.hoverColor}
        buttonColor={props.buttonColor}
        borderRadius={props.borderRadius}
        fontSize={props.fontSize}
      >
        Button
      </Button>
    </>
  );
};

export default OutlineButton;
