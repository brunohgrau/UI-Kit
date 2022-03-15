import React from "react";
import Avatar1 from "../components/Avatar/Avatar1";
import Avatar2 from "../components/Avatar/Avatar2";

export default {
  title: "Atoms/Avatar",
  component: Avatar1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Avatars can be used to represent people or objects. "
      }
    }
  }
};

export const Avatar = ({ label, ...args }) => (
  <Avatar1 {...args}>{label}</Avatar1>
);

export const BadgeAvatar = ({ label, ...args }) => (
  <Avatar2 {...args}>{label}</Avatar2>
);
