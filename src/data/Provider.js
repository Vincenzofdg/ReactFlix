import React, { useState } from "react";
import Context from "./Context";

function Provider({ children }) {
  const [test, setTest] = useState("test");

  const data = {
    test,
    setTest,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
}

export default Provider;
