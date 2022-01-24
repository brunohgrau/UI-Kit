import React from "react";
import styled from "styled-components";
import shoes from "../../assets/shoes.png";

// Util

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: "Lato", sans-serif;
`;

// Container
const Element = styled.div`
  position: relative;
  width: 320px;
  height: 500px;

  border-radius: 20px;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }

  transition: 0.5s ease;
  cursor: pointer;
`;

// Box

const Frame = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  > img {
    background-size: cover;
    width: 320px;
    height: 210px;
  }
`;

const Stack = styled.div`
  width: 100%;
  height: 210px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    color: rgb(14 165 233);
    font-size: 13px;
  }

  > h2 {
    font-size: 28px;
    margin-top: 0.5rem;
  }

  > p {
    color: grey;
    font-size: 15px;
    font-weight: 300;
    margin-top: 0.5rem;
    text-align: justify;
  }
`;

const Cluster = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(14 165 233);
`;

// Secondary

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
  border-left: 1px solid white;
`;

// Utils

const RPGCard = () => {
  return (
    <Center>
      <Element>
        <Frame>
          <img src="https://images.unsplash.com/photo-1634068392184-afee320d6aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=320&q=60" />
        </Frame>
        <Stack>
          <span class="date">4 days ago</span>
          <h2>Post One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
            temporibus omnis illum maxime quod deserunt eligendi dolor
          </p>
        </Stack>
        <Cluster>
          <Stats>
            <div class="value">
              4<sup>m</sup>
            </div>
            <div class="type">read</div>
          </Stats>
          <Stats>
            <div class="value">5123</div>
            <div class="type">views</div>
          </Stats>
          <Stats>
            <div class="value">32</div>
            <div class="type">comments</div>
          </Stats>
        </Cluster>
      </Element>
    </Center>
  );
};

export default RPGCard;
