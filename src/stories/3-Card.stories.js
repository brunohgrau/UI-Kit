import React from "react";
import ProductCard from "../components/Card/ProductCard";
import RPGCard from "../components/Card/RPGCard";
import ProfileCard from "../components/Card/ProfileCard";

export default {
  title: "Molecules/Card",
  component: ProductCard,
  parameters: {
    docs: {
      description: {
        component:
          "Information container that holds elements like text, rich media or buttons."
      }
    }
  }
};

const Template = (args) => <ProductCard {...args} />;
export const Product = Template.bind({});
Product.args = {
  header: "Nike Air"
};

const Template2 = (args) => <RPGCard {...args} />;
export const RPG = Template2.bind({});
RPG.args = {
  header: "Post One",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor"
};

const Template3 = (args) => <ProfileCard {...args} />;
export const Profile = Template3.bind({});
