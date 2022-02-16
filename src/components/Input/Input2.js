import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-width: 20rem;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
`;

const InputBox = styled.div`
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 2rem;

  > input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    border: none;
    background: none;
    outline: none;
    font-size: 1rem;
  }

  > label {
    position: absolute;
    left: 5px;
    top: 50%;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 1rem;
    pointer-events: none;
    transition: 1s;
  }

  & span:before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #9eabe4;
    transition: 0.5s;
  }

  & input:focus ~ label {
    top: -5px;
    color: rgb(14 165 233);
  }

  & input:valid ~ label {
    top: -5px;
    color: rgb(14 165 233);
  }
  & input:focus ~ span:before {
    width: 100%;
  }

  & input:valid ~ span:before {
    width: 100%;
  }
`;

function Input2() {
  return (
    <>
      <Container>
        <InputBox>
          <input type="text" required />
          <span> </span>
          <label htmlFor="">Username</label>
        </InputBox>
      </Container>
    </>
  );
}

export default Input2;
