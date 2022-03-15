import styled from "styled-components";

const Wrapper = styled.main`
  --breathing-room: 16px;
  display: grid;
  grid-template-columns: 1fr min(50ch, 100%) 1fr;
  & > * {
    grid-column: 2;
  }
  padding-left: var(--breathing-room);
  padding-right: var(--breathing-room);
`;

const ImageContainer = styled.div`
  grid-column: 1 /-1;
  margin-left: calc(var(--breathing-room) * -1);
  margin-right: calc(var(--breathing-room) * -1);
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Image8 = () => {
  return (
    <>
      <Wrapper>
        <h1>Some Heading</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <ImageContainer>
          <Image
            alt="a satisfied-looking cute meerkat"
            src="https://images.unsplash.com/photo-1646652369601-9be78f340701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cm5TS0RId3dZVWt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            class="meerkat"
          />
        </ImageContainer>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </Wrapper>
    </>
  );
};

export default Image8;
