import React, { useState } from 'react';

// Define the type for the initial state
type s = string | number | boolean;

const useForm = (initialValue: s) => {
  const [state, setState] = useState<s>(initialValue);

  // Define the type for the event handler
  type setEleType = (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Event handler to update state
  const setEle: setEleType = (e) => {
    setState(e.target.value);
  };

  // Ensure state is returned as a string
  const res: [string, setEleType, React.Dispatch<React.SetStateAction<s>>?] = [String(state), setEle, setState];

  return res;
};

export default useForm;