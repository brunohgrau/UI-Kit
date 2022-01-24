import React from "react";
import ProductCard from "../components/Card/ProductCard";
import RPGCard from "../components/Card/RPGCard";

export default {
  title: "Components/Card",
  component: ProductCard,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Product = ({ label, ...args }) => (
  <ProductCard {...args}>{label}</ProductCard>
);

export const RPG = ({ label, ...args }) => <RPGCard {...args}>{label}</RPGCard>;
