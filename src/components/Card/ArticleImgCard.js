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
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow: hidden;
`;

// Container
const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: 8rem;
`;

const TextContainer = styled.div`
  /* box model */
  padding: 1.25rem;
`;

// Secondary

const StyledSpan = styled.span`
  /* typography */
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 400;
  color: rgb(107 114 128);
`;

const StyledHeader = styled.h2`
  /* display */
  display: block;
  /* box model */
  margin-top: 1rem;
  /* typography */
  font-size: 1.5rem;
  line-height: 1.25rem;
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 1.5rem;
`;

// Utils

const ArticleImgCard = () => {
  return (
    <>
      <Wrapper>
        <ImageContainer
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1637354390131-37b41d14b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80"
          alt="Article"
        />

        <TextContainer>
          <div>
            <StyledSpan>Category</StyledSpan>
            <StyledHeader>Title</StyledHeader>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel.
            </StyledParagraph>
          </div>
        </TextContainer>
      </Wrapper>
    </>
  );
};

export default ArticleImgCard;
