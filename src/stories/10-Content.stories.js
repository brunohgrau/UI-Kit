import React from "react";
import Content1 from "../components/Content/Content1";
import Content2 from "../components/Content/Content2";
import Content3 from "../components/Content/Content3";

export default {
  title: "Organisms/Content",
  component: Content1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen"
  }
};

export const ContentOne = ({ label, ...args }) => (
  <Content1 {...args}>{label}</Content1>
);

export const ContentTwo = ({ label, ...args }) => (
  <Content2 {...args}>{label}</Content2>
);

export const ContentThree = ({ label, ...args }) => (
  <Content3 {...args}>{label}</Content3>
);
