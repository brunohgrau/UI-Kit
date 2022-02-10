module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false
      }
    },
    {
      name: "@storybook/addon-interactions"
    },
    {
      name: "@storybook/addon-controls"
    },
    {
      name: "@storybook/addon-links"
    },
    {
      name: "@storybook/addon-docs"
    },
    {
      name: "@storybook/addon-actions"
    }
  ],
  staticDirs: ["../public"]
};
