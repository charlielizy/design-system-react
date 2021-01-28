import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from 'local-build';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      'tileImage': 'https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/images/home-slider-one.jpg',
      'viewReport': 'View the Gellery >',
      'tileRouter': '/gellery'
    },
    {
      'tileImage': 'https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/images/home-slider-three.jpg',
      'viewReport': 'View the Show Room >',
      'tileRouter': '/gellery'
    },
    {
      'tileImage': 'https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/images/home-slider-one.jpg',
      'viewReport': 'View the Product List >',
      'tileRouter': '/product-list'
    }
  ],
};