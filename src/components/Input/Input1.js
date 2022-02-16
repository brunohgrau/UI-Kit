import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 20rem;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
`;
const LabelContainer = styled.label`
  display: block;
  font-size: 0.75rem;
  line-height: 1rem;
`;
const InputContainer = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

function Input1() {
  return (
    <>
      <Container>
        <LabelContainer for="email"> Email </LabelContainer>

        <InputContainer id="email" type="email" />
      </Container>
    </>
  );
}

export default Input1;
