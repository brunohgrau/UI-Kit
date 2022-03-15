import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";

const SpanContainer = styled.span`
  position: relative;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const SVGContainer = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: currentColor;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  right: -0.25rem;
  transform: translateX(-50%);
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  line-height: 1;
  background: ${blue[200]};
  border-radius: 9999px;
`;

function Badge2(props) {
  return (
    <>
      <SpanContainer>
        <SVGContainer viewBox="0 0 20 20">
          <path
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          ></path>
        </SVGContainer>
        <StyledSpan>99</StyledSpan>
      </SpanContainer>
    </>
  );
}

export default Badge2;
