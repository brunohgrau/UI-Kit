import React from "react";
import Radio1 from "../components/Radio/Radio1";
import Radio2 from "../components/Radio/Radio2";

export default {
  title: "Atoms/Radio",
  component: Radio1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Radio buttons allow the user to select one option from a set"
      }
    }
  }
};

export const Radio = ({ label, ...args }) => <Radio1 {...args}>{label}</Radio1>;
export const RadioTwo = ({ label, ...args }) => (
  <Radio2 {...args}>{label}</Radio2>
);
