import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;

  overflow: hidden;
  background-color: rgb(255 255 255);
  font-family: "Montserrat", sans-serif;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

//Container

const SVGBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  background-color: rgb(16 185 129);

  > svg {
    width: 2rem;
    height: 2rem;
    color: rgb(255 255 255);
    fill: currentColor;
  }
`;

const TextBox = styled.div`
  padding: 1rem;

  > span {
    font-weight: 600;
    color: rgb(16 185 129);
    font-size: 1.25rem;
  }

  > p {
    margin-top: 0.75rem;
    font-size: 1rem;
    line-height: 1rem;
    color: rgb(55 65 81);
  }
`;

//Secondary

//Utils

const Alert1 = () => {
  return (
    <>
      <Wrapper>
        <SVGBox>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
        </SVGBox>

        <TextBox>
          <span>Title</span>
          <p>Alert Description</p>
        </TextBox>
      </Wrapper>
    </>
  );
};

export default Alert1;
