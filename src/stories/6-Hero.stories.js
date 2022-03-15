import React from "react";
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";
import Hero3 from "../components/Hero/Hero3";
import Hero4 from "../components/Hero/Hero4";

export default {
  title: "Organisms/Hero",
  component: Hero1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "Section that should catch the attention of the user"
      }
    }
  }
};

const Template = (args) => <Hero1 {...args} />;
export const HeroOne = Template.bind({});
HeroOne.args = {};

const Template2 = (args) => <Hero2 {...args} />;
export const HeroTwo = Template2.bind({});
HeroTwo.args = {};

const Template3 = (args) => <Hero3 {...args} />;
export const HeroThree = Template3.bind({});
HeroThree.args = {};

const Template4 = (args) => <Hero4 {...args} />;
export const HeroFour = Template4.bind({});
HeroFour.args = {};
