import React from "react";
import { Routes, Route } from "react-router-dom";
import Provider from "./data/Provider";

import Home from "./pages/Home";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
