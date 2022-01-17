import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.div`
  /* box model */
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(255 255 255);

  /*   typography */
  font-family: "Montserrat", sans-serif;

  /* misc */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow: hidden;
`;

// Container

const TextContainer = styled.div`
  padding: 0.5rem 1rem;
`;

const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: 12rem;
`;

const ButtonContainer = styled.div`
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -0.25rem;

  /* box model */
  background-color: rgb(17 24 39);
  padding: 0.5rem 1rem;
`;

// Secondary

const StyledHeading = styled.h1`
  /* typography */
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  /*    class="text-gray-600 dark:text-gray-400" */

  /* box model */
  margin-top: 0.25rem;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const StyledHeading2 = styled.h1`
  /* typography */
  color: rgb(255 255 255);
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const StyledButton = styled.button`
  /* class=" transition-colors duration-200 transform 
 focus:bg-gray-400 focus:outline-none" */

  /* box model */
  padding: 0.5rem;
  background-color: rgb(229 231 235);

  /* typography */
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  color: rgb(17 24 39);
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;

  /* manipulation */
  &:hover {
    background-color: rgb(229 231 235);
  }

  &:focus {
    outline: none;
  }

  /* misc */
  border-radius: 0.375rem;
  border: none;

  cursor: pointer;
`;

// Utils

const ProductCard = () => {
  return (
    <>
      <Wrapper>
        <TextContainer>
          <StyledHeading class="text-gray-800 uppercase">PRODUCT</StyledHeading>
          <StyledParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </StyledParagraph>
        </TextContainer>

        <ImageContainer
          class="mt-2"
          src="https://images.unsplash.com/photo-1642015555291-c3711ba56e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="NIKE AIR"
        />

        <ButtonContainer>
          <StyledHeading2>$100</StyledHeading2>
          <StyledButton>Add to cart</StyledButton>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default ProductCard;
