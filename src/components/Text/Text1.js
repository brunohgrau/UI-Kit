import styled from "styled-components";
import React from "react";

const StyledHeader = styled.h4`
  font-size: 1.25rem;
  color: black;
  text-transform: captilize;
  margin-bottom: 2rem;
  font-weight: 500;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: rgb(0 0 0);
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`;

const Text1 = (props) => {
  return (
    <>
      <StyledHeader>Company</StyledHeader>
    </>
  );
};

export default Text1;
