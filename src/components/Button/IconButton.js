import React from "react";
import styled from "styled-components";
import AppleIcon from "../../assets/apple-icon.svg";
import { blue } from "../../utils";

export const PrimaryButton = styled.button`
  padding: 0.5rem 1rem;
  /* background-color: ${(props) => props.buttonColor || "#09b7e6"}; */
  background-color: ${blue[300]};
  font-size: ${(props) => props.fontSize || "1.125rem"};
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: white;
  &:hover {
    /* color: ${(props) => props.hoverColor || "black"}; */
    
    background-color: ${blue[200]};
  }
  &:focus {
    outline: 3px solid rgb(59 130 246);
    outline-offset: 2px;
  }
  border-radius: ${(props) => props.borderRadius || "1rem"};
  border: none;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  margin-right: 0.25em;
  width: 0.9em;
  height: 0.9em;
`;

const IconButton = (props) => {
  return (
    <>
      <PrimaryButton
        hoverColor={props.hoverColor}
        buttonColor={props.buttonColor}
        borderRadius={props.borderRadius}
        fontSize={props.fontSize}
        textColor={props.textColor}
      >
        <ButtonImage src={AppleIcon}></ButtonImage>
        Button
      </PrimaryButton>
    </>
  );
};

export default IconButton;
