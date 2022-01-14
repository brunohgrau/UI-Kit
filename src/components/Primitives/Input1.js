import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  overflow: hidden;
`;

//Container

//Secondary
const StyledEmailInput = styled.input`
  /* display */
  display: block;

  /* box model */
  width: 100%;
  padding: 10px;

  /* typography */
  font-family: "Montserrat", sans-serif;
  /* manipulation */
  &:hover {
    background: rgb(229 231 235);
  }

  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    padding: 15px;
  }
  /* misc */

  border: 2px solid rgb(229 231 235);
  border-radius: 2rem;
`;

//Utils

const Input1 = () => {
  return (
    <>
      <Wrapper>
        <StyledEmailInput
          type="email"
          name="email"
          class="submitDocs"
          required
          placeholder="Email address"
        />
      </Wrapper>
    </>
  );
};

export default Input1;
