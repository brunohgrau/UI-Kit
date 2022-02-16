import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import Welcome1 from "../components/Welcome/Welcome1";

export default {
  title: "Welcome",
  component: Welcome1
};

export const ToStorybook = () => <Welcome1 />;

ToStorybook.story = {
  name: "to Storybook"
};

