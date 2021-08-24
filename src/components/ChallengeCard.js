import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { defaultTheme } from './styles'


// todo: turn challenge and solution cards into special varitons
// of a card component.
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

    & > div > p {
        text-align: right;
        white-space: nowrap;
    }

    p > a {
        color: ${defaultTheme.colors.dark};
    }
`;

const CategoryStyles = styled.a`

    background-color: ${defaultTheme.colors.dark};
    color: ${defaultTheme.colors.light};
    border-radius: 1rem;
    padding: .5em 1.5em;
    text-decoration: none;
    font-weight: 300;
    display: flex;
    align-items: center;
    cursor: default;
`

const CategoriesDiv = styled.div`
    display: flex;
    gap: .5em;
    align-items: stretch;
    margin-right: 1.5em;
    overflow: scroll;
    * {
        white-space: nowrap;
    }
    &::-webkit-scrollbar {
        display: none;
    }
`

/**
 * card for a challenge
 */
function ChallengeCard(props) {
    console.table(props.categories);
    return (
            <ChallengeStyles {...props.toCard}>
                <img alt="figma thumbnail" {...props.img} />
                <div>
                    <CategoriesDiv>
                        {
                            props.categories.map(
                                (category, i) => 
                                    <CategoryStyles 
                                        // href={category.href} 
                                        className="small-text" 
                                        key={i}>
                                        {category.name}
                                    </CategoryStyles>
                            )
                        }
                    </CategoriesDiv>
                    <p>by <a href={props.by.href}>{props.by.text}</a></p>
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