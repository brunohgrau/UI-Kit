import React, { useState } from "react";
import styled from "styled-components";
import { blue } from "../../utils";

const LabelContainer = styled.label`
  margin: 4rem;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;
const InputContainer = styled.input`
  display: none;
`;

const DivContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid ${blue[200]};
  border-radius: 50%;
  margin-right: 0.75rem;
  padding: 2px;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: ${blue[100]};
    border-radius: 50%;
    /*  transform: scale(0); */
  }
`;

function Radio1(props) {
  return (
    <>
      <LabelContainer for="RadioId">
        <InputContainer type="radio" id="RadioId" />
        <DivContainer> </DivContainer>
        Visual Studio Code
      </LabelContainer>
    </>
  );
}

export default Radio1;
