import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  /*   background: linear-gradient(120deg, #9eabe4, #77eed8); */
  height: 100vh;
  overflow: hidden;
`;

// Container

const TextContainer = styled.div`
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 2rem 0;

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

const StyledDiv = styled.div`
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const StyledInputSubmit = styled.input`
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
`;
const StyledSignup = styled.div`
  margin: 30px 0;
  text-align: center;
  font-size: 1rem;
`;
const StyledSignupLink = styled.a`
  text-decoration: none;
  color: rgb(14 165 233);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Utils

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20rem;
  background: white;
  border-radius: 0.75rem;
  padding-top: 1rem;

  > h1 {
    text-align: center;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid silver;
  }

  > form {
    margin-top: 1rem;
    padding: 0 40px;
  }

  @media (min-width: 414px) {
    width: 25rem;
  }
`;

const Form1 = () => {
  return (
    <>
      <Wrapper>
        <Center>
          <h1>Login</h1>
          <form action="">
            <TextContainer>
              <input type="text" required />
              <span> </span>
              <label htmlFor="">Username</label>
            </TextContainer>
            <TextContainer>
              <input type="password" required />
              <span> </span>
              <label htmlFor="">Password</label>
            </TextContainer>
            <StyledDiv> Forgot Password?</StyledDiv>
            <StyledInputSubmit type="submit" value="Login" />
            <StyledSignup>
              Not a member? <StyledSignupLink> Signup </StyledSignupLink>
            </StyledSignup>
          </form>
        </Center>
      </Wrapper>
    </>
  );
};

export default Form1;
