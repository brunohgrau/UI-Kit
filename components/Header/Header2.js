import React from "react";
import styled from "styled-components";
import { FaShopify, FaBars, FaShoppingCart } from "react-icons/fa";

const NavbarContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 1rem 1.25rem;
  margin-left: 0;
  margin-right: 0;
  background: rgb(79 70 229);
  @media screen and (min-width: 695px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: rgb(31 41 55);
    &:hover {
      color: rgb(55 65 81);
      transition-duration: 200ms;
    }
  }

  > a > svg {
    font-weight: 700;
    width: 2rem;
    height: 2rem;
  }

  > div > svg {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    color: rgb(31 41 55);
    &:hover {
      color: rgb(55 65 81);
      transition-duration: 200ms;
    }

    @media screen and (min-width: 695px) {
      display: none;
    }
  }
`;

const PrimaryContainer = styled.div`
  align-items: center;
  @media screen and (min-width: 695px) {
    display: flex;
  }

  .links {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 695px) {
      flex-direction: row;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    > a {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      color: rgb(31 41 55);
      &:hover {
        color: white;
        transition-duration: 200ms;
      }

      @media screen and (min-width: 695px) {
        margin-left: 1rem;
      }
    }
  }

  .cart {
    display: flex;
    justify-content:center:  

    
  }

  > div > svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-top: 0.25rem;
    color: rgb(31 41 55);
      &:hover {
        color: white;
        transition-duration: 200ms;
      }
      @media screen and (min-width: 695px) {
        margin-top: 0;
      }
    
  }
`;

const Header2 = () => {
  return (
    <>
      <header>
        <NavbarContainer>
          <LogoContainer>
            <a href="/">
              <FaShopify />
            </a>
            <div>
              <FaBars />
            </div>
          </LogoContainer>
          <PrimaryContainer>
            <div className="links">
              <a> Home</a>
              <a> Shop</a>
              <a> Contact</a>
              <a> About</a>
            </div>
            <div className="cart">
              <FaShoppingCart />
            </div>
          </PrimaryContainer>
        </NavbarContainer>
      </header>
    </>
  );
};

export default Header2;
