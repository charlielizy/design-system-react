import React, { useState } from 'react';
import cx from 'classnames';
import { NavBar, Icon, INavBar } from 'local-build';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MyTheme } from '../src/styles/myTheme'
import './styles/styles.scss'

export default {
  title: 'Example/NavBar',
  component: NavBar
} as Meta;

const logoIcon = <Icon icon="globe" className="ic-a-logo" size="20" fill={MyTheme.color.lightest} />;
const overviewIcon = <Icon icon="eye" className="ic-overview-1" size="20" fill={MyTheme.color.lightest} />;
const operationsIcon = <Icon icon="globe" className="ic-operations" size="20" fill={MyTheme.color.lightest} />;
const noiseIcon = <Icon icon="speaker" className="ic-noise" size="20" fill={MyTheme.color.lightest} />;
const infringementsIcon = (
  <Icon icon="lightningoff" className="ic-infringements" size="20" fill={MyTheme.color.lightest} />
);
const reportsIcon = <Icon icon="graphline" className="ic-reports" size="20" fill={MyTheme.color.lightest} />;
const complaintsIcon = <Icon icon="phone" className="ic-complaints" size="20" fill={MyTheme.color.lightest} />;
const settingsIcon = <Icon icon="cog" className="ic-settings" size="20" fill={MyTheme.color.lightest} />;
const supportIcon = <Icon icon="support" className="ic-support" size="20" fill={MyTheme.color.lightest} />;


const LinkComponent = ({ children, className, to, ...props }: any) => {
  return (
    <a className={cx(className, { 'navbar-selected': to === '#/' })} {...props}>
      {children}
    </a>
  );
};

const links = [
  { name: 'Overview', icon: overviewIcon, link: '#/' },
  { name: 'Operations', icon: operationsIcon, link: '#' },
  { name: 'Noise', icon: noiseIcon, link: '#' },
  { name: 'Infringements', icon: infringementsIcon, link: '#' },
  { name: 'Complaints', icon: complaintsIcon, link: '#' },
  { name: 'Reports', icon: reportsIcon, link: '#' },
];

const footerLinks = [
  { name: 'Settings', icon: settingsIcon, link: '#' },
  { name: 'Support', icon: supportIcon, link: '#', isExternal: true },
];

const Template: Story<INavBar> = (args) => {
  const [openNav, setOpen] = useState(false);

    return (
      <>
        <NavBar isManuallyOpen = {openNav} { ...args } />
        <div style={{ marginLeft: '72px' }}>
          <div style={{ width: '100%', height: '30vh', backgroundColor: 'grey' }}>Map here</div>
          <div className="story-navbar-content">
            <button className="story-navbar-btn" 
            onClick={() => setOpen(!openNav)}
            >
              Toggle navbar open override
            </button>
          </div>
        </div>
      </>
    );
};


export const Primary = Template.bind({});
Primary.args = {
  productInfo: { name: 'Design Template', package: 'v1.2.3', icon: logoIcon },
  primaryLinks: links,
  footerLinks: footerLinks,
  LinkComponent: LinkComponent,
}
