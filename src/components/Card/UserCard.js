import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  /* box model */
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(255 255 255);

  /* misc */
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  overflow: hidden;
`;

const TextContainer = styled.div`
  padding: 0.5rem;
`;

const TextHeading = styled.h1`
  /* display */
  display: flex;
  justify-content: center;

  /* typography */
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

const TextSummary = styled.p`
  /* display */
  display: flex;
  justify-content: center;

  /* box model */

  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const ProductImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 12rem;
`;

const UserCard = () => {
  return (
    <>
      <ProductWrapper>
        <ProductImage
          class="mt-2"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="NIKE AIR"
        />

        <TextContainer>
          <TextHeading class="text-gray-800 uppercase">Joe Doe</TextHeading>
          <TextSummary class="text-gray-600 dark:text-gray-400">
            Front End Dev
          </TextSummary>
        </TextContainer>
      </ProductWrapper>
    </>
  );
};

export default UserCard;
