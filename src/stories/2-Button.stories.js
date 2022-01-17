import React from "react";
import IconButton from "../components/Button/IconButton";
import OutlineButton from "../components/Button/OutlineButton";
import PrimaryButton from "../components/Button/PrimaryButton";

export default {
  title: "Components/Button",
  component: IconButton,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Icon = ({ label, ...args }) => (
  <IconButton {...args}>{label}</IconButton>
);
Text.args = {
  label: "Button"
};

export const Outline = ({ label, ...args }) => (
  <OutlineButton {...args}>{label}</OutlineButton>
);
Text.args = {
  label: "Button"
};

export const Primary = ({ label, ...args }) => (
  <PrimaryButton {...args}>{label}</PrimaryButton>
);
Text.args = {
  label: "Button"
};
