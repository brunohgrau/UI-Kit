import React from "react";
import styled from "styled-components";
import { yellow } from "../../utils";

//Image with Background

const WrapperContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  width: 300px;
  height: 200px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  height: 130px;
  width: 100%;
  background: ${yellow[200]};
  box-sizing: border-box;
  position: relative;
  border-radius: 10%;

  > img {
    position: absolute;
    top: 1.5rem;
    left: calc(50% - 84px);
    width: 160px;
    height: 160px;
    padding: 3px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }
`;

function Image2(props) {
  return (
    <>
      <WrapperContainer>
        <ImageContainer>
          <img src="https://images.unsplash.com/photo-1641927420960-8059f26993d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </ImageContainer>
      </WrapperContainer>
    </>
  );
}

export default Image2;
