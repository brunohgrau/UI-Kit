import React from "react";
import Dropdown1 from "../components/Dropdown/Dropdown1";

export default {
  title: "Components/Dropdown",
  component: Dropdown1,
  parameters: {
    docs: {
      description: {
        component:
          "A dropdown allows a user to select a value from a series of options"
      }
    },
    argTypes: { onClick: { action: "clicked" } }
  }
};

const Template = (args) => <Dropdown1 {...args} onClick />;
export const Dropdown = Template.bind({});
Dropdown.args = {
  buttonText: "Dropdown",
  itemText: "Item"
};
