import { useState, useCallback } from 'react';

export function useCustomState(initialValue) {
  const [state, setState] = useState(initialValue);

  const set = useCallback((value) => {
    setState((prev) => (typeof value === 'function' ? value(prev) : value));
  }, []);

  const reset = useCallback(() => {
    setState(initialValue);
  }, [initialValue]);

  return [state, set, reset];
}
