import React from "react";
import styled from "styled-components";
import { yellow } from "../../utils";
import shoes from "../../assets/shoes.png";

//Image with Background

const WrapperContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;

  margin: 0 auto;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  &:hover {
    top: 0%;
    transform: translateY(0%);
    /*  transition: all 2s linear; */
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-25deg);
  width: 270px;
`;

function Image3(props) {
  return (
    <>
      <ImageContainer>
        <StyledImage src={shoes} />
      </ImageContainer>
    </>
  );
}

export default Image3;
