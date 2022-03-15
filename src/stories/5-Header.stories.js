import React from "react";
import Header1 from "../components/Header/Header1";
import Header2 from "../components/Header/Header2";
import Header3 from "../components/Header/Header3";
import Header4 from "../components/Header/Header4";

export default {
  title: "Organisms/Header",
  component: Header1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Navigation Header"
      }
    }
  }
};

export const Header = ({ label, ...args }) => (
  <Header1 {...args}>{label}</Header1>
);

export const HeaderTwo = ({ label, ...args }) => (
  <Header2 {...args}>{label}</Header2>
);

export const HeaderThree = ({ label, ...args }) => (
  <Header3 {...args}>{label}</Header3>
);

export const HeaderFour = ({ label, ...args }) => (
  <Header4 {...args}>{label}</Header4>
);
