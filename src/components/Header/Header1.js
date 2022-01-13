import React from "react";
import styled from "styled-components";
import { FaShopify } from "react-icons/fa";
import { FaTablet } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

// Wrapper
const SectionWrapper = styled.section`
  /* box model */
  padding: 1rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  /*   typography */
  font-family: "Montserrat", sans-serif;
`;
//Container
const NavbarContainer = styled.div`
  /* display */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box model */
  height: 1.5rem;
`;

const PrimaryContainer = styled.nav`
  /* display */
  display: none;
  justify-content: space-around;
  /* box model */
  margin-right: auto;
  margin-left: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  /* manipulation */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
  /* misc */
  border-left-width: 1px;
  border-color: rgb(209 213 219);
`;
const SocialContainer = styled.div`
  /* class=" hidden md:block " */

  /* display */
  display: none;
  align-items: center;
  /* box model */
  padding: 0.25rem 0.75rem;
  /* typography */
  font-size: 1rem;
  line-height: 1.5rem;

  /* manipulation */
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }

  /* misc */
  border-width: 0px;
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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
  /* misc */
  cursor: pointer;
  border: none;
`;

//Secondary
const StyledLink = styled.a`
  /* display */
  display: flex;
  align-items: center;
  /* box model */
  margin-right: 1rem;
  padding: 0.5rem 0;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  line-height: 1.625;
  color: rgb(0 0 0);
  text-transform: uppercase;
  white-space: nowrap;
  /* misc */
  text-decoration: none;
`;

const StyledSpan = styled.span`
  /* box model */
  margin-left: 1rem;
  /* typography */
  font-weight: 700;
  color: rgb(55 65 81);
`;

const PrimaryContainerLink = styled.a`
  /* class="hover:text-gray-900   cursor-pointer" */
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
`;
const PrimaryContainerSpan = styled.span`
  margin-left: 0.25rem;
`;

const SocialContainerLink = styled.a`
  /*   class=" leading-relaxed inline-block
           " */

  /* display */
  display: flex;
  align-items: center;

  /* position */
  /* box model */
  margin-right: 1rem;
  padding: 0.5rem 0;
  /* typography */
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(0 0 0);
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  /* manipulation */
  /* misc */
`;

// utils

const StyledFlex = styled.div`
  display: flex;
`;

const Header1 = () => {
  return (
    <>
      <SectionWrapper>
        <NavbarContainer>
          <StyledFlex>
            <StyledLink href="/">
              <FaShopify style={{ height: "1.5rem", width: "1.5rem" }} />
              <StyledSpan> IT Shop</StyledSpan>
            </StyledLink>
          </StyledFlex>
          <PrimaryContainer>
            <PrimaryContainerLink>
              <FaTablet
                style={{
                  height: "1rem",
                  width: "1rem"
                }}
              />
              <PrimaryContainerSpan> Tablets </PrimaryContainerSpan>
            </PrimaryContainerLink>
            <PrimaryContainerLink>
              <FaLaptop
                style={{
                  height: "1rem",
                  width: "1rem"
                }}
              />
              <PrimaryContainerSpan> Laptop</PrimaryContainerSpan>
            </PrimaryContainerLink>
          </PrimaryContainer>
          <SocialContainer>
            <StyledFlex>
              <SocialContainerLink href="/">
                <FaFacebook style={{ height: "1.5rem", width: "1.5rem" }} />
              </SocialContainerLink>
              <SocialContainerLink href="/">
                <FaTwitter style={{ height: "1.5rem", width: "1.5rem" }} />
              </SocialContainerLink>
            </StyledFlex>
          </SocialContainer>
          <HamburgerButtonContainer>
            <FaBars />
          </HamburgerButtonContainer>
        </NavbarContainer>
      </SectionWrapper>
    </>
  );
};

export default Header1;
