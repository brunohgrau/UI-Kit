import React from "react";
import styled from "styled-components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin
} from "react-icons/fa";
import "../reset.css";

// Wrapper

const Wrapper = styled.footer`
  background-color: rgb(14 165 233);
  padding: 70px;
  font-family: "Lato", sans-serif;
  line-height: 1.5rem;
`;

// Container

const FooterContainer = styled.div`
  max-width: 1170px;
  margin: auto;
`;
const RowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ColContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  @media (min-width: 500px) {
    width: 50%;
    margin-bottom: 30px;
  }

  @media (min-width: 1110px) {
    width: 25%;
    padding: 0 15px;
  }
`;

// Secondary

const StyledHeader = styled.h4`
  font-size: 1.25rem;
  color: #ffffff;
  text-transform: captilize;
  margin-bottom: 2rem;
  font-weight: 500;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: rgb(0 0 0);
    height: 2px;
    box-sizing: border-box;
    width: 50px;
  }
`;

const StyledListItem = styled.li`
  margin-bottom: 0.75rem;
`;

const StyledLink = styled.a`
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;

  display: block;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #bbbbbb;
    padding-left: 8px;
  }
`;

const StyledSocialLinks = styled.div`
  display: inline-block;
  height: 2rem;
  width: 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;

  &:hover {
    color: #24262b;
    background-color: #ffffff;
  }
`;

const Footer1 = () => {
  return (
    <>
      <Wrapper>
        <FooterContainer>
          <RowContainer>
            <ColContainer>
              <StyledHeader>Company</StyledHeader>
              <ul>
                <StyledListItem>
                  <StyledLink href="#">about us</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">our services</StyledLink>
                </StyledListItem>

                <StyledListItem>
                  <StyledLink href="#">affiliate program</StyledLink>
                </StyledListItem>
              </ul>
            </ColContainer>
            <ColContainer>
              <StyledHeader>Get Help</StyledHeader>
              <ul>
                <StyledListItem>
                  <StyledLink href="#">FAQ</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">shipping</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">returns</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">order status</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">payment options</StyledLink>
                </StyledListItem>
              </ul>
            </ColContainer>
            <ColContainer>
              <StyledHeader>Online Shop</StyledHeader>
              <ul>
                <StyledListItem>
                  <StyledLink href="#">watch</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">bag</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">shoes</StyledLink>
                </StyledListItem>
                <StyledListItem>
                  <StyledLink href="#">dress</StyledLink>
                </StyledListItem>
              </ul>
            </ColContainer>
            <ColContainer>
              <StyledHeader>Follow Us </StyledHeader>
              <div>
                <StyledSocialLinks href="">
                  <FaFacebookSquare />
                </StyledSocialLinks>
                <StyledSocialLinks href="">
                  <FaTwitterSquare />
                </StyledSocialLinks>
                <StyledSocialLinks href="">
                  <FaInstagramSquare />
                </StyledSocialLinks>
                <StyledSocialLinks href="">
                  <FaLinkedin />
                </StyledSocialLinks>
              </div>
            </ColContainer>
          </RowContainer>
        </FooterContainer>
      </Wrapper>
    </>
  );
};

export default Footer1;
