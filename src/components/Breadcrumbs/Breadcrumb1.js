import React from "react";
import styled from "styled-components";

const Center = styled.div`
  padding: 10rem;
`;

const BreadcrumbContainer = styled.div`
  /* class="  py-4 overflow-y-auto whitespace-nowrap" */

  display: flex;
  align-items: center;
`;

const LinkContainer = styled.a`
  color: rgb(75 85 99);
  & > svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  &:hover {
    text-decoration-line: underline;
  }
`;

const SpanContainer = styled.span`
  /* class="text-gray-500  */
  margin-left: 1.25rem;
  margin-right: 1.25rem;
`;

function Breadcrumb1(props) {
  return (
    <Center>
      <BreadcrumbContainer>
        <LinkContainer href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </LinkContainer>

        <SpanContainer>/</SpanContainer>

        <LinkContainer href="#">Account</LinkContainer>

        <SpanContainer>/</SpanContainer>

        <LinkContainer
          href="#"
          class="text-gray-600 dark:text-gray-200 hover:underline"
        >
          Profile
        </LinkContainer>

        <SpanContainer>/</SpanContainer>

        <LinkContainer
          href="#"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Settings
        </LinkContainer>
      </BreadcrumbContainer>
    </Center>
  );
}

export default Breadcrumb1;
