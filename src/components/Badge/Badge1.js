import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";
import { FaEnvelope } from "react-icons/fa";

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

  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  line-height: 1;
  background: ${blue[200]};
  color: white;
  border-radius: 9999px;
`;

function Badge1(props) {
  return (
    <>
      <SpanContainer>
        <SVGContainer>
          <FaEnvelope />
        </SVGContainer>

        <StyledSpan> 9 </StyledSpan>
      </SpanContainer>
    </>
  );
}

export default Badge1;
