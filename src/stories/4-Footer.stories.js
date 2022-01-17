import React from "react";
import Footer1 from "../components/Footer/Footer1";

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
