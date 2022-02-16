import React from "react";
import styled from "styled-components";
import { FaShopify } from "react-icons/fa";
import { FaTablet } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavbarContainer = styled.div`
  padding: 1rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  font-family: "Montserrat", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;

  > a {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding: 0.5rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    line-height: 1.625;
    color: rgb(0 0 0);
    text-transform: uppercase;
    white-space: nowrap;
    text-decoration: none;
  }

  > a > svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  > a > span {
    margin-left: 1rem;
    font-weight: 700;
    color: rgb(55 65 81);
  }
`;

const PrimaryContainer = styled.nav`
  display: none;
  justify-content: space-around;
  margin-right: auto;
  margin-left: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  @media screen and (min-width: 695px) {
    display: flex;
  }
  border-left-width: 1px;
  border-color: rgb(209 213 219);

  > a {
    display: flex;
    align-items: center;
    margin-right: 1.25rem;
  }

  > a > span {
    margin-left: 0.25rem;
  }

  > a > svg {
    height: 1rem;
    width: 1rem;
  }
`;
const SocialContainer = styled.div`
  display: none;
  align-items: center;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  @media screen and (min-width: 695px) {
    display: flex;
  }
  border-width: 0px;

  > a {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    padding: 0.5rem 0;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(0 0 0);
    font-weight: 700;
    text-transform: uppercase;
    white-space: nowrap;
  }

  > a > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const HamburgerButtonContainer = styled.button`
  /*   className=" 
                  rounded lg:outline-none focus:outline-none"
                
 */

  /* display */
  display: block;
  /* position */
  /* box model */
  padding: 0.25rem 0.75rem;
  background: rgb(255 255 255);
  /* typography */
  font-size: 1.25rem;
  line-height: 1;
  /* manipulation */
  @media screen and (min-width: 695px) {
    display: none;
  }
  /* misc */
  cursor: pointer;
  border: none;
`;

const Header1 = () => {
  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <a href="/">
            <FaShopify />
            <span> IT Shop</span>
          </a>
        </LogoContainer>
        <PrimaryContainer>
          <a>
            <FaTablet />
            <span> Tablets </span>
          </a>
          <a>
            <FaLaptop />
            <span> Laptop</span>
          </a>
        </PrimaryContainer>
        <SocialContainer>
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
        </SocialContainer>
        <HamburgerButtonContainer>
          <FaBars />
        </HamburgerButtonContainer>
      </NavbarContainer>
    </>
  );
};

export default Header1;
