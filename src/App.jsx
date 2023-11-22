import React from 'react';

import './App.scss'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Service from './pages/Service';
import Home from './pages/Home';

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  </Router>
);

export default App;
