import React from "react";
import styled from "styled-components";

/* designed to wrap your entire app */
const AppBoundary = styled.div`
  padding: 0;
  max-width: 100%;
  overflow: hidden;
  height: 100%;
`;

const ColumnDrop = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1;
  flex-basis: 1;
  flex-grow: 1;
  flex-shrink: 1;
`;
