import React from "react";
import Spinner1 from "../components/Spinners/Spinner1";

export default {
  title: "Atoms/Spinner",
  component: Spinner1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "Spinner .."
      }
    }
  }
};

export const Spinner = ({ label, ...args }) => (
  <Spinner1 {...args}>{label}</Spinner1>
);
