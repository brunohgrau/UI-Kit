import React from "react";
import Sidebar1 from "../components/Sidebar/Sidebar1";

export default {
  title: "Organisms/Sidebar",
  component: Sidebar1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "ProgressBar .."
      }
    }
  }
};

export const Sidebar = ({ label, ...args }) => (
  <Sidebar1 {...args}>{label}</Sidebar1>
);
