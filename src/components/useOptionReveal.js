import React, {useState} from 'react';
import Option from './Option';

/**
 * hook to optionally view some content
 * returns [option, conditionally rendered content]
 */
function useOptionReveal(label, content, def=false) {
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

export default useOptionReveal;
