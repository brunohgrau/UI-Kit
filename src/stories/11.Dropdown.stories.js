import React from "react";
import Dropdown1 from "../components/Dropdown/Dropdown1";
import Dropdown2 from "../components/Dropdown/Dropdown2";

export default {
  title: "Molecules/Dropdown",
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

const Template2 = (args) => <Dropdown2 {...args} onClick />;
export const DropdownTwo = Template2.bind({});
