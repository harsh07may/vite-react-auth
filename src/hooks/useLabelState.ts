import { useState, useDebugValue } from "react";
type UseLabelStateReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

/**
 * Applies a label to a state in the React DevTools.
 *
 * @param initialValue The initial value of the state.
 * @param label The label to apply to the state in the React DevTools.
 * @returns A tuple containing the state value and a setter function.
 */

const useLabelState = <T>(
  initialValue: T,
  label: string
): UseLabelStateReturnType<T> => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${label}: ${value}`);
  return [value, setValue];
};
export default useLabelState;
