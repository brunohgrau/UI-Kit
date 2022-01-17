import React from "react";
import Form1 from "../components/Form/Form1";

export default {
  title: "Sections/Form",
  component: Form1,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Form = ({ label, ...args }) => <Form1 {...args}>{label}</Form1>;
