import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";

// Utils

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

// Container

const FormContainer = styled.form`
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  font-family: "Lato", sans-serif;

  > h1 {
    font-size: 3rem;
    margin-bottom: 50px;
    text-align: center;
  }

  > input {
    font-family: "Lato", sans-serif;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 15px 30px;
    border: none;
    background-color: rgb(14 165 233);
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 30px;
  }
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
    border: 2px solid rgb(14 165 233);
  }

  > label {
    position: absolute;
    top: -7px;
    left: 3px;
    padding: 0 4px;
    background-color: white;
    color: #dadce0;
    font-size: 0.75rem;
    transition: 0.5s;

    color: rgb(14 165 233);
    z-index: 10;
  }
`;

const Form3 = () => {
  return (
    <Center>
      <FormContainer>
        <h1>Sign Up</h1>
        <InputContainer>
          <input type="text" class="input" />
          <label for="" class="label">
            Email
          </label>
        </InputContainer>

        <InputContainer>
          <input type="text" class="input" />
          <label for="" class="label">
            Username
          </label>
        </InputContainer>

        <InputContainer>
          <input type="text" class="input" />
          <label for="" class="label">
            Password
          </label>
        </InputContainer>

        <InputContainer>
          <input type="text" class="input" />
          <label for="" class="label">
            Confirm Password
          </label>
        </InputContainer>

        <input type="submit" class="submitBtn" value="Sign Up" />
      </FormContainer>
    </Center>
  );
};

export default Form3;
