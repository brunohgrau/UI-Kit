import React from "react";
import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2";

export default {
  title: "Organisms/Footer",
  component: Footer1,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Navigation Footer"
      }
    }
  }
};

const Template = (args) => <Footer1 {...args} />;
export const Footer = Template.bind({});
Footer.args = {
  footerBackground: "#00baff"
};

const Template2 = (args) => <Footer2 {...args} />;
export const FooterTwo = Template2.bind({});
Footer2.args = {};
