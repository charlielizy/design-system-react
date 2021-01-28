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
import styled, { css } from 'styled-components';
import { MyTheme } from '../../styles/myTheme';
const ButtonContent = (_a) => {
    var { primary = false, size = 'medium', backgroundColor, label } = _a, props = __rest(_a, ["primary", "size", "backgroundColor", "label"]);
    return (React.createElement("button", Object.assign({ type: "button", style: { backgroundColor } }, props), label));
};
export const Button = styled(ButtonContent) `
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  font-family: 'Nunito Sans', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${props => props.primary === true && css `
    color: ${MyTheme.color.primary};
    background-color: #1ea7fd;
    padding: 11px 20px;
  `}

  ${props => props.primary === false && css `
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    padding: 11px 20px;
  `}

  ${props => props.size === 'small' && css `
    font-size: 12px;
    padding: 10px 16px;
  `}
  
  ${props => props.size === 'medium' && css `
    font-size: 14px;
    padding: 11px 20px;
  `}

  ${props => props.size === 'large' && css `
    font-size: 16px;
    padding: 12px 24px;
  `}

`;
//# sourceMappingURL=Button.js.map