/**
 * wrapper to set a field ez
 */
export function setField(setter) {
  return function(e) {
    setter(e.target.value);
  };
}
