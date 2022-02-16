import React from "react";
import Alert1 from "../components/Alert/Alert1";

export default {
  title: "Components/Alert",
  component: Alert1,
  parameters: {
    docs: {
      description: {
        component:
          "An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task."
      }
    }
  }
};

const Template = (args) => <Alert1 {...args} />;
export const Alert = Template.bind({});
Alert.args = {
  title: "Title",
  description: "Description",
  spacing: "1rem",
  borderRadius: "1rem"
};
