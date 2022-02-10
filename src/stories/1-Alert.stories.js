import React from "react";
import Alert1 from "../components/Alert/Alert1";

export default {
  title: "Components/Alert",
  component: Alert1,
  parameters: {
    docs: {
      description: {
        component:
          " Alerts are used to communicate a state that affects a system, feature or page."
      }
    }
  }
};

const Template = (args) => <Alert1 {...args} />;
export const Alert = Template.bind({});
Alert.args = {
  title: "Title",
  description: "Description",
  titleSize: "1rem",

  spacing: "1rem",
  borderRadius: "1rem",
  svgColor: "#00baff",
  titleColor: "#00baff",
  descriptionColor: "#00baff"
};
