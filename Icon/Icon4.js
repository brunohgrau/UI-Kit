import React from "react";
import styled from "styled-components";
import MainImg1 from "../../assets/spotify.svg";
import { yellow, pink } from "../../utils";

// Import an Icon as img

const SVGContainer = styled.div``;

const ImageContainer = styled.img`
  /*   width: 3rem;
  height: 2rem; */

  filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg)
    brightness(118%) contrast(119%);
`;

const Icon4 = (props) => {
  return (
    <>
      <SVGContainer>
        <ImageContainer src={MainImg1} alt="" />
      </SVGContainer>
    </>
  );
};

export default Icon4;
