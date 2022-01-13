import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/vinyl.svg";

const SectionWrapper = styled.section`
  /* display */
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* box model */
  margin-top: 2.5rem;
  padding: 1.5rem;

  /*   typography */
  font-family: "Montserrat", sans-serif;
`;

const HeaderContainer = styled.div`
  /* box model */
  margin-left: auto;
  margin-right: auto;
  max-width: 28rem;
  width: 100%;
`;

const FormContainer = styled.div`
  /* box model */
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 28rem;
`;

const FormContainer2 = styled.div`
  /* sm:px-10 */

  /* box model */
  background-color: rgb(255 255 255);
  padding: 2rem 1.5rem;
  /*   misc */
  border-radius: 0.5rem;
`;

const HeaderLogin = styled.h1`
  /* box model */
  margin-top: 1.5rem;
  /* typography */
  text-align: center;
`;

const HeaderParagraph = styled.p`
  /* typography */
  text-align: center;
`;

const StyledForm = styled.form`
  /* box model */
  margin-bottom: 0px;

  & > * + * {
    margin-top: 1.5rem;
  }
`;

const StyledLabel = styled.label`
  /* display */
  display: block;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(55 65 81);
`;

const InputContainer = styled.div`
  margin-top: 0.25rem;
`;

const StyledInput = styled.input`
  /* box model */
  width: 100%;
  padding: 0.5rem 0.75rem;

  /* manipulation */
  &:focus {
    outline: none;
    border-color: rgb(99 102 241);
  }

  /* misc */
  border-color: rgb(209 213 219);
  border-radius: 0.5rem;
`;

const FlexUtil = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan2 = styled.span`
  /* text-gray-900 */

  /* display */
  display: block;

  /* box model */
  margin-left: 1rem;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const StyledButton = styled.button`
  /*  className="focus:ring-offset-2 focus:ring-indigo-500" */

  /* display */
  display: flex;
  justify-content: center;
  /* position */
  /* box model */
  width: 100%;
  min-width: 27rem;
  padding: 0.5rem 0.5rem;
  background-color: rgb(79 70 229);
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(255 255 255);
  /* manipulation */
  &:hover {
    background-color: rgb(67 56 202);
  }

  &:focus {
    outline: none;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }

  /* misc */
  border-color: rgb(99 102 241);
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

const LoginForm = () => {
  return (
    <>
      <SectionWrapper>
        <HeaderContainer>
          <Logo
            style={{
              height: "3rem",
              width: "100%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
            alt="Logo"
          />
          <HeaderLogin className="text-3xl font-extrabold  text-gray-900">
            Login
          </HeaderLogin>
          <HeaderParagraph className="mt-4  text-center text-sm text-gray-600 max-w">
            Not registered?
          </HeaderParagraph>
        </HeaderContainer>
        <FormContainer>
          <FormContainer2>
            <StyledForm>
              <div>
                <StyledLabel for="email">Email address</StyledLabel>
                <InputContainer>
                  <StyledInput id="email" name="email" type="email" required />
                </InputContainer>
              </div>
              <div>
                <StyledLabel for="password">Password</StyledLabel>
                <InputContainer>
                  <StyledInput
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                </InputContainer>
              </div>

              <FlexUtil>
                <input
                  id="terms-and-privacy"
                  name="terms-and-privacy"
                  type="checkbox"
                  className=""
                />
                <StyledSpan2 for="terms-and-privacy">
                  I agree to the Terms and Privacy Policy.
                </StyledSpan2>
              </FlexUtil>

              <div>
                <StyledButton type="submit">Sign up</StyledButton>
              </div>
            </StyledForm>
          </FormContainer2>
        </FormContainer>
      </SectionWrapper>
    </>
  );
};

export default LoginForm;
