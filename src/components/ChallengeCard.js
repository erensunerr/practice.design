import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { defaultTheme } from './styles'

const ChallengeStyles = styled.div`

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

const CategoryStyles = styled.a`

    background-color: ${defaultTheme.colors.dark};
    color: ${defaultTheme.colors.light};
    border-radius: 1rem;

`

const CategoriesDiv = styled.div`

`

/**
 * 
 */
function ChallengeCard(props) {
    return (
            <ChallengeStyles {...props.toCard}>
                <img alt="figma thumbnail" {...props.img} />
                <div>
                    <
                    {
                        props.categories.map(
                            (category, i) => <CategoryStyles className="small-text" key={i}>{category.name}</CategoryStyles>
                        )
                        
                    }
                    <p>challenge by <a href={props.by.href}>{props.by.text}</a></p>
                </div>

            </ChallengeStyles>
    );
}

// todo: write propTypes for SolutionCard
ChallengeCard.propTypes = {
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


export default ChallengeCard