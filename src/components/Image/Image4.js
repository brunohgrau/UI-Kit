import React from "react";
import styled from "styled-components";
import { yellow } from "../../utils";
import Img1 from "../../assets/bg-pattern-1.svg";

const ImageContainer = styled.img`
  display: none;

  @media screen and (min-width: 695px) {
    display: block;
    position: absolute;
    right: -5%;
    top: -30px;
    max-width: 230px;
  }

  @media screen and (min-width: 1110px) {
    right: 0;
  }
`;

function Image4(props) {
  return (
    <>
      <ImageContainer src={Img1} alt="Background Pattern" />
    </>
  );
}

export default Image4;
