import React from "react";
import styled from "styled-components";
import Img1 from "../../assets/bg-pattern-1.svg";
import Logo from "../../assets/logo.svg";

// Wrapper
// Container

const ImageContainer = styled.img`
  /*   display */
  display: none;

  @media screen and (min-width: 695px) {
    /*   display */
    display: block;
    /* position */
    position: absolute;
    right: -5%;
    top: -30px;
    /* box model */
    max-width: 230px;
  }

  @media screen and (min-width: 1110px) {
    /* position */
    right: 0;
  }
`;

const LogoContainer = styled.img`
  /*   display */
  display: block;
`;

const TextContainer = styled.div`
  /* box model */
  margin: 30px 0 70px; //top + left/right + bottom
  width: 100%;
  font-family: "Lato", sans-serif;

  @media screen and (min-width: 695px) {
    /* box model */
    margin: 40px 0 70px; //top + left/right + bottom
    width: 75%;
  }

  @media screen and (min-width: 1110px) {
    /* box model */
    margin: 60px 0 150px; //top + left/right + bottom
    width: 80%;
  }
`;

// Secondary

const StyledHeader = styled.h1`
  /* box model */
  margin-bottom: 25px;
  width: 80%;
  /* typography */

  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: -0.45px;
  line-height: 1.2;

  @media screen and (min-width: 695px) {
    /* box model */
    margin-bottom: 30px;
    width: 100%;
    /* typography */
    font-size: 4rem;
    letter-spacing: -0.75px;
    line-height: 1;
  }

  @media screen and (min-width: 1110px) {
    font-size: 5.5rem;
  }
`;

const StyledParagraph = styled.p`
  /* box model */
  width: 100%;
  /* typography */
  font-size: 1rem;
  line-height: 1.7;

  @media screen and (min-width: 695px) {
    /* typography */
    font-size: 1.125rem;
  }

  @media screen and (min-width: 1110px) {
    /* box model */
    width: 95%;
    /* typography */
    font-size: 1.25rem;
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
          <StyledHeader>We make your music sound extraordinary.</StyledHeader>

          <StyledParagraph class="primary-paragraph">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </StyledParagraph>
        </TextContainer>
      </header>
    </>
  );
};

export default Hero1;
