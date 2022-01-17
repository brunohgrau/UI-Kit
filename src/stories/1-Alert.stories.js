import React from "react";
import Alert1 from "../components/Alert/Alert1";

export default {
  title: "Components/Alert",
  component: Alert1,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Alert = ({ label, ...args }) => <Alert1 {...args}>{label}</Alert1>;
Text.args = {
  label: "Alert"
};
