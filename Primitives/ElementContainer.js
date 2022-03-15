import React from "react";
import styled from "styled-components";
import shoes from "../../assets/shoes.png";

// Util

// Container
const Container = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  background: gray;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }

  transition: 0.5s ease;
  cursor: pointer;
`;

const ElementContainer = () => {
  return <Container> </Container>;
};

export default ElementContainer;
