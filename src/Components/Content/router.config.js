import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "../Home/Home";
function Content() {
  return <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Store1" element={<div>Store1</div>}></Route>
      <Route path="/Store2" element={<div>Store2</div>}></Route>
      <Route path="/Store3" element={<div>Store3</div>}></Route>
      <Route path="/Setting1" element={<div>Setting1</div>}></Route>
      <Route path="/Setting2" element={<div>Setting2</div>}></Route>
      <Route path="/Setting3" element={<div>Setting3</div>}></Route>
      <Route path="/Setting4" element={<div>Setting4</div>}></Route>
    </Routes>
  </div>
}
export default Content;