import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";

const AvatarContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const ImageContainer = styled.img`
  display: inline-block;
  object-fit: cover;
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
`;

const SpanContainer = styled.span`
  display: inline-block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${blue[300]};
  border: 2px solid white;
  border-radius: 9999px;
`;

function Avatar2(props) {
  return (
    <>
      <AvatarContainer>
        <ImageContainer
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile image"
        />
        <SpanContainer></SpanContainer>
      </AvatarContainer>
    </>
  );
}

export default Avatar2;
