import './App.scss';

import { ThemeProvider, createTheme } from '@mui/material';
import { Routes } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React, { Component, useCallback, useEffect, useState } from 'react';

import { Car } from './pages/Car/Car';
import { Remote } from './pages/Remote/Remote';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

function Inside() {
  return (
    <div id="App">
      <nav className='main'>
        <div id="left">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/car">Car</Link>
          <Link to="/remote">Remote</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/car" element={<Car />} />
        <Route path='/remote' element={<Remote />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

const theme = createTheme();

// Providers
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Inside />
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
