import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blogs from './Blogs'
import Blog1 from './blogs/Blog1'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/blogs" element={<Blogs/>}/>
      <Route exact path="/blog1" element={<Blog1/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
