import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import React from "react";

const App = () => {
  return (
    // Estilado que ya venia en el template
    <div className=" font-sans h-screen flex flex-col">
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
