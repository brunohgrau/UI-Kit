import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  /* max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md  */

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

const ImageContainer = styled.img`
  object-fit: cover;
  width: 100%;
  height: 16rem;
`;

const TextContainer = styled.div`
  /* box model */
  padding: 1.25rem;
`;

const TextSpan = styled.span`
  /* typography */
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-weight: 400;
  color: rgb(107 114 128);
`;

const TextHeader = styled.h2`
  /* display */
  display: block;

  /* position */
  /* box model */
  margin-top: 1rem;
  /* typography */
  font-size: 1.5rem;
  line-height: 1.25rem;
  text-decoration: none;
`;

const TextParagraph = styled.p`
  font-size: 0.75rem;
  line-height: 1.5rem;
`;

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
            <TextSpan>Category</TextSpan>
            <TextHeader>Title</TextHeader>
            <TextParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </TextParagraph>
          </div>
        </TextContainer>
      </Wrapper>
    </>
  );
};

export default ArticleImgCard;
