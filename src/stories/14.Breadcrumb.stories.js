import React from "react";
import Breadcrumb1 from "../components/Breadcrumbs/Breadcrumb1";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Breadcrumbs are used to show hierarchy between content"
      }
    }
  }
};

const Template = (args) => <Breadcrumb1 {...args} />;
export const Breadcrumb = Template.bind({});
Breadcrumb.args = {};
