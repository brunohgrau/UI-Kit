import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Visual = styled.div`
  height: 100px;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  background: blue;

  > h3 {
    margin: 0;
  }
`;

const LineUp = () => {
  return (
    <>
      <Container>
        <Card>
          <h3>Title - Card 1</h3>
          <p contenteditable>
            Medium length description with a few more words here.
          </p>
          <div class="visual"></div>
        </Card>
        <Card>
          <h3>Title - Card 2</h3>
          <p contenteditable>
            Long Description. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </p>
          <div class="visual"></div>
        </Card>
        <Card>
          <h3>Title - Card 3</h3>
          <p contenteditable>Short Description.</p>
          <div class="visual"></div>
        </Card>
      </Container>
    </>
  );
};

export default LineUp;
