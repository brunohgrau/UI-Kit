import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.details`
  width: 320px;
  font-size: 1rem;
  color: hsl(0deg, 0%, 25%);
  margin: 32px;
  border: 2px solid;
  border-radius: 4px;
`;

const Question = styled.summary`
  cursor: pointer;
  padding: 12px 16px;
  outline-offset: 5px;
`;

const Answer = styled.div`
  background: hsl(0deg 0% 92.5%);
  border-radius: 0 0 4px 4px;
  padding: 12px 17px;
  font-style: italic;
`;

const Dropdown2 = () => {
  return (
    <>
      <Wrapper>
        <Question>What does “CSS” stand for?</Question>
        <Answer>"Cool Styling Strategy"</Answer>
      </Wrapper>
    </>
  );
};

export default Dropdown2;
