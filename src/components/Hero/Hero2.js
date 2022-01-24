import React from "react";
import styled from "styled-components";
import Img1 from "../../assets/bg-pattern-1.svg";
import Logo from "../../assets/logo.svg";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  font-family: "Lato", sans-serif;

  @media screen and (min-width: 695px) {
    padding: 4rem 2rem;
    flex-direction: row;
  }
`;

const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 695px) {
    align-items: flex-start;
    width: 50%;
    padding-right: 4rem;
    margin-bottom: 0px;
    justify-content: start;
    text-align: left;
  }

  @media screen and (min-width: 1110px) {
    padding-right: 6rem;
    flex-grow: 1;
  }

  > h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-bottom: 1rem;
    font-weight: 500;

    @media screen and (min-width: 695px) {
      font-size: 2.25rem;
      line-height: 2.5rem;
    }
  }

  > p {
    line-height: 1.625;
    margin-bottom: 2rem;
  }
`;

const RightBox = styled.div`
  width: 100%;

  @media screen and (min-width: 695px) {
    width: 50%;
  }

  @media screen and (min-width: 1110px) {
    max-width: 32rem;
    width: 100%;
  }

  > img {
    object-fit: cover;
    object-position: center;
    border-radius: 0.25rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;

  > button {
    display: inline-flex;
    color: rgb(255 255 255);
    background-color: rgb(99 102 241);
    padding: 0.5rem 1.25rem;
    border-width: 0px;
    border-radius: 0.25rem;
    font-size: 1.125rem;
    line-height: 1.75rem;

    &:focus {
      outline-width: 0px;
    }

    &:hover {
      background-color: rgb(79 70 229);
    }
  }

  > button + button {
    /*   hover:bg-gray-200 rounded text-lg */
    display: inline-flex;
    margin-left: 1rem;
    color: rgb(55 65 81);
    background: rgb(243 244 246);
    &:hover {
      background-color: rgb(229 231 235);
    }
  }
`;

const Hero2 = () => {
  return (
    <section>
      <LayoutContainer>
        <LeftBox>
          <h1>Hero Title</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <ButtonBox>
            <button>Button</button>
            <button>Button</button>
          </ButtonBox>
        </LeftBox>
        <RightBox>
          <img alt="hero" src="https://dummyimage.com/720x600" />
        </RightBox>
      </LayoutContainer>
    </section>
  );
};

export default Hero2;
