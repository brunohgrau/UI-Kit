import React from "react";
import styled from "styled-components";
import { yellow } from "../../utils";

const LayoutContainer = styled.div`
  padding: 6rem 1.25rem;
  margin: 0 auto;
`;

const FigureContainer = styled.figure`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20rem;
  margin: 0;
  padding: 0;
`;

const StyledImage = styled.img`
  height: 20rem;
`;
const FigcaptionContainer = styled.figcaption`
  position: absolute;
  bottom: 0px;
  padding: 1rem;
  width: 100%;
  background: black;
  color: white;
  opacity: 0.7;
`;

function Image5(props) {
  return (
    <>
      <LayoutContainer>
        <FigureContainer>
          <StyledImage
            src="https://images.unsplash.com/photo-1559235196-03c521840c27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="bubbles through a microscope."
            className=""
          />
          <FigcaptionContainer>
            <h2>Bubbles</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </FigcaptionContainer>
        </FigureContainer>
      </LayoutContainer>
    </>
  );
}

export default Image5;
