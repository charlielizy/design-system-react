import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { CardTest, CardTestProps } from 'local-build';

export default {
  title: 'Example/CardTest',
  component: CardTest,
} as Meta;

const Template: Story<CardTestProps> = (args) => <CardTest {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      'id': 1,
      'tileImage': 'https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/images/home-slider-one.jpg',
      'viewReport': 'View the Gellery >',
      'tileRouter': '/gellery'
    },
    {
      'id': 2,
      'tileImage': 'https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/images/home-slider-three.jpg',
      'viewReport': 'View the Show Room >',
      'tileRouter': '/gellery'
    },
    {
      'id': 3,
      'tileImage': 'https://qhomedesign-web.s3-ap-southeast-2.amazonaws.com/cdn_asset/images/home-slider-one.jpg',
      'viewReport': 'View the Product List >',
      'tileRouter': '/product-list'
    }
  ],
};