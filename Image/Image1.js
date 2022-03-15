import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
  border-radius: 20px;

  > img {
    background-size: cover;
    width: 240px;
    height: 240px;
    object-fit: cover;
  }
`;

function Image1(props) {
  return (
    <>
      <ImageContainer>
        <img src="https://images.unsplash.com/photo-1634068392184-afee320d6aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=320&q=60" />
      </ImageContainer>
    </>
  );
}

export default Image1;
