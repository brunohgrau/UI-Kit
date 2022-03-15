import styled from "styled-components";
import React from "react";

// Styled Components
const Section = styled.section`
  display: flex;
  gap: 8px;
  margin: 16px;
`;

const ImageWrapper = styled.div`
  flex: 1;
`;

const Image = styled.img`
  /*  height: 200px;
  width: 200px; */
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
`;

const Image7 = () => {
  return (
    <>
      <Section>
        <ImageWrapper>
          <Image
            alt="A wide-open outdoor concrete area. Architecture"
            src="https://images.unsplash.com/photo-1646671130308-b54442df939b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          />
        </ImageWrapper>

        <ImageWrapper>
          <Image
            alt="A modular building against a blue sky. Architecture"
            src="https://images.unsplash.com/photo-1646628426901-1c9d1c6d3fcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            alt="A unique building with inset curves. Architecture"
            src="https://images.unsplash.com/photo-1646075182341-60b8f5170692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </ImageWrapper>
      </Section>
    </>
  );
};

export default Image7;
