import React from "react";
import styled from "styled-components";
import { FaShopify } from "react-icons/fa";
import { yellow, purple } from "../../utils";

const IconContainer = styled.div`
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
    color: ${yellow[200]};
    text-transform: uppercase;
    white-space: nowrap;
    text-decoration: none;
  }

  > a > svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  > a > span {
    margin-left: 0.5rem;
    font-weight: 700;
    color: ${purple[200]};
  }
`;

function Icon1(props) {
  return (
    <>
      <IconContainer>
        <a href="/">
          <FaShopify />
          <span> IT Shop</span>
        </a>
      </IconContainer>
    </>
  );
}

export default Icon1;
