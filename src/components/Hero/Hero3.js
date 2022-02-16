import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo2.svg";
import HeroImage1 from "../../assets/image-hero-left.png";
import HeroImage2 from "../../assets/image-hero-right.png";

const NavContainer = styled.nav`
  padding-top: 3rem;
  @media screen and (min-width: 1110px) {
    padding-top: 5rem;
  }
`;

const StyledLogo = styled.img`
  display: block;
  margin: auto;
`;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "image1 image2" "content content";
  margin-top: 3.5rem;

  @media screen and (min-width: 695px) {
    margin-top: 4rem;
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "image1 content image2";
  }

  .img-left {
    display: block;
    grid-area: image1;
    width: 100%;

    @media screen and (min-width: 1110px) {
      margin-left: -33px;
    }
  }

  .img-right {
    display: block;
    grid-area: image2;
    width: 100%;
    @media screen and (min-width: 1110px) {
      margin-left: 33px;
    }
  }
`;

const ContentContainer = styled.div`
  grid-area: content;
  margin: 3rem auto 0;
  max-width: 28rem;

  > h1 {
    padding: 10px 50px 18px;
    color: #28283d;
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 44px;
    text-transform: capitalize;
    text-align: center;
    @media screen and (min-width: 695px) {
      margin-bottom: 15px;
      padding: 24px 50px 18px;
    }

    @media screen and (min-width: 1110px) {
      padding: 0px 0px 18px;
      font-size: 3.5rem;
      line-height: 64px;
    }
  }

  > p {
    padding: 0px 20px;
    color: #28283d;
    font-size: 1rem;
    line-height: 26px;
    text-align: center;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 38px;
    @media screen and (min-width: 695px) {
      flex-direction: row;
    }
  }

  > div .primary {
    display: block;
    padding: 14px 36px;
    background-color: #4d96a9;
    border: 2px solid transparent;
    font-size: 1rem;
    font-weight: 900;
    line-height: 26px;
    color: #ffffff;
    border-radius: 29px;

    &:hover {
      cursor: pointer;
      background-color: #6eadbd;
    }

    &:focus {
      cursor: pointer;
      background-color: #6eadbd;
    }
  }

  > div .secondary {
    display: block;
    background-color: #855fb1;
    border: 2px solid transparent;
    padding: 14px 36px;
    font-size: 1rem;
    font-weight: 900;
    line-height: 26px;
    color: #ffffff;
    border-radius: 29px;

    &:hover {
      cursor: pointer;
      background-color: #9d7fc1;
    }

    &:focus {
      cursor: pointer;
      background-color: #9d7fc1;
    }
  }
`;

const Hero3 = () => {
  return (
    <>
      <NavContainer>
        <a href="">
          <StyledLogo src={Logo} alt="" />
        </a>
      </NavContainer>
      <LayoutContainer>
        <img
          src={HeroImage1}
          className="img-left"
          alt="group chat for everyone"
        />
        <img
          src={HeroImage2}
          className="img-right"
          alt="group chat for everyone"
        />

        <ContentContainer>
          <h1>group chat for everyone</h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div>
            <button className="primary">
              Download
              <span
                style={{
                  color: "#8fe3f9"
                }}
              >
                {""} v1.3
              </span>
            </button>
            <button className="secondary">What is it?</button>
          </div>
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default Hero3;
