import React from "react";
import Icon1 from "../components/Icon/Icon1";
import Icon2 from "../components/Icon/Icon2";
import Icon3 from "../components/Icon/Icon3";
import Icon4 from "../components/Icon/Icon4";
import Icon5 from "../components/Icon/Icon5";
import Icon6 from "../components/Icon/Icon6";

export default {
  title: "Atoms/Icon",
  component: Icon1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "An icon is a glyph used to represent something else"
      }
    }
  }
};

export const Icon = ({ label, ...args }) => <Icon1 {...args}>{label}</Icon1>;
export const IconTwo = ({ label, ...args }) => <Icon2 {...args}>{label}</Icon2>;
export const IconThree = ({ label, ...args }) => (
  <Icon3 {...args}>{label}</Icon3>
);
export const IconFour = ({ label, ...args }) => (
  <Icon4 {...args}>{label}</Icon4>
);
export const IconFive = ({ label, ...args }) => (
  <Icon5 {...args}>{label}</Icon5>
);

export const IconSix = ({ label, ...args }) => <Icon6 {...args}>{label}</Icon6>;
