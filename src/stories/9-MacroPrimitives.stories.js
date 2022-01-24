import React from "react";
import ElementContainer from "../components/Primitives/ElementContainer";
import DesconstructedPancake from "../components/Primitives/WebDevIO/DesconstructedPancake";
import HolyGrail from "../components/Primitives/WebDevIO/HolyGrail";
import LineUp from "../components/Primitives/WebDevIO/LineUp";
import Pancake from "../components/Primitives/WebDevIO/Pancake";
import RAM from "../components/Primitives/WebDevIO/RAM";
import Sidebar from "../components/Primitives/WebDevIO/Sidebar";
import SpanGrid from "../components/Primitives/WebDevIO/SpanGrid";
import Switcher from "../components/Primitives/EveryLayout/Switcher";
import Grid from "../components/Primitives/EveryLayout/Grid";
import ColumnsPrimitive from "../components/Primitives/EveryLayout/Columns";

export default {
  title: "Primitives/Macro",
  component: ElementContainer,
  argTypes: { onClick: { action: "clicked" } }
};

export const PancakeDesconstructed = ({ label, ...args }) => (
  <DesconstructedPancake {...args}>{label}</DesconstructedPancake>
);

export const HolyGrailLayout = ({ label, ...args }) => (
  <HolyGrail {...args}>{label}</HolyGrail>
);

export const LineUpPrimitve = ({ label, ...args }) => (
  <LineUp {...args}>{label}</LineUp>
);

export const PancakePrimitve = ({ label, ...args }) => (
  <Pancake {...args}>{label}</Pancake>
);

export const RAMPrimitve = ({ label, ...args }) => <RAM {...args}>{label}</RAM>;

export const SidebarPrimitve = ({ label, ...args }) => (
  <Sidebar {...args}>{label}</Sidebar>
);

export const SpanGridPrimitive = ({ label, ...args }) => (
  <SpanGrid {...args}>{label}</SpanGrid>
);

export const SwitcherPrimitive = ({ label, ...args }) => (
  <Switcher {...args}>{label} </Switcher>
);

export const GridPrimitive = ({ label, ...args }) => (
  <Grid {...args}>{label} </Grid>
);

export const Columns = ({ label, ...args }) => (
  <ColumnsPrimitive {...args}>{label} </ColumnsPrimitive>
);
