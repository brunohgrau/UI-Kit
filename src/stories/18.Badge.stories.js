import React from "react";
import Badge1 from "../components/Badge/Badge1";
import Badge2 from "../components/Badge/Badge2";

export default {
  title: "Atoms/Badge",
  component: Badge1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Badge is a small numerical value or status descriptor for UI elements."
      }
    }
  }
};

export const Badge = ({ label, ...args }) => <Badge1 {...args}>{label}</Badge1>;
export const BadgeTwo = ({ label, ...args }) => (
  <Badge2 {...args}>{label}</Badge2>
);
