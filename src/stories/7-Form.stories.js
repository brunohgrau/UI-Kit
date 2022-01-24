import React from "react";
import Form1 from "../components/Form/Form1";
import Form2 from "../components/Form/Form2";
import Form3 from "../components/Form/Form3";

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

export const FormTwo = ({ label, ...args }) => <Form2 {...args}>{label}</Form2>;

export const FormThree = ({ label, ...args }) => (
  <Form3 {...args}>{label}</Form3>
);
