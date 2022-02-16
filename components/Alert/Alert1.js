import React from "react";
import styled from "styled-components";
import { typeScale } from "../../utils";
import { yellow } from "../../utils";

const AlertContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  overflow: hidden;
  background-color: ${yellow[100]};
  font-family: "Montserrat", sans-serif;
  border-radius: ${(props) => props.borderRadius || "1rem"};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media screen and (min-width: 640px) {
    max-width: 25rem;
  }
  @media screen and (min-width: 768px) {
    max-width: 30rem;
  }
`;

const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  background-color: ${yellow[200]};
  > svg {
    width: 2rem;
    height: 2rem;
    color: rgb(255 255 255);
    fill: currentColor;
  }
`;

const TextContainer = styled.div`
  padding: ${(props) => props.spacing || "1rem"};

  & > span {
    font-weight: 600;
    color: black;
    font-size: ${typeScale.header3};
  }

  & > p {
    margin-top: 0.75rem;
    font-size: ${(props) => props.descriptionSize};
    line-height: 1rem;
    color: black;
  }
`;

function Alert1(props) {
  return (
    <>
      <AlertContainer borderRadius={props.borderRadius}>
        <SVGContainer svgColor={props.svgColor}>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </SVGContainer>
        <TextContainer spacing={props.spacing} titleSize={props.titleSize}>
          <span>{props.title}</span>
          <p>{props.description}</p>
        </TextContainer>
      </AlertContainer>
    </>
  );
}

export default Alert1;
