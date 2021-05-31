import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "LightTown UI",
  brandImage: "./logo-2.png",
  brandUrl: ""
});

addons.setConfig({
  theme
});
