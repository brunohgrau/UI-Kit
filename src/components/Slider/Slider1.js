import React from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  margin: 4rem;
`;

function Slider1(props) {
  return (
    <>
      <SliderContainer>
        <input id="volume" type="range" min="0" max="100" step="1" />
        <label class="visually-hidden" for="volume">
          Volume
        </label>
      </SliderContainer>
    </>
  );
}

export default Slider1;
