import React from "react";

import Stack from "../components/Stack/Stack";

export default {
  title: "Primitives/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 }
  }
};

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
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
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 2,
  wrap: false
};

export const WrapOverflow = Template.bind({});
WrapOverflow.args = {
  numberOfChildren: 40,
  direction: "row",
  spacing: 2,
  wrap: true
};
