import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.section`
  /* box model */
  max-width: 14rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1.25rem;
  background-color: rgb(255 255 255);

  /*   typography */
  font-family: "Montserrat", sans-serif;

  /* misc */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow: hidden;
`;

// Container

const HeaderContainer = styled.h1`
  /* display */
  display: flex;
  justify-content: center;

  /* box model */
  margin-bottom: 1rem;

  /*   typography */
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-transform: capitalize;
`;

const FormContainer = styled.form`
  /*  sm:grid-cols-2 */

  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* box model */
  width: 100%;
`;

const ButtonContainer = styled.div`
  /* display */
  display: flex;
  justify-content: center;
  /* box model */
  margin-top: 1.5rem;
`;

// Secondary

const StyledInput = styled.input`
  /* display */
  display: block;
  /* box model */
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  background-color: rgb(255 255 255);
  /* typography */
  font-family: "Montserrat", sans-serif;
  text-align: center;
  /* manipulation */
  &:hover {
    background: rgb(229 231 235);
  }

  &:focus {
    outline: none;
  }
  /* misc */

  border: 2px solid rgb(229 231 235);
  border-radius: 1rem;
`;

const StyledButton = styled.button`
  /* class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" */

  /* box model */
  width: 100%;
  padding: 0.25rem 1.5rem;
  /* typography */
  font-family: "Montserrat", sans-serif;
  color: rgb(55 65 81);
  line-height: 28px;
  font-size: 0.93rem;
  font-weight: 600;
  /* manipulation */

  &:hover {
    background: rgb(229 231 235);
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    position: absolute;
    top: 5px;
    width: 200px;
    right: 3px;
  }

  /* misc */
  border: 2px solid rgb(229 231 235);
  border-radius: 2rem;
`;

// Utils

const SimpleForm = () => {
  return (
    <>
      <Wrapper>
        <HeaderContainer class="text-gray-700 ">Login</HeaderContainer>
        <FormContainer>
          <div>
            <StyledInput id="username" type="text" placeholder="Username" />
          </div>
          <div>
            <StyledInput id="username" type="text" placeholder="Email" />
          </div>
          <div>
            <StyledInput id="username" type="text" placeholder="Password" />
          </div>

          <ButtonContainer>
            <StyledButton>Save</StyledButton>
          </ButtonContainer>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default SimpleForm;
