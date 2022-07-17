import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddItem from "./pages/AddItem";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:itemId" element={<Detail />} />
      <Route path="add-item" element={<AddItem />}></Route>
    </Routes>
  );
};

export default App;
