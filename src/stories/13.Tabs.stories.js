import React from "react";
import Tab1 from "../components/Tabs/Tab1";

export default {
  title: "Atoms/Tabs",
  component: Tab1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Tabs organize content across different screens, data sets, and other interactions."
      }
    }
  }
};

const Template = (args) => <Tab1 {...args} />;
export const Tab = Template.bind({});
Tab.args = {};
