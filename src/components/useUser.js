import {useContext} from 'react';
import {UserContext} from './UserContext';

/**
 * redirect based on auth status.
 */
function useUser() {
  const user = useContext(UserContext);
  return user;
}

export default useUser;
