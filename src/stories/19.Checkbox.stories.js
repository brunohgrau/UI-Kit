import React from "react";
import Checkbox1 from "../components/Checkbox/Checkbox1";
import Checkbox2 from "../components/Checkbox/Checkbox2";

export default {
  title: "Atoms/Checkbox",
  component: Checkbox1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          " is a control that allows the user to select a binary “checked” state, either checked or unchecked"
      }
    }
  }
};

export const Checkbox = ({ label, ...args }) => (
  <Checkbox1 {...args}>{label}</Checkbox1>
);

export const CheckboxTwo = ({ label, ...args }) => (
  <Checkbox2 {...args}>{label}</Checkbox2>
);
