import React from "react";
import styled from "styled-components";
import { blue } from "../../utils";

const SpanContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
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
      <SpanContainer>9</SpanContainer>
    </>
  );
}

export default Badge1;
