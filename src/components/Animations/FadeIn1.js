import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

export const PrimaryButton = styled.button`
  /* box model */
  padding: 0.5rem 1rem;
  background-color: rgb(37 99 235);
  /* typography */
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: rgb(255 255 255);

  /* manipulation */
  &:hover {
    background-color: rgb(59 130 246);
  }

  &:focus {
    outline: 3px solid rgb(59 130 246);
    outline-offset: 2px;
  }

  /* misc */
  border-radius: 0.375rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const FadeIn1 = () => {
  const [show, setShow] = useState(false);
  const animation = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0)` : `translateY(-30%)`
  });

  return (
    <div>
      <PrimaryButton onClick={() => setShow(!show)}>Toggle</PrimaryButton>
      <animated.p style={animation}>Animate me on click!</animated.p>
    </div>
  );
};

export default FadeIn1;
