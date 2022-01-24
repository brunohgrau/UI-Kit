import React from "react";
import styled from "styled-components";
import shoes from "../../assets/shoes.png";

// Utils

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
`;

// Container

const CardContainer = styled.div`
  position: relative;
  width: 320px;
  height: 450px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: "Nike";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: Italic;
    color: rgba(255, 255, 255, 0.04);
  }
`;
// Box

const ImageContainer = styled.div`
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;

  &:hover {
    top: 0%;
    transform: translateY(0%);
  }

  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    width: 270px;
  }
`;
const TextContainer = styled.div`
  position: absolute;
  bottom: 4.5rem;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;

  > h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    text-align: center;
  }

  > a {
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    background: #fff;
    border-radius: 1rem;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: black;
    font-weight: 500;
  }
  & a:hover {
    background: #9bdc28;
  }
`;
// Secondary

const Size = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  padding: 8px 20px;
  transition: 0.5s;

  > h3 {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  > span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    border-radius: 4px;
  }

  & span:hover {
    background: #9bdc28;
  }
`;

const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;

  > h3 {
    color: #fff;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
  }

  > span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }

  > span:nth-child(2) {
    background: #9bdc28;
  }

  > span:nth-child(3) {
    background: #03a9f4;
  }

  > span:nth-child(4) {
    background: #e91e63;
  }
`;

// Utils

const ProductCard = () => {
  return (
    <Center>
      <CardContainer>
        <ImageContainer>
          <img src={shoes} />
        </ImageContainer>
        <TextContainer>
          <h2>Nike Air</h2>
          <Size>
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </Size>
          <Color>
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </Color>
          <a href="">Buy Now</a>
        </TextContainer>
      </CardContainer>
    </Center>
  );
};

export default ProductCard;
