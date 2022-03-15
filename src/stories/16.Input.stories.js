import React from "react";
import Input1 from "../components/Input/Input1";
import Input2 from "../components/Input/Input2";
import Input3 from "../components/Input/Input3";

export default {
  title: "Atoms/Inputs",
  component: Input1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Inputs area used..."
      }
    }
  }
};

const Template = (args) => <Input1 {...args} />;
export const Input = Template.bind({});
Input.args = {};

const Template2 = (args) => <Input2 {...args} />;
export const InputTwo = Template2.bind({});
InputTwo.args = {};

const Template3 = (args) => <Input3 {...args} />;
export const InputThree = Template3.bind({});
InputThree.args = {};
