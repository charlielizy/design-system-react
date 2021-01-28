var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { icons } from '../../styles/icons';
import { prefix } from '../../constants';
const typeIcons = icons;
const Svg = styled.svg `
  vertical-align: middle;
  shape-rendering: inherit;
  transform: translate3d(0, 0, 0);
`;
// const Path = styled.path`
//   fill: currentColor;
// `;
/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
export const Icon = (_a) => {
    var { icon, className, style, fill, size = 24 } = _a, props = __rest(_a, ["icon", "className", "style", "fill", "size"]);
    return (React.createElement(Svg, Object.assign({ viewBox: "0 0 1024 1024", width: size, height: size }, props, { className: classNames(className, `${prefix}-icon`) }),
        React.createElement("path", { d: typeIcons[icon], fill: fill })));
};
//# sourceMappingURL=Icon.js.map