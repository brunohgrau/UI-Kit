import React from "react";
import styled from "styled-components";
import MainImg1 from "../../assets/smartphone.png";

const ContentContainer = styled.div`
  position: relative;
  margin: 15% calc(-5% - 2px) 0;
  font-family: "Montserrat", sans-serif;

  @media screen and (min-width: 695px) {
    margin: 15% 0 0;
  }

  @media screen and (min-width: 1000px) {
  }
`;
const ImageContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  z-index: 10;
  & > img {
    max-width: 100%;
  }
  /*  Center Img */
  transform: translate(-50%, -50%);

  @media screen and (min-width: 414px) {
    top: 15%;
  }

  @media screen and (min-width: 695px) {
    left: 25%;
    top: 20%;
    width: 270px;
  }

  @media screen and (min-width: 1000px) {
    left: 25%;
    width: 350px;
  }
`;

const BackgroundContainer = styled.div`
  background: rgb(79 70 229);
  border-radius: 8px;
  height: 300px;
  @media screen and (min-width: 1000px) {
    height: 400px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  bottom: 50px;
  z-index: 20;

  background: rgb(147 197 253);
  padding: 35px 7%;
  border-radius: 8px;
  & > * + * {
    margin-top: 1rem;
  }

  & > h2 {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.25;
  }

  & > p {
    font-size: 1.125rem;
    line-height: 1.5;
  }

  @media screen and (min-width: 695px) {
    position: absolute;
    top: 30%;
    bottom: unset;
    left: 30%;
    width: 60%;
  }

  @media screen and (min-width: 1000px) {
    top: 25%;
    left: 40%;
    max-width: 600px;
    padding: 2rem 5%;
    & > p {
      font-size: 1.25rem;
      line-height: 1.5;
    }
  }

  .btn-container {
    display: flex;
    gap: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: white;

  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: black;

  border: 1px solid rgb(59 130 246);
  border-radius: 0.25em;
  cursor: pointer;
`;

const Content1 = () => {
  return (
    <>
      <main>
        <ContentContainer>
          <ImageContainer>
            <img src={MainImg1} />
          </ImageContainer>
          <BackgroundContainer></BackgroundContainer>
          <TextContainer>
            <h2>Mobile Plans</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia,
            </p>
            <div className="btn-container">
              <Button> Button </Button>
              <Button> Button </Button>
            </div>
          </TextContainer>
        </ContentContainer>
      </main>
    </>
  );
};

export default Content1;
