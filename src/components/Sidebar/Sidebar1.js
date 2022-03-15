import styled from "styled-components";
import React from "react";

// Styled Components

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 32px;
  padding: 32px;

  @media (min-width: 700px) {
    padding: 32px 0;
  }
`;
const Sidebar = styled.nav`
  display: none;
  flex: 1;
  max-width: 350px;
  background: white;
  padding: 24px 32px;
  border-radius: 0 16px 16px 0;

  & > h2 {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    color: hsl(0deg 0% 30%);
  }

  @media (min-width: 700px) {
    display: block;
  }
`;

const Main = styled.main`
  flex: 3;
  background: white;
  padding: 24px 32px 32px;
  border-radius: 16px 0 0 16px;
`;

/* /* Decorative styles */

/* main section:not(:last-of-type) {
  margin: 32px 0;
}
body {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
} */

const Sidebar1 = () => {
  return (
    <>
      <Wrapper>
        <Sidebar>
          <h2>Contents</h2>
          <ul>
            <li>
              <a href="/">Intro</a>
            </li>
            <li>
              <a href="/">Chapter 1</a>
            </li>
            <li>
              <a href="/">Chapter 2</a>
            </li>
            <li>
              <a href="/">Chapter 3</a>
            </li>
            <li>
              <a href="/">Chapter 4</a>
            </li>
            <li>
              <a href="/">Chapter 5</a>
            </li>
            <li>
              <a href="/">Conclusion</a>
            </li>
          </ul>
        </Sidebar>

        <Main>
          <h1>An Article</h1>
          <section>
            <h2>Intro</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </section>
          <section>
            <h2>Chapter 1</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC.
            </p>
          </section>
        </Main>
      </Wrapper>
    </>
  );
};

export default Sidebar1;
