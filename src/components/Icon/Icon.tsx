import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { icons } from '../../styles/icons'
import { IIcons } from './interfaces'
import { prefix } from '../../constants'

const typeIcons: {[index: string]: any} = icons;
const Svg = styled.svg`
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

export const Icon: React.FC<IIcons> = ({ icon, className, style, fill, size = 24, ...props}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...props}  className={classNames(className, `${prefix}-icon`)}>
      <path d={typeIcons[icon]} fill={fill} />
    </Svg>
  );
}

