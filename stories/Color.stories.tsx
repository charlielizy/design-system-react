import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { MyTheme } from '../src/styles/myTheme'

export default {
  title: 'Example/Color',
} as Meta;

const Section = styled.section`
.story-color-section {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 2.5rem;

  .story-color-title {
    font-weight: 600;
    min-width: 200px;
    font-family: ${MyTheme.typography.type.primary};
  }
  .story-color-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    gap: 12px;


  }
}
`
const ColorRender = styled.div`
  &:hover .story-bg {
      cursor: pointer;
      box-shadow: ${MyTheme.shadow.secondary};
      font-weight: 700;
  }
  &:hover .story-text {
      cursor: pointer;
      box-shadow: ${MyTheme.shadow.secondary};
      font-weight: 700;
  }
  .story-bg {
    border: solid 1px #8897a2;
    width: 9rem;
    height: 6rem;
    line-height: 6rem;
    font-size: 12px;
    font-family: ${MyTheme.typography.type.primary};
    text-align: center;
  }
  .story-text {
    border: solid 1px #8897a2;
    border-top: none;
    height: 2rem;
    width: 9rem;
    line-height: 2rem;
    text-align: center;
    font-size: 12px;
    font-family: ${MyTheme.typography.type.primary};
    color: #333;
  }

`

const colorRender = (color: any) => (
  <ColorRender className="story-color-demo">
    <div style={{ backgroundColor: `${color[1]}` }} className="story-bg">{color[0]}</div>
    <div className="story-text">{color[1]}</div>
  </ColorRender>
);

const Template: Story = (args) => ((
  <Section>
    <div className="story-color-section">
      <p className="story-color-title">Color</p>
      <div className="story-color-content">{Object.entries(MyTheme.color).map(colorRender)}</div>
    </div>
    <span className="story-clear" />
    <hr />
    <div className="story-color-section">
      <p className="story-color-title">Background Color</p>
      <div className="story-color-content">{Object.entries(MyTheme.background).map(colorRender)}</div>
    </div>
    <span className="story-clear" />
  </Section>
));

export const ColorList = Template.bind({});
ColorList.args = {
};