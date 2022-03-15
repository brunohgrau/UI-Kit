import React from "react";
import Form1 from "../components/Form/Form1";
import Form2 from "../components/Form/Form2";
import Form3 from "../components/Form/Form3";
import Form4 from "../components/Form/Form4";
import Form5 from "../components/Form/Form5";

export default {
  title: "Molecules/Form",
  component: Form1
};

const Template = (args) => <Form1 {...args} />;
export const FormOne = Template.bind({});
FormOne.args = {};

const Template2 = (args) => <Form2 {...args} />;
export const FormTwo = Template2.bind({});
FormTwo.args = {};

const Template3 = (args) => <Form3 {...args} />;
export const FormThree = Template3.bind({});
FormThree.args = {};

const Template4 = (args) => <Form4 {...args} />;
export const FormFour = Template4.bind({});
FormFour.args = {};

const Template5 = (args) => <Form5 {...args} />;
export const FormFive = Template5.bind({});
