import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 20rem;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
`;

const InputContainer = styled.div`
  position: relative;
  height: 45px;
  width: 100%;
  margin-bottom: 17px;

  > input {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    border: 1px solid #dadce0;
    border-radius: 7px;
    font-size: 16px;
    padding: 0 20px;
    outline: none;
    background: none;
    z-index: 1;
  }

  & > input:focus {
    border: 2px solid white;
  }

  > label {
    position: absolute;
    top: -7px;
    left: 3px;
    padding: 0 4px;

    color: black;
    font-size: 0.75rem;
    transition: 0.5s;

    color: rgb(14 165 233);
    z-index: 10;
  }
`;

function Input3() {
  return (
    <>
      <Container>
        <InputContainer>
          <input type="text" class="input" />
          <label for="" class="label">
            Username
          </label>
        </InputContainer>
      </Container>
    </>
  );
}

export default Input3;
