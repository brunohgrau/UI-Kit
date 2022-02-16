import React from "react";
import styled from "styled-components";
import { FaShopify, FaBars, FaBell } from "react-icons/fa";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 1.25rem;
  margin-left: 0;
  margin-right: 0;
  font-family: "Montserrat", sans-serif;
  @media screen and (min-width: 695px) {
    flex-direction: row;
  }
`;

const PrimaryContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  font-size: 1rem;
  line-height: 1.5rem;
  @media screen and (min-width: 695px) {
    margin-left: auto;
  }
  @media screen and (min-width: 834px) {
    width: 40%;
  }

  > a {
    cursor: pointer;
    color: rgb(31 41 55);
    &:hover {
      color: rgb(55 65 81);
      transition-duration: 200ms;
    }
    margin-left: 0.5rem;
    @media screen and (min-width: 834px) {
      margin-right: 1.25rem;
    }
  }
`;
const LogoContainer = styled.a`
  /*  text-gray-900   */
  display: flex;
  order: -9999;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;
  color: rgb(31 41 55);
  &:hover {
    color: rgb(55 65 81);
    transition-duration: 200ms;
  }

  @media screen and (min-width: 695px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 834px) {
    order: 0;
    width: 20%;
    align-items: center;
    justify-content: center;
  }

  > span {
    margin-left: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const ButtonContainer = styled.div`
  display: inline-flex;
  margin-left: 1.25rem;
  margin-top: 0.5rem;

  @media screen and (min-width: 695px) {
    margin-top: 0;
  }
  @media screen and (min-width: 834px) {
    width: 40%;
    justify-content: end;
    margin-left: 0;
  }
`;
const Button = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: rgb(37 99 235);

  font-size: 1.125rem;
  line-height: 1.75rem;
  letter-spacing: 0.025em;
  color: rgb(255 255 255);
  &:hover {
    background-color: rgb(59 130 246);
  }
  &:focus {
    outline: 3px solid rgb(59 130 246);
    outline-offset: 2px;
  }
  border-radius: 0.375rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Header3 = () => {
  return (
    <>
      <header>
        <NavbarContainer>
          <PrimaryContainer>
            <a> Home </a>
            <a> About </a>
            <a> Contact </a>
            <a> Link </a>
          </PrimaryContainer>
          <LogoContainer>
            <FaShopify />
            <span> Shop </span>
          </LogoContainer>
          <ButtonContainer>
            <Button>Button</Button>
          </ButtonContainer>
        </NavbarContainer>
      </header>
    </>
  );
};

export default Header3;
