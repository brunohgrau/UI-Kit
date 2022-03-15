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

const FormContainer = styled.form`
  background-color: white;
  width: 400px;
  border-radius: 8px;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  font-family: "Lato", sans-serif;

  > h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  > input {
    display: block;
    padding: 15px 30px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;

    font-family: "Lato", sans-serif;

    border: none;
    background-color: rgb(14 165 233);
    color: white;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const Center2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 30%;
    border-radius: 50%;
    margin-bottom: 1rem;
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

// Container

const Form2 = () => {
  return (
    <Center>
      <FormContainer>
        <h3> Login </h3>
        <Center2>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt="Avatar"
            class="avatar"
          />
        </Center2>

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

        <input type="submit" class="submitBtn" value="Sign Up" />
      </FormContainer>
    </Center>
  );
};

export default Form2;
