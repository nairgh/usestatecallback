import { useState } from "react";

/**
 * Custom hook for interacting with localStorage
 * @param {string} key - The key to use for localStorage
 * @param {string} initialValue - The default value to use if no value is found in localStorage
 */
function useLocalStorage(key, initialValue) {
  // Initialize state with a callback to read from localStorage
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // Update both state and localStorage
  const setLocalStorageValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;
