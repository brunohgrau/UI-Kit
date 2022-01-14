import React from "react";
import styled from "styled-components";

// Wrapper

const Wrapper = styled.div`
  /* max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md  */

  /* box model */
  max-width: 28rem;
  padding: 1rem 2rem;
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

const HeaderContainer = styled.div`
  /* flex items-center justify-between */

  /* display */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  /* box model */
  margin-top: 0.5rem;
`;

const ImageContainer = styled.div`
  /* display */
  display: flex;
  align-items: center;
`;

// Secondary

const StyledSpan = styled.span`
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: rgb(71 85 105);
`;

const StyledImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
`;

const StyledLink = styled.a`
  /* box model */
  padding: 0.25rem 0.75rem;
  /* typography */
  font-size: 0.875rem;
`;

const StyledLink2 = styled.a`
  /* typography */
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(71 85 105);
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  /* box model */
  margin-top: 1rem;
  text-decoration: none;
  width: 100%;
  line-height: 1.5rem;
  text-align: justify;
`;

// Utils

const ArticleCard = () => {
  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <StyledSpan>June 2, 2021</StyledSpan>
          <ImageContainer>
            <StyledImage
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1641343293300-0fbdd30916ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="avatar"
            />
            <StyledLink class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              Joe
            </StyledLink>
          </ImageContainer>
        </HeaderContainer>
        <TextContainer>
          <StyledLink2
            href="#"
            class="  hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            Article Title
          </StyledLink2>
          <StyledParagraph class="mt-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </StyledParagraph>
        </TextContainer>
      </Wrapper>
    </>
  );
};

export default ArticleCard;
