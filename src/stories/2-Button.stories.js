import React from "react";
import IconButton from "../components/Button/IconButton";
import OutlineButton from "../components/Button/OutlineButton";
import PrimaryButton from "../components/Button/PrimaryButton";

export default {
  title: "Components/Buttons",
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: " A Button  is used to trigger an action or event"
      }
    }
  }
};

const Template = (args) => <PrimaryButton {...args} />;
export const Primary1 = Template.bind({});
Primary1.args = {
  buttonColor: "#00baff",
  hoverColor: "#09a4e6",
  borderRadius: "0.375rem",
  fontSize: "1.125rem"
};

const Template2 = (args) => <IconButton {...args} />;
export const Icon = Template2.bind({});
Icon.args = {
  hoverColor: "black",
  buttonColor: "#09a4e6",
  borderRadius: "0.375rem",
  fontSize: "1.125rem",
  textColor: "white"
};

const Template3 = (args) => <OutlineButton {...args} />;
export const Outline = Template3.bind({});
Outline.args = {
  buttonColor: "#00baff",
  hoverColor: "gray",
  borderRadius: "0.375rem",
  fontSize: "1.125rem"
};
