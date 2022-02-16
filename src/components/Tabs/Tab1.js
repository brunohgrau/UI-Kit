import React from "react";
import styled from "styled-components";

const Center = styled.div`
  padding: 10rem;
`;

const TabContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(229 231 235);
`;

const ButtonContainer = styled.button`
  /* class="text-gray-700 border-b-2 
 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none 
 " */

  height: 2.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  background-color: transparent;
  margin-bottom: -1px;
  white-space: nowrap;
  border-color: transparent;
  &:hover {
    border-bottom: 2px solid rgb(156 163 175);
  }
`;

function Tabs1(props) {
  return (
    <Center>
      <TabContainer>
        <ButtonContainer>Profile</ButtonContainer>
        <ButtonContainer>Account</ButtonContainer>
        <ButtonContainer>Notifiaction</ButtonContainer>
      </TabContainer>
    </Center>
  );
}

export default Tabs1;
