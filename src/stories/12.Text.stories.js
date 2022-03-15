import React from "react";
import Text1 from "../components/Text/Text1";
import Text2 from "../components/Text/Text2";

export default {
  title: "Atoms/Text",
  component: Text1,
  parameters: {
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

const Template2 = (args) => <Text2 {...args} />;
export const TextTwo = Template2.bind({});
