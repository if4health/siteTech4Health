import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/bootstrap.css';
import './css/timeline.css';

import Home from './pages/home';
import Eca from './pages/eca';
import Tsi from './pages/tsi';
import LinkTree from './pages/linktree';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='ECA' element={<Eca/>}/>
          <Route path='TSI' element={<Tsi/>}/>
          <Route path='Li'
      </Routes>
    </BrowserRouter>
);