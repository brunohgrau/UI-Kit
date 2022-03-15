import React from "react";
import styled from "styled-components";
import { purple } from "../../utils";

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  background-color: ${purple[300]};
  > svg {
    width: 2rem;
    height: 2rem;
    color: rgb(255 255 255);
    fill: currentColor;
  }

  &:hover {
    background-color: ${purple[200]};
  }
  &:focus {
  }
`;

const Icon5 = (props) => {
  return (
    <>
      <SVGContainer>
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
        </svg>
      </SVGContainer>
    </>
  );
};

export default Icon5;
