import React, { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return [value, onChangeHandler, setValue];
};

export default useInput;
