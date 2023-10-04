import { useState } from "react";

function useInput(initState) {
  const [value, setValue] = useState(initState);

  function onChange(e) {
    e.target.value;
  }

  return [value, onChange];
}

export default useInput;
