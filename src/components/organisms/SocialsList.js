import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Option from '../atoms/Option';
import getGrid from '../utils/getGrid';

const Grid = getGrid(5);

const UnstyledSocialsList = ({socials, ...oP}) => {
  return (
    <Grid {...oP}>
      { socials && socials.length ?
        socials.map(
            (s, i) =>
              <Option
                key={i}
                text={s}
                onClick={
                  (e) => window.open(`http://${s}`, '_blank')
                }
              />
            ,
        ) :
        'no socials found :('
      }
    </Grid>
  );
};

const SocialsList = styled(UnstyledSocialsList)`
  width: auto;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column nowrap;
  ${(props) => props.mobile ? '' : 'margin-left: auto; margin-right: auto;'}

`;

UnstyledSocialsList.propTypes = {
  socials: propTypes.array,
};

export default SocialsList;
