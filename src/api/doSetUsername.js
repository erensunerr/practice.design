import doUpdateUser from './doUpdateUser';
/**
 * sets username
 */
function doSetUsername(username, setError) {
  doUpdateUser({
    displayName: username,
  });
}

export default doSetUsername;
