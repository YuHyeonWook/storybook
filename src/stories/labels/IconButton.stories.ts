import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../../components/IconButton";
import deleteIcon from "../../assets/icons/ic-delete-dark.svg";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: { control: "text", description: "아이콘의 대체 텍스트" },
    iconPath: {
      control: "text",
      description: "아이콘의 경로",
      defaultValue: "",
    },
    onClick: { action: "clicked", description: "아이콘 클릭 시 호출되는 함수" },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "아이콘",
    iconPath: deleteIcon,
    onClick: () => {},
  },
};
