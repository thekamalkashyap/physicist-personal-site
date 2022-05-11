import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Blogs from "./Blogs";
import Blog from "./Blog";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
