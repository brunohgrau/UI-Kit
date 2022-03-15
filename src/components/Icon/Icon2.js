import React from "react";
import "./Icon2.css";
import styled from "styled-components";
import { neutral } from "../../utils";

const ButtonContainer = styled.button`
  color: black;
  background-color: white;
  border-color: gray;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.5em;
  border-radius: 0.25em;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${neutral[400]};
  }
  &:focus {
  }
`;

function Icon2(props) {
  return (
    <>
      <ButtonContainer aria-label="Menu">
        <img
          src="https://web-dev.imgix.net/image/KT4TDYaWOHYfN59zz6Rc0X4k4MH3/m3SyrfBz8GAe3Aifg9k0.svg"
          alt=""
          width="16"
          height="16"
        />
      </ButtonContainer>
    </>
  );
}

export default Icon2;
