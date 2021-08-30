import {useContext, useEffect} from 'react';
import {UserContext} from './UserContext';
import {useHistory} from 'react-router-dom';

/**
 * redirect based on auth status.
 */
function useAuthRedirect(shouldBeAuthenticated) {
  const user = useContext(UserContext);
  const history = useHistory();
  useEffect(
      () => {
        if (shouldBeAuthenticated && !user) {
          history.push('/login');
        }
        if (!shouldBeAuthenticated && user) {
          history.push('/my_challenges');
        }
      }, [user],
  );
}

export default useAuthRedirect;
