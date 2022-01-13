import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
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

const TextContainer = styled.div`
  padding: 0.5rem 1rem;
`;

const TextHeading = styled.h1`
  /* typography */
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

const TextSummary = styled.p`
  /* box model */
  margin-top: 0.25rem;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const ProductImage = styled.img`
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
  margin-bottom: -0.5rem;
  /* box model */
  background-color: rgb(17 24 39);
  padding: 0.5rem 1rem;
`;

const ButtonContainerHeading = styled.h1`
  /* typography */
  color: rgb(255 255 255);
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const ProductButton = styled.button`
  /* box model */
  padding: 0.25rem 0.5rem;

  /* typography */
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
`;

const ProductCard = () => {
  return (
    <>
      <ProductWrapper>
        <TextContainer>
          <TextHeading class="text-gray-800 uppercase">NIKE AIR</TextHeading>
          <TextSummary class="text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </TextSummary>
        </TextContainer>

        <ProductImage
          class="mt-2"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />

        <ButtonContainer>
          <ButtonContainerHeading>$129</ButtonContainerHeading>
          <ProductButton class="text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
          </ProductButton>
        </ButtonContainer>
      </ProductWrapper>
    </>
  );
};

export default ProductCard;
