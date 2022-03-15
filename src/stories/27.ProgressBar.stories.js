import React from "react";
import ProgressBar1 from "../components/ProgressBar/ProgressBar1";

export default {
  title: "Atoms/ProgressBar",
  component: ProgressBar1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "ProgressBar .."
      }
    }
  }
};

export const ProgressBar = ({ label, ...args }) => (
  <ProgressBar1 {...args}>{label}</ProgressBar1>
);
