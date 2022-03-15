import React from "react";
import Manipulation1 from "../components/Manipulation/Manipulation1";
import Manipulation2 from "../components/Manipulation/Manipulation2";
import Manipulation3 from "../components/Manipulation/Manipulation3";
import Manipulation4 from "../components/Manipulation/Manipulation4";
import Manipulation5 from "../components/Manipulation/Manipulation5";

export default {
  title: "Atoms/Manipulation",
  component: Manipulation1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "Manipulation .."
      }
    }
  }
};

export const Manipulation = ({ label, ...args }) => (
  <Manipulation1 {...args}>{label}</Manipulation1>
);

export const ManipulationTwo = ({ label, ...args }) => (
  <Manipulation2 {...args}>{label}</Manipulation2>
);

export const ManipulationThree = ({ label, ...args }) => (
  <Manipulation3 {...args}>{label}</Manipulation3>
);

export const ManipulationFour = ({ label, ...args }) => (
  <Manipulation4 {...args}>{label}</Manipulation4>
);

export const ManipulationFive = ({ label, ...args }) => (
  <Manipulation5 {...args}>{label}</Manipulation5>
);
