import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {BodyText} from './Typography';
import Tag from './Tag';

export const CategoriesSelectorStyles = styled.div`
  display: flex;
  gap: .5rem;
  overflow-x: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/**
 * Horizontally scrollable selector for categories
 */
function CategoriesSelector(props) {
  return (
    <CategoriesSelectorStyles>
      {
        props.categories ?
          props.categories.map(
              (category, i) => (
                <Tag
                  static
                  key={i}
                  {...category}
                />
              ),
          ) :
          'no categories 😿'
      }
    </CategoriesSelectorStyles>
  );
}

CategoriesSelector.propTypes = {
  /**
   * each element of the array is spread to the Tag
   */
  categories: propTypes.array.isRequired,
};

export default CategoriesSelector;
