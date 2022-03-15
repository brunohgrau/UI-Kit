import React from "react";
import Table1 from "../components/Table/Table1";
import Table2 from "../components/Table/Table2";

export default {
  title: "Molecules/Table",
  component: Table1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A table displays rows of data."
      }
    }
  }
};

const Template = (args) => <Table1 {...args} />;
export const Table = Template.bind({});
Table.args = {};

const Template2 = (args) => <Table2 {...args} />;
export const TableTwo = Template2.bind({});
TableTwo.args = {};
