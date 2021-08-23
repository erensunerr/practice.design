import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Button from './Button'
import { defaultTheme } from './styles'

const SolutionStyles = styled.div`

    margin: 0 auto;
    display: flex;
    flex-flow: column;
    max-width: 20rem;
    border-radius: .5rem .5rem 0 0;
    overflow: hidden;
    gap: 1rem;
    filter: drop-shadow(2px 4px 8px rgba(16, 16, 16, 0.05));

    img {
        height: 220px;
        object-fit: cover;
    }

    & > div {
        display: flex;
        justify-content: space-between;
    }

    a {
        color: ${defaultTheme.colors.dark};
    }
`;

const buttonTextArr = [
    "I can do better",
    "gimme it",
    "solve",
]

/**
 * A card component to display a solution.
 */
function SolutionCard(props) {
    return (
            <SolutionStyles {...props.toCard}>
                <img alt="figma thumbnail" {...props.img} />
                <div>
                    {
                        props.challengeTitle &&
                        <p>{props.challengeTitle}</p>
                        
                    }
                    <p>solution by <a href={props.by.href}>{props.by.text}</a></p>
                </div>
                {
                    props.button && 
                    <Button text={buttonTextArr[Math.floor(Math.random()*buttonTextArr.length)]}
                    
                        {...props.button} />     
                }
            </SolutionStyles>
    );
}

// todo: write propTypes for SolutionCard
SolutionCard.propTypes = {
    /**
     * is spread to button
     */
    button: propTypes.shape({
        onClick: propTypes.func,
        /**
         * this is not necessary, and is supplied by the card by default.
         */
        text: propTypes.string
    }),
    challengeTitle: propTypes.string,
    by: propTypes.shape({
        text: propTypes.string,
        href: propTypes.string
    }),
    /**
     * is spread to thumbnail.
     */
    img: propTypes.shape({
        src: propTypes.string,
    }),
    /**
     * this is spread to the card div
     */
    toCard: propTypes.object,
}

export default SolutionCard