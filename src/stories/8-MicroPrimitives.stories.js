import React from "react";
import ElementContainer from "../components/Primitives/ElementContainer";
import Stack from "../components/Primitives/EveryLayout/Stack";
import Box from "../components/Primitives/EveryLayout/Box";
import Cluster from "../components/Primitives/EveryLayout/Cluster";
import InlinePrimitive from "../components/Primitives/EveryLayout/Inline";
import Center from "../components/Primitives/EveryLayout/Center";
import AspectRatioImageCard from "../components/Primitives/WebDevIO/AspectRatioImageCard";
import ClampingCard from "../components/Primitives/WebDevIO/ClampingCard";
import Sidebar from "../components/Primitives/EveryLayout/Sidebar";
import Cover from "../components/Primitives/EveryLayout/Cover";
import SplitPrimitive from "../components/Primitives/EveryLayout/Split";

export default {
  title: "Primitives/Micro",
  component: ElementContainer,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const ElementContainer1 = ({ label, ...args }) => (
  <ElementContainer {...args}>{label}</ElementContainer>
);

export const StackPrimitive = ({ label, ...args }) => (
  <Stack {...args}>{label}</Stack>
);

export const BoxPrimitive = ({ label, ...args }) => (
  <Box {...args}>{label}</Box>
);

export const InlineCluster = ({ label, ...args }) => (
  <Cluster {...args}>{label}</Cluster>
);

export const Inline = ({ label, ...args }) => (
  <InlinePrimitive {...args}>{label}</InlinePrimitive>
);

export const CenterPrimitive = ({ label, ...args }) => (
  <Center {...args}>{label}</Center>
);

export const AspectRatioImage = ({ label, ...args }) => (
  <AspectRatioImageCard {...args}>{label}</AspectRatioImageCard>
);

export const Clamping = ({ label, ...args }) => (
  <ClampingCard {...args}>{label}</ClampingCard>
);

export const SidebarPrimitive = ({ label, ...args }) => (
  <Sidebar {...args}>{label}</Sidebar>
);

export const CoverPrimitive = ({ label, ...args }) => (
  <Cover {...args}>{label}</Cover>
);

export const Split = ({ label, ...args }) => (
  <SplitPrimitive {...args}>{label} </SplitPrimitive>
);
