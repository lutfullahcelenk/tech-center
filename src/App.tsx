import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import AddItem from "./pages/AddItem";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="text-center px-8 py-12 sm:px-40 sm:py-20">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:itemId" element={<Detail />} />
      <Route path="add-item" element={<AddItem />}></Route>
    </Routes>
    </div>
  );
};

export default App;
