import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
import "../reset.css";

const Box = styled.div`
  padding: 2rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Center = styled.div`
  text-align: center;

  > a {
    /*     class=" hover:text-gray-700 " */
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    color: rgb(55 65 81);

    &:hover {
      color: rgb(107 114 128);
    }
  }

  > p {
    max-width: 28rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    color: rgb(107 114 128);
  }
`;

const Cluster = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 500px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  /* box model */
  padding: 0.5rem 1rem;
  background-color: rgb(37 99 235);
  /* typography */
  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: rgb(255 255 255);

  /* manipulation */
  &:hover {
    background-color: rgb(59 130 246);
  }

  &:focus {
    outline: 3px solid rgb(59 130 246);
    outline-offset: 2px;
    /* outline-opacity: 0.6; */
  }

  /* misc */
  border-radius: 0.375rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Footer3 = () => {
  return (
    <>
      <footer class="bg-white dark:bg-gray-800">
        <Box>
          <Center>
            <a href="#">Brand</a>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <Cluster>
              <Button>Button</Button>
              <Button>Button</Button>
            </Cluster>
          </Center>

          <hr class="my-10 border-gray-200 dark:border-gray-700" />

          <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-gray-400">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="#"
                class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Teams{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Privacy{" "}
              </a>

              <a
                href="#"
                class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Reddit"
              >
                {" "}
                Cookies{" "}
              </a>
            </div>
          </div>
        </Box>
      </footer>
    </>
  );
};

export default Footer3;
