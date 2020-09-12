import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Chart from "./Chart";

export default {
  title: "Components/Chart",
  component: Chart,
} as Meta;

const Template: Story = (args) => <Chart {...args} />;

export const Default = Template.bind({});
Default.args = {};
