import React from "react";
import Skeleton1 from "../components/Skeleton/Skeleton1";

export default {
  title: "Molecules/Skeleton",
  component: Skeleton1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Provides a placeholder while you wait for content to load, or to visualise content that doesn't exist yet."
      }
    }
  }
};

export const Skeleton = ({ label, ...args }) => (
  <Skeleton1 {...args}>{label}</Skeleton1>
);
