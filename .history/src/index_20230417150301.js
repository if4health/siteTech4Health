import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/bootstrap.css';
import './css/timeline.css';

import Home from './pages/home';
import Eca from './pages/eca';
import Tsi from './pages/tsi';
import LinkTree from './pages/linktrees';
import LinkTrees from './pages/linktrees';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='ECA' element={<Eca/>}/>
          <Route path='TSI' element={<Tsi/>}/>
          <Route path='LinkTrees' element={<LinkTrees/>}/>
          <Route path='LinkTree' element={}
      </Routes>
    </BrowserRouter>
);