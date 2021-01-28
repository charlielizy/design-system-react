import React, { FC, useState, useRef, useEffect } from 'react';
import cx from 'classnames';
// interfaces
import { INavBar, INavBarLink } from './interfaces';
import { Icon } from '..';

export const NavBar: FC<INavBar> = ({
  productInfo,
  primaryLinks,
  footerLinks,
  LinkComponent,
  displayTitle = true,
  isManuallyOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(isManuallyOpen);
  }, [isManuallyOpen]);
  const [isTransitioning, setisTransitioning] = useState(false);
  // We need to use a ref for transition state to reference it in the timeout
  const transitionRef = useRef(isTransitioning);
  transitionRef.current = isTransitioning;
  // Icons
  const externalIcon = <Icon icon="sharealt" className="ic-external" />;
  // Focus/Blur uses timeouts to ensure the nav bar stays open while tabbing
  let closeNavTimeout: NodeJS.Timeout | null = null;

  const openNav = () => {
    if (!isOpen) {
      setTimeout(() => {
        if (transitionRef.current) {
          setIsOpen(true);
        }
      }, 250);
      setisTransitioning(true);
    }
  };

  const closeNav = () => {
    if (!isManuallyOpen) {
      setIsOpen(false);
      setisTransitioning(false);
    }
  };

  const createLinkElements = (linkArray: INavBarLink[]) => {
    const linkElements: any = [];
    linkArray.map(({ key, name, link, icon, isExternal, onClick }) => {
      linkElements.push(
        isExternal ? (
          <a
            key={name}
            href={link}
            className="navbar-link"
            onClick={onClick ? onClick : closeNav}
            target="_blank">
            <span className="navbar-link-icon">{icon}</span>
            <span className="navbar-link-content">{name}</span>
            {isExternal && <span className="navbar-link-external">{externalIcon}</span>}
          </a>
        ) : LinkComponent !== undefined ? (
          <LinkComponent
            key={name}
            to={link}
            href={link}
            className="navbar-link"
            onClick={onClick ? onClick : closeNav}>
            <span className="navbar-link-icon">{icon}</span>
            <span className="navbar-link-content">{name}</span>
            {isExternal && <span className="navbar-link-external">{externalIcon}</span>}
          </LinkComponent>
        ) : null
      );
    });

    return linkElements;
  };

  const primaryLinkElements = createLinkElements(primaryLinks);
  const footerLinkElements = createLinkElements(footerLinks);
  const { title: elementTitle, package: packageInfo, icon, name } = productInfo;

  const title = displayTitle ? (
    <div className="navbar-title-container" title={elementTitle} data-app={packageInfo}>
      <span className="navbar-title-icon">{icon}</span>
      <span className="navbar-title-content">{name}</span>
    </div>
  ) : (
    <div className="navbar-title-container" title={elementTitle} data-app={packageInfo} />
  );
  
  return (
    <header
      className={cx('navbar-container', { 'navbar-open': isOpen })}
      onFocus={() => {
        if (closeNavTimeout !== null) {
          clearTimeout(closeNavTimeout);
        }
        openNav();
      }}
      onBlur={() => {
        closeNavTimeout = setTimeout(() => {
          closeNav();
        }, 100);
      }}
      onMouseMove={openNav}
      onMouseLeave={closeNav}>
      {title}
      <div className="navbar-items-container">{primaryLinkElements}</div>
      <div className="navbar-footer-container">{footerLinkElements}</div>
    </header>
  );
};
