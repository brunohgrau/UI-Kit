import React from "react";
import styled from "styled-components";

const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: hsl(204, 8%, 76%);
  height: 120px;
  width: 262px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 1rem;
`;

const Thumbnail = styled.img`
  width: auto;
  height: 100%;
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`;

const ItemLink = styled.a`
  text-decoration: none;
`;

function BookCard(props) {
  return (
    <ItemLink>
      <ItemContainer>
        <Thumbnail src={props.image} />
        <h1>{props.header} </h1>
        <p> {props.paragraph} </p>
      </ItemContainer>
    </ItemLink>
  );
}

export default BookCard;
