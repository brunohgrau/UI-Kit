import styled from "styled-components";
import React from "react";

// Styled Components

const Column = styled.div`
  width: clamp(500px, 65%, 800px);
  max-width: 100%;

  background: white;
  border-radius: 4px;
  padding: 24px;
  margin: 0 auto;
`;

const Text2 = () => {
  return (
    <>
      <Column>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </Column>
    </>
  );
};

export default Text2;
