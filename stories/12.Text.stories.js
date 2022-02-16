import React from "react";
import Text1 from "../components/Text/Text1";

export default {
  title: "Components/Text",
  component: Text1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Text Decoration Techniques"
      }
    }
  }
};

const Template = (args) => <Text1 {...args} />;
export const Text = Template.bind({});
Text.args = {};
