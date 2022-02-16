import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;

  > header {
    padding: 2rem;
    grid-column: 1 / 4;
    background-color: rgb(165 243 252);
  }

  .left-side {
    padding: 2rem;
    grid-column: 1 / 2;
    background-color: rgb(8 145 178);
  }

  > main {
    padding: 2rem;
    grid-column: 2 / 3;
    background-color: rgb(34 211 238);
  }

  .right-side {
    padding: 2rem;
    grid-column: 3 / 4;
    background-color: rgb(8 145 178);
  }

  > footer {
    padding: 2rem;
    grid-column: 1 / 4;
    background-color: rgb(8 145 178);
  }
`;

const HolyGrail = () => {
  return (
    <>
      <Parent>
        <header>Header</header>
        <div className="left-side">Left Sidebar</div>
        <main> Main Content</main>
        <div className="right-side">Right Sidebar</div>
        <footer>Footer</footer>
      </Parent>
    </>
  );
};

export default HolyGrail;
