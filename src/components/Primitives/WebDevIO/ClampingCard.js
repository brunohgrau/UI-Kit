import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: grid;
  place-items: center;
`;
const Card = styled.div`
  width: clamp(23ch, 50%, 46ch);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: blue;
  > p {
    margin-top: 1rem;
  }
`;
const Visual = styled.div`
  aspect-ratio: 16 / 9;
  background: green;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const ClampingCard = () => {
  return (
    <>
      <Parent>
        <Card>
          <h1>Video Title</h1>
          <Visual>
            <img src="https://images.unsplash.com/photo-1635008691248-4002495c3193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </Visual>
          <p>Descriptive Text goes here</p>
        </Card>
      </Parent>
    </>
  );
};

export default ClampingCard;
