import React from "react";
import styled from "styled-components";

const Parent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1;
`;

const SidebarBox = styled.div`
  background: yellow;
  flex-basis: 20rem;
  flex-grow: 1;
`;

const NonSidebarBox = styled.div`
  background: blue;
  flex-basis: 0;
  flex-grow: 999;
  min-width: 50%;
`;

const Sidebar = () => {
  return (
    <>
      <Parent>
        <SidebarBox>Sidebar</SidebarBox>
        <NonSidebarBox>Non Sidebar</NonSidebarBox>
      </Parent>
    </>
  );
};

export default Sidebar;
