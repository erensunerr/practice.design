import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { defaultStyles } from './styles';

const FeatureStyles = styled.div`
    display: flex;
    flex-flow: column;
    gap: 8px;
`

/**
 * 
 */
function Feature(props) {
    return (
        <FeatureStyles>
            <h3 className="subtitle">
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
        </FeatureStyles>
    );
}

// todo: write propTypes for Feature
Feature.propTypes = {
    title: propTypes.string,
    description: propTypes.string
}

export default Feature