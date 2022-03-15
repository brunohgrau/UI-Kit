import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: start;
  margin-top: 1.5rem;
  margin-: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1.25rem;
`;

const StyledInput = styled.input`
  /*  bg-gray-50 focus:ring-3 focus:ring-blue-300   */
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 2px solid gray;
  &:focus {
  }
`;

const TextContainer = styled.div`
  margin-left: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const StyledLabel = styled.label`
  font-weight: 500;
`;

const StyledLink = styled.a`
  /*  text-blue-600  */
  &:hover {
    text-decoration-line: underline;
  }
`;

function Checkbox1(props) {
  return (
    <>
      <CheckboxContainer>
        <InputContainer>
          <StyledInput
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            required
          />
        </InputContainer>
        <TextContainer>
          <StyledLabel for="terms">
            I agree with the{" "}
            <StyledLink href="#">terms and conditions</StyledLink>
          </StyledLabel>
        </TextContainer>
      </CheckboxContainer>
    </>
  );
}

export default Checkbox1;
