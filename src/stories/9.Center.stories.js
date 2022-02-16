import React from "react";
import Center from "../components/Center/Center";

export default {
  title: "Primitives/Center",
  component: Center,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Center is a layout component that centers its child within itself."
      }
    }
  }
};

const Template = ({ numberOfChildren, ...args }) => (
  <Center {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "rgb(17 99 235)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.375rem"
        }}
      >
        {n + 1}
      </div>
    ))}
  </Center>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false
};

/* export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false
};
 */
