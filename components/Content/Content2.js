import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 6.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media screen and (min-width: 48rem) {
    padding-left: 12.5rem;
    padding-right: 12.5rem;
  }

  @media screen and (min-width: 64rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    padding-left: 7rem;
    padding-right: 7rem;
  }

  @media screen and (min-width: 90rem) {
    gap: 1.75rem;
    margin-bottom: 5.5rem;
    padding-left: 10.25rem;
    padding-right: 10.25rem;
  }
`;

const CardContainer = styled.div`
  position: relative;
  /* width: 320px; */
  /* height: 440px; */
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
  }

  transition: 0.5s ease;
  cursor: pointer;
`;

// Box

const ImageContainer = styled.div`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  > img {
    background-size: cover;
    width: 100%;
    /* height: 150px;  */
  }
`;

const ContentContainer = styled.div`
  /* Stack */
  display: flex;
  flex-direction: column;
  align-items: center;

  /*   width: 100%;
  height: 210px; */
  padding: 1.5rem;

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

const FooterContainer = styled.div`
  /* Cluster */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* height: 80px; */

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: rgb(14 165 233);
`;

const StatsContainer = styled.div`
  /* Stack */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
  border-left: 1px solid white;
`;

const Content2 = () => {
  return (
    <>
      <SectionContainer>
        <CardContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1634068392184-afee320d6aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=320&q=60" />
          </ImageContainer>
          <ContentContainer>
            <span class="date">4 days ago</span>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </ContentContainer>
          <FooterContainer>
            <StatsContainer>
              <div class="value">
                4<sup>m</sup>
              </div>
              <div class="type">read</div>
            </StatsContainer>
            <StatsContainer>
              <div class="value">5123</div>
              <div class="type">views</div>
            </StatsContainer>
            <StatsContainer>
              <div class="value">32</div>
              <div class="type">comments</div>
            </StatsContainer>
          </FooterContainer>
        </CardContainer>
        <CardContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1634068392184-afee320d6aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=320&q=60" />
          </ImageContainer>
          <ContentContainer>
            <span class="date">4 days ago</span>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </ContentContainer>
          <FooterContainer>
            <StatsContainer>
              <div class="value">
                4<sup>m</sup>
              </div>
              <div class="type">read</div>
            </StatsContainer>
            <StatsContainer>
              <div class="value">5123</div>
              <div class="type">views</div>
            </StatsContainer>
            <StatsContainer>
              <div class="value">32</div>
              <div class="type">comments</div>
            </StatsContainer>
          </FooterContainer>
        </CardContainer>
        <CardContainer>
          <ImageContainer>
            <img src="https://images.unsplash.com/photo-1634068392184-afee320d6aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=320&q=60" />
          </ImageContainer>
          <ContentContainer>
            <span class="date">4 days ago</span>
            <h2>Post One</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
              temporibus omnis illum maxime quod deserunt eligendi dolor
            </p>
          </ContentContainer>
          <FooterContainer>
            <StatsContainer>
              <div class="value">
                4<sup>m</sup>
              </div>
              <div class="type">read</div>
            </StatsContainer>
            <StatsContainer>
              <div class="value">5123</div>
              <div class="type">views</div>
            </StatsContainer>
            <StatsContainer>
              <div class="value">32</div>
              <div class="type">comments</div>
            </StatsContainer>
          </FooterContainer>
        </CardContainer>
      </SectionContainer>
    </>
  );
};

export default Content2;
