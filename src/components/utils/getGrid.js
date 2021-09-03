import React from 'react';
import styled, {css} from 'styled-components';

const levelToRem = (level) => (2**(4-level));

const colGap = (cg) =>
  cg && css`column-gap: ${levelToRem(cg)}rem`;

const gap = (g) =>
  g && css`gap: ${levelToRem(g)}rem`;

const width = (w) =>
  w && css`width: 100%`;
/**
 * gives you a grid you can create styles from
 */
export function getGrid(level, fullWidth, colLevel) {
  const Grid = styled.section`
    width: 100%;
    display: flex;
    flex-flow: wrap;
    ${gap(level)};
    ${colGap(colLevel)};
    
    & > * {
      ${width(fullWidth)};
    }
  `;
  return Grid;
}

export default getGrid;
