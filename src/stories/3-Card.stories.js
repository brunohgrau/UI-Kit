import React from "react";
import ArticleCard from "../components/Card/ArticleCard";
import ArticleImgCard from "../components/Card/ArticleImgCard";
import ProductCard from "../components/Card/ProductCard";
import UserCard from "../components/Card/UserCard";

export default {
  title: "Components/Card",
  component: ArticleCard,
  argTypes: { onClick: { action: "clicked" } }
  // parameters: {
  //   actions: {
  //     handles: ["mouseover", "click"]
  //   }
  // }
};

export const Article = ({ label, ...args }) => (
  <ArticleCard {...args}>{label}</ArticleCard>
);

export const ArticleImg = ({ label, ...args }) => (
  <ArticleImgCard {...args}>{label}</ArticleImgCard>
);

export const Product = ({ label, ...args }) => (
  <ProductCard {...args}>{label}</ProductCard>
);

export const User = ({ label, ...args }) => (
  <UserCard {...args}>{label}</UserCard>
);
