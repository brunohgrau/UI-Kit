import React from "react";
import Image1 from "../components/Image/Image1";
import Image2 from "../components/Image/Image2";
import Image3 from "../components/Image/Image3";
import Image4 from "../components/Image/Image4";
import Image5 from "../components/Image/Image5";
import Image6 from "../components/Image/Image6";
import Image7 from "../components/Image/Image7";
import Image8 from "../components/Image/Image8";

export default {
  title: "Atoms/Images",
  component: Image1,
  argTypes: { onClick: { action: "clicked" } },
  parameters: {
    docs: {
      description: {
        component: "An image is a graphic representation of something"
      }
    }
  }
};

export const Image = ({ label, ...args }) => <Image1 {...args}>{label}</Image1>;
export const ImageTwo = ({ label, ...args }) => (
  <Image2 {...args}>{label}</Image2>
);
export const ImageThree = ({ label, ...args }) => (
  <Image3 {...args}>{label}</Image3>
);

export const ImageFour = ({ label, ...args }) => (
  <Image4 {...args}>{label}</Image4>
);

export const ImageFive = ({ label, ...args }) => (
  <Image5 {...args}>{label}</Image5>
);

export const ImageSix = ({ label, ...args }) => (
  <Image6 {...args}>{label}</Image6>
);

export const ImageSeven = ({ label, ...args }) => (
  <Image7 {...args}>{label}</Image7>
);

export const ImageEight = ({ label, ...args }) => (
  <Image8 {...args}>{label}</Image8>
);
