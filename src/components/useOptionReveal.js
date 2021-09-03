import React, {useState} from 'react';
import Option from './atoms/Option';


// TODO: turn this into a more generalized hook
// so that it can be used in isEditing in settings

/**
 * hook to optionally view some content
 * returns [option, conditionally rendered content]
 */
function useOptionReveal(label, content, def) {
  const [reveal, setReveal] = useState(def);
  const toggleReveal = () => setReveal((p) => !p);
  return [
    <Option text={label} key={-1} onClick={toggleReveal}/>,
    <>
      { reveal &&
        content
      }
    </>,
  ];
}

useOptionReveal.defaultProps = {
  def: false,
};

export default useOptionReveal;
