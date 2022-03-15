import React from "react";
import styled from "styled-components";

// Utils

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
`;

// Container

const FormContainer = styled.form`
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 20px 40px;
  box-shadow: 0 10px 25px rgba(92, 99, 105, 0.2);
  font-family: "Lato", sans-serif;

  > h1 {
    font-size: 3rem;
    margin-bottom: 50px;
    text-align: center;
  }

  > div {
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > input {
    width: 100%;
    height: 50px;
    border: 1px solid;
    background-color: rgb(14 165 233);
    border-radius: 1.75rem;
    font-size: 18px;
    color: rgb(255 255 255);
    font-weight: 700;
    cursor: pointer;
    outline: none;

    &:hover {
      border-color: rgb(14 165 233);
      transition: 0.5s;
    }
  }

  > p {
    margin-top: 2rem;
    text-align: center;
    font-size: 1rem;
  }

  > p > a {
    text-decoration: none;
    color: rgb(14 165 233);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 414px) {
    width: 25rem;
  }
`;

// Boxes

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

//Secondary

const Form1 = () => {
  return (
    <>
      <Center>
        <FormContainer>
          <h1>Login</h1>
          <InputBox>
            <input type="text" required />
            <span> </span>
            <label htmlFor="">Username</label>
          </InputBox>
          <InputBox>
            <input type="password" required />
            <span> </span>
            <label htmlFor="">Password</label>
          </InputBox>
          <div> Forgot Password?</div>
          <input type="submit" value="Login" />
          <p>
            Not a member? <a> Signup </a>
          </p>
        </FormContainer>
      </Center>
    </>
  );
};

export default Form1;
