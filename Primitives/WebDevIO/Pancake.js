import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  /* Just for parent demo size */
  height: 100vh;
`;

const Pancake = () => {
  return (
    <>
      <Parent>
        <header class="section yellow">Header</header>
        <main class="section blue">Main</main>
        <footer class="section green">Footer Content</footer>
      </Parent>
    </>
  );
};

export default Pancake;
