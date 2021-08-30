import React, {useState} from 'react';
import propTypes from 'prop-types';

const UserContext = React.createContext();

/**
 * provides user context
 */
function UserContextProvider(props) {
  const [user, setUser] = useState(null);
  // TODO: on user change firebase thingy
  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: propTypes.node,
};

export {UserContext, UserContextProvider};
