import React, { Fragment } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import { Icon, IconProps } from 'local-build';
import { icons } from '../src/styles/icons';

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

const Text = styled.div`
  color: #727972;
  font-size: 12px;
`;

const Item = styled.li`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 20%;
  min-width: 120px;

  padding: 0px 7.5px 20px;

  svg {
    margin-right: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const Template: Story<IconProps> = (args) =>  (
  <Fragment>
    There are {Object.keys(icons).length} icons
    <List>
      {Object.keys(icons).map(key => (
        <Item key={key}>
          <Icon icon={key} aria-hidden {...args}/>
          <Text>{key}</Text>
        </Item>
      ))}
    </List>
  </Fragment>
);

export const Lables = Template.bind({});
Lables.args = {
  block: false,
  size: 26,
  fill: 'blue'
};




