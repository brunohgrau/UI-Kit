import React from "react";
import styled from "styled-components";

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

const FooterContainer = styled.div`
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* box model */
  margin-top: 0.5rem;
`;

const HeaderSpan = styled.span`
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: rgb(71 85 105);
`;

const HeaderLink = styled.a`
  /* display */
  /* position */
  /* box model */
  padding: 0.25rem 0.75rem;
  /* typography */
  font-size: 0.875rem;
`;

const HeaderImg = styled.div`
  /* display */
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
`;

const TextLink = styled.a`
  /* typography */
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(71 85 105);
  text-decoration: none;
`;

const TextParagraph = styled.p`
  /* box model */
  margin-top: 1rem;
  text-decoration: none;
  width: 100%;
  line-height: 1.5rem;
  text-align: justify;
`;

const FooterLink = styled.a`
  text-decoration: none;
`;

const ArticleCard = () => {
  return (
    <>
      <Wrapper>
        <HeaderContainer>
          <HeaderSpan>June 2, 2021</HeaderSpan>
          <HeaderImg class="flex items-center">
            <Image
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1641343293300-0fbdd30916ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="avatar"
            />
            <HeaderLink class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              Joe
            </HeaderLink>
          </HeaderImg>
        </HeaderContainer>
        <TextContainer>
          <TextLink
            href="#"
            class="  hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            Article Title
          </TextLink>
          <TextParagraph class="mt-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </TextParagraph>
        </TextContainer>
      </Wrapper>
    </>
  );
};

export default ArticleCard;
