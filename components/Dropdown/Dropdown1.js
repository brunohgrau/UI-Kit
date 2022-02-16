import React, { useState } from "react";
import styled from "styled-components";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.5rem;
  border: 2px solid black;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  & > span {
    font-size: 0.875rem;
    line-height: 1;
  }

  & > svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
    margin-top: 1px;
  }
`;

const DropContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 10rem;
  margin-top: 0.25rem;
  border: 2px solid black;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const ItemContainer = styled.a`
  display: flex;
  align-items: center;
  height: 2rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: black;
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:hover {
    background-color: rgb(229 231 235);
  }
`;

const Dropdown1 = (props) => {
  const [open, setOpen] = useState(true);
  const clickHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <Center>
        <DropdownContainer>
          <ButtonContainer onClick={clickHandler}>
            <span>{props.buttonText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </ButtonContainer>

          {open ? (
            <DropContainer>
              <ItemContainer
                class="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
                href="#"
              >
                {props.itemText}
              </ItemContainer>
              <ItemContainer
                class="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
                href="#"
              >
                {props.itemText}
              </ItemContainer>
              <ItemContainer
                class="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
                href="#"
              >
                {props.itemText}
              </ItemContainer>
              <ItemContainer
                class="flex items-center h-8 px-3 text-sm hover:bg-gray-200"
                href="#"
              >
                {props.itemText}
              </ItemContainer>
            </DropContainer>
          ) : null}
        </DropdownContainer>
      </Center>
    </>
  );
};

export default Dropdown1;



