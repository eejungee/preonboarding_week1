// import React from "react";
// import ReactDOM, { createRoot } from "react-dom/client";
// import Root from "./Root";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );

import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import About from "./About";

const container = document.getElementById("root");

ReactDOM.createRoot(container!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
