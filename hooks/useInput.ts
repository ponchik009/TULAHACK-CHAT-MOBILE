import React from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (text: string) => {
    setValue(text);
  };

  return { value, onChange };
};
