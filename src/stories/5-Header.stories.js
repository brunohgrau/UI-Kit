import React from "react";
import Header1 from "../components/Header/Header1";

export default {
  title: "Components/Header",
  component: Header1,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Header = ({ label, ...args }) => (
  <Header1 {...args}>{label}</Header1>
);
