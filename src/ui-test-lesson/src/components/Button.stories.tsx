import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const Meta = {
  title: "Button",
  component: Button,
  argsTypes: {
    label: {
      options: ["Primaryボタン", "Normalボタン"],
      control: { type: "select" }
    }
  }
} as Meta<typeof Button>;

export default Meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primaryボタン",
    primary: true
  }
};

export const Normal: Story = {
  args: {
    label: "Normalボタン",
    primary: false
  }
};
