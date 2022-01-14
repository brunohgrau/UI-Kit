import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.div`
  /* box model */
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(255 255 255);

  font-family: "Montserrat", sans-serif;

  /* misc */
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow: hidden;
`;

// Container

const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: 12rem;
`;

const TextContainer = styled.div`
  padding: 0.5rem;
`;

// Secondary

const StyledHeading = styled.h1`
  /* display */
  display: flex;
  justify-content: center;

  /* typography */
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  /* display */
  display: flex;
  justify-content: center;
  /* typography */

  margin-top: 0.75rem;
  font-size: 1rem;
  line-height: 1rem;
  color: rgb(55 65 81);
`;

// Utils

const UserCard = () => {
  return (
    <>
      <Wrapper>
        <ImageContainer
          class="mt-2"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="NIKE AIR"
        />

        <TextContainer>
          <StyledHeading class="text-gray-800 uppercase">Joe Doe</StyledHeading>
          <StyledParagraph class="text-gray-600 dark:text-gray-400">
            Front End Dev
          </StyledParagraph>
        </TextContainer>
      </Wrapper>
    </>
  );
};

export default UserCard;
