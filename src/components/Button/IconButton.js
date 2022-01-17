import React from "react";
import styled from "styled-components";
import AppleIcon from "../../assets/apple-icon.svg";

export const PrimaryButton = styled.button`
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

const ButtonImage = styled.img`
  margin-right: 0.25em;
  width: 0.9em;
  height: 0.9em;
`;

const IconButton = () => {
  return (
    <>
      <PrimaryButton>
        <ButtonImage src={AppleIcon}></ButtonImage>
        Button
      </PrimaryButton>
    </>
  );
};

export default IconButton;
