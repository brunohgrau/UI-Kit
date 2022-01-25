import React from "react";
import styled from "styled-components";
import Img1 from "../../assets/bg-pattern-1.svg";
import Logo from "../../assets/logo.svg";

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

const LogoContainer = styled.img`
  display: block;
`;

const TextContainer = styled.div`
  margin: 30px 0 70px; //top + left/right + bottom
  width: 100%;
  font-family: "Lato", sans-serif;

  @media screen and (min-width: 695px) {
    margin: 40px 0 70px; //top + left/right + bottom
    width: 75%;
  }

  @media screen and (min-width: 1110px) {
    margin: 60px 0 150px; //top + left/right + bottom
    width: 80%;
  }

  > h1 {
    margin-bottom: 25px;
    width: 80%;
    font-size: 2.5rem;
    font-weight: bold;
    letter-spacing: -0.45px;
    line-height: 1.2;

    @media screen and (min-width: 695px) {
      margin-bottom: 30px;
      width: 100%;
      font-size: 4rem;
      letter-spacing: -0.75px;
      line-height: 1;
    }

    @media screen and (min-width: 1110px) {
      font-size: 5.5rem;
    }
  }

  > p {
    width: 100%;
    font-size: 1rem;
    line-height: 1.7;

    @media screen and (min-width: 695px) {
      font-size: 1.125rem;
    }

    @media screen and (min-width: 1110px) {
      width: 95%;
      font-size: 1.25rem;
    }
  }
`;

// Utils

const Hero1 = () => {
  return (
    <>
      <header>
        <ImageContainer src={Img1} alt="Background Pattern" />
        <LogoContainer src={Logo} alt="" />
        <TextContainer>
          <h1>We make your music sound extraordinary.</h1>

          <p>
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </TextContainer>
      </header>
    </>
  );
};

export default Hero1;
