import React from "react";
import Breadcrumb1 from "../components/Breadcrumbs/Breadcrumb1";
import Breadcrumb2 from "../components/Breadcrumbs/Breadcrumb2";

export default {
  title: "Molecules/Breadcrumb",
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

const Template2 = (args) => <Breadcrumb2 {...args} />;
export const BreadcrumbTwo = Template2.bind({});
