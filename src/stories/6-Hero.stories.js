import React from "react";
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";

export default {
  title: "Sections/Hero",
  component: Hero1,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Hero = ({ label, ...args }) => <Hero1 {...args}>{label}</Hero1>;
export const HeroTwo = ({ label, ...args }) => <Hero2 {...args}>{label}</Hero2>;
