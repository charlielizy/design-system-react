import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import { Icon } from '..';
export const NavBar = ({ productInfo, primaryLinks, footerLinks, LinkComponent, displayTitle = true, isManuallyOpen = false, }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(isManuallyOpen);
    }, [isManuallyOpen]);
    const [isTransitioning, setisTransitioning] = useState(false);
    // We need to use a ref for transition state to reference it in the timeout
    const transitionRef = useRef(isTransitioning);
    transitionRef.current = isTransitioning;
    // Icons
    const externalIcon = React.createElement(Icon, { icon: "sharealt", className: "ic-external" });
    // Focus/Blur uses timeouts to ensure the nav bar stays open while tabbing
    let closeNavTimeout = null;
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
    const createLinkElements = (linkArray) => {
        const linkElements = [];
        linkArray.map(({ key, name, link, icon, isExternal, onClick }) => {
            linkElements.push(isExternal ? (React.createElement("a", { key: name, href: link, className: "navbar-link", onClick: onClick ? onClick : closeNav, target: "_blank" },
                React.createElement("span", { className: "navbar-link-icon" }, icon),
                React.createElement("span", { className: "navbar-link-content" }, name),
                isExternal && React.createElement("span", { className: "navbar-link-external" }, externalIcon))) : LinkComponent !== undefined ? (React.createElement(LinkComponent, { key: name, to: link, href: link, className: "navbar-link", onClick: onClick ? onClick : closeNav },
                React.createElement("span", { className: "navbar-link-icon" }, icon),
                React.createElement("span", { className: "navbar-link-content" }, name),
                isExternal && React.createElement("span", { className: "navbar-link-external" }, externalIcon))) : null);
        });
        return linkElements;
    };
    const primaryLinkElements = createLinkElements(primaryLinks);
    const footerLinkElements = createLinkElements(footerLinks);
    const { title: elementTitle, package: packageInfo, icon, name } = productInfo;
    const title = displayTitle ? (React.createElement("div", { className: "navbar-title-container", title: elementTitle, "data-app": packageInfo },
        React.createElement("span", { className: "navbar-title-icon" }, icon),
        React.createElement("span", { className: "navbar-title-content" }, name))) : (React.createElement("div", { className: "navbar-title-container", title: elementTitle, "data-app": packageInfo }));
    return (React.createElement("header", { className: cx('navbar-container', { 'navbar-open': isOpen }), onFocus: () => {
            if (closeNavTimeout !== null) {
                clearTimeout(closeNavTimeout);
            }
            openNav();
        }, onBlur: () => {
            closeNavTimeout = setTimeout(() => {
                closeNav();
            }, 100);
        }, onMouseMove: openNav, onMouseLeave: closeNav },
        title,
        React.createElement("div", { className: "navbar-items-container" }, primaryLinkElements),
        React.createElement("div", { className: "navbar-footer-container" }, footerLinkElements)));
};
//# sourceMappingURL=NavBar.js.map