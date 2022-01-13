import React from "react";
import styled from "styled-components";

// Wrapper
const FooterWrapper = styled.footer`
  /* typography */
  color: rgb(55 65 81);
`;
const DivWrapper = styled.div`
  /* display */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box model */
  padding: 2rem 1.25rem;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  /* manipulation */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    justify-content: start;
  }
`;

// Container
const LinkContainer = styled.a`
  /* display */
  display: flex;
  align-items: center;
  justify-content: center;
  /* typography */
  font-weight: 500;
  color: rgb(55 65 81);
  /* manipulation */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: start;
  }
`;

const ParagraphContainer = styled.p`
  /* box model */
  margin-top: 1rem;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(0 0 0);
  /* manipulation */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 1rem;
    padding-left: 1rem;
  }
  /* misc */
  text-decoration: none;
  border-left-width: 2px;
  border-color: rgb(209 213 219);
  padding: 0.5rem 0;
`;

const SpanContainer = styled.span`
  /* display */
  display: flex;
  align-items: center;
  justify-content: center;
  /* box model */
  margin-top: 1rem;
  /* manipulation */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 0px;
    justify-content: center;
  }
`;

// Secondary
const StyledSVG = styled.svg`
  /* box model */
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  background-color: rgb(99 102 241);
  /* typography */
  color: rgb(255 255 255);
  /* misc */
  border-radius: 9999px;
`;

const StyledSpan = styled.span`
  margin-left: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

const ParagraphLink = styled.a`
  margin-left: 0.25rem;
  color: rgb(55 65 81);
`;
const SpanLink = styled.a`
  color: rgb(55 65 81);
`;

const SpanSVG = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
`;

// Utils

const Footer1 = () => {
  return (
    <>
      <FooterWrapper>
        <DivWrapper>
          <LinkContainer>
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </StyledSVG>
            <StyledSpan>Tailblocks</StyledSpan>
          </LinkContainer>
          <ParagraphContainer>
            © 2020 Tailblocks —
            <ParagraphLink
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              target="_blank"
            >
              @developer
            </ParagraphLink>
          </ParagraphContainer>
          <SpanContainer>
            <SpanLink>
              <SpanSVG
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </SpanSVG>
            </SpanLink>
            <SpanLink>
              <SpanSVG
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </SpanSVG>
            </SpanLink>
            <SpanLink>
              <SpanSVG
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </SpanSVG>
            </SpanLink>
            <SpanLink>
              <SpanSVG
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </SpanSVG>
            </SpanLink>
          </SpanContainer>
        </DivWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer1;
