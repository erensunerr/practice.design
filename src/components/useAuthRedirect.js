import {useContext, useEffect, useState} from 'react';
import {UserContext} from './UserContext';
import {useHistory} from 'react-router-dom';

/**
 * redirect based on auth status.
 */
function useAuthRedirect(shouldBeAuthenticated) {
  const uc = useContext(UserContext);

  const history = useHistory();
  const conditionallyRedirect = (user) => {
    if (shouldBeAuthenticated && !user) {
      history.push('/login');
    }
    if (!shouldBeAuthenticated && user) {
      history.push('/my_challenges');
    }
  };

  useEffect(
      () => {
        if (!uc.isWaiting) {
          conditionallyRedirect(uc.user);
        }
      }, [uc],
  );
}

export default useAuthRedirect;
