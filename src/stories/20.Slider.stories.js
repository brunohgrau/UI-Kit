import React from "react";
import Slider1 from "../components/Slider/Slider1";
import Slider2 from "../components/Slider/Slider2";

export default {
  title: "Atoms/Slider",
  component: Slider1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component:
          "A Slider component for displaying current value and intervals in range."
      }
    }
  }
};

export const Slider = ({ label, ...args }) => (
  <Slider1 {...args}>{label}</Slider1>
);

export const SliderTwo = ({ label, ...args }) => (
  <Slider2 {...args}>{label}</Slider2>
);
