import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {useParams} from 'react-router-dom';

import Typography from '../atoms/Typography';
import getGrid from '../utils/getGrid';
import SocialsList from '../organisms/SocialsList';
import {getUserByUid} from '../../api/user';

const VerticalTitle = styled(Typography.Title)`
  writing-mode: vertical-lr;
  cursor: default;
`;


const ProfilePageStyles = styled(getGrid(0))`
  justify-content: space-between;
  ${SocialsList} {
    order: -1;
  }
`;

/**
 * view someone's profile
 */
function ProfilePage({uid: puid, ...oP}) {
  const [profileOwner, setProfileOwner] = useState(null);
  const params = useParams();
  const uid = params.uid === undefined ? puid : params.uid;

  useEffect(
      async () => {
        const po = await getUserByUid(uid);
        setProfileOwner(
            po,
        );
      },
      [uid],
  );

  return (

    <ProfilePageStyles {...oP}>
      { profileOwner &&
      <>
        <VerticalTitle>@{profileOwner.username}</VerticalTitle>
        <SocialsList socials={profileOwner.socials} />
      </>
      }
    </ProfilePageStyles>
  );
}

// TODO: write propTypes for ProfilePage
ProfilePage.propTypes = {
  uid: propTypes.string,
};

export default ProfilePage;
