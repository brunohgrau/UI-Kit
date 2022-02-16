import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  /*   padding: 5rem 1.25rem; */
  margin-left: auto;
  margin-right: auto;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  padding: 1rem;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid rgb(209 213 219);
  overflow: hidden;

  & > h2 {
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.1em;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  & > h1 {
    font-size: 3rem;
    line-height: 1;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom-width: 1px;
    border-color: rgb(229 231 235);
    line-height: 1;
  }

  & > p {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & > span {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      display: inline-flex;
      align-itens: center;
      justify-content: center;
      background-color: rgb(156 163 175);
      color: rgb(255 255 255);
      border-radius: 9999px;
      flex-shrink: 0;
    }

    & > span > svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

const Content3 = () => {
  return (
    <>
      <SectionContainer>
        <CardsContainer>
          <CardContainer>
            <h2>START</h2>
            <h1>Free</h1>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p>
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
          </CardContainer>
          <CardContainer>
            <h2>START</h2>
            <h1>Free</h1>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p>
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
          </CardContainer>
          <CardContainer>
            <h2>START</h2>
            <h1>Free</h1>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p>
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
          </CardContainer>
          <CardContainer>
            <h2>START</h2>
            <h1>Free</h1>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Vexillologist pitchfork
            </p>
            <p>
              <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  class="w-3 h-3"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Tumeric plaid portland
            </p>
            <p>
              <span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              Mixtape chillwave tumeric
            </p>
          </CardContainer>
        </CardsContainer>
      </SectionContainer>
    </>
  );
};

export default Content3;
