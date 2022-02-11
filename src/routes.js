import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too

import React from "react";
import DocAsset from "./Components/DocAsset";
import Home from "./Components/Home";
import DocGiv from "./Components/Docgiv";
import Buystock from "./Components/Buystock";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/docAsset" element={<DocAsset />} />
      <Route path="/docgiv" element={<DocGiv />} />
      <Route path="/buystock" element={<Buystock />} />
    </Routes>
  );
};

export default Routing;
