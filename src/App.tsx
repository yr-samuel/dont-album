import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>oi</div>} />
      <Route path="/*" element={<span>ihaa</span>} />
    </Routes>
  );
};

export default App;
