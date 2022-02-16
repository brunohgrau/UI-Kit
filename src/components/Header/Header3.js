import React from "react";
import styled from "styled-components";
import { FaShopify, FaBars, FaBell } from "react-icons/fa";

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
  flex: 1 1 0;

  @media screen and (min-width: 695px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .links {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 695px) {
      flex-direction: row;
      align-items: center;
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }

  .links > a {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(55 65 81);
    border-radius: 0.375rem;
    margin-top: 0.5rem;

    @media screen and (min-width: 695px) {
      margin-top: 0;
      padding: 0.25rem 0.5rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      &:hover {
        background-color: white;
      }
    }
  }

  .social {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    @media screen and (min-width: 695px) {
      margin-top: 0;
    }
  }

  .button1 {
    display: none;
    margin-left: 1rem;
    margin-right: 1rem;
    background: rgb(79 70 229);
    color: rgb(75 85 99);
    border-width: 0;
    &:hover {
      color: rgb(55 65 81);
    }
    &:focus {
      outline-width: 0px;
    }
    @media screen and (min-width: 695px) {
      display: block;
    }
    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  .button2 {
    display: flex;
    align-items: center;
    background: rgb(79 70 229);
    border-width: 0;
    &:focus {
      outline-width: 0px;
    }

    > div {
      width: 2rem;
      height: 2rem;
      overflow: hidden;
      border-width: 2px;
      border-radius: 9999px;
      border-color: rgb(156 163 175);

      > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    > h3 {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;

      @media screen and (min-width: 695px) {
        display: none;
      }
    }
  }
`;

const Header3 = () => {
  return (
    <>
      <header>
        <NavbarContainer>
          <LogoContainer>
            <a>
              <FaShopify />
            </a>
            <div>
              <FaBars />
            </div>
          </LogoContainer>
          <PrimaryContainer>
            <div className="links">
              <a> Home</a>
              <a> About </a>
              <a> Contact </a>
            </div>
            <div className="social">
              <button className="button1">
                <FaBell />
              </button>
              <button className="button2">
                <div>
                  <img src="https://images.unsplash.com/photo-1642764984350-720712c60754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <h3> User Name </h3>
              </button>
            </div>
          </PrimaryContainer>
        </NavbarContainer>
      </header>
    </>
  );
};

export default Header3;
