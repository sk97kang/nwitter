import { useState } from "react";

export default (initialState) => {
  const [value, setValue] = useState(initialState);
  const onChange = (evt) => {
    setValue(evt.target.value);
  };
  const onReset = (evt) => {
    setValue("");
  };
  return [value, onChange, onReset];
};
