import React from "react";
import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2";
import Footer3 from "../components/Footer/Footer3";

export default {
  title: "Components/Footer",
  component: Footer1,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Footer = ({ label, ...args }) => (
  <Footer1 {...args}>{label}</Footer1>
);

export const FooterTwo = ({ label, ...args }) => (
  <Footer2 {...args}>{label}</Footer2>
);

export const FooterThree = ({ label, ...args }) => (
  <Footer3 {...args}>{label}</Footer3>
);
