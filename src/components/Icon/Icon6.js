import React from "react";
import styled from "styled-components";
import { Map, Save, ShoppingCart } from "react-feather";

const GroupWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  margin: 160px auto;
`;

const IconButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: white;
  border-radius: 8px;
  border: 2px solid hsl(0deg 0% 80%);
  width: 90px;
  height: 90px;
`;

const Icon = styled.span`
  display: block;
  color: ${(props) => props.isCurrent && "deeppink"};
`;

const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
`;

function IconButton({ icon, children, isCurrent, ...delegated }) {
  return (
    <>
      <IconButtonWrapper {...delegated}>
        <Icon isCurrent={isCurrent}>{icon}</Icon>
        <Text> {children} </Text>
      </IconButtonWrapper>
    </>
  );
}

function Icon6() {
  return (
    <GroupWrapper>
      <IconButton isCurrent icon={<Map />}>
        Navigation
      </IconButton>
      <IconButton icon={<Save />}>Save Route</IconButton>
      <IconButton icon={<ShoppingCart />}>View Cart</IconButton>
    </GroupWrapper>
  );
}

export default Icon6;
