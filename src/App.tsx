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
import { Actions } from './pages/Remote/Actions/Actions';
import { State } from './pages/Remote/State/State';
import { Register } from './pages/Register/Register';
export const MyContextLogin = React.createContext<ContextTypeLogin | null>(null);
export const MyContextRegister = React.createContext<ContextTypeRegister | null>(null);

type ContextTypeLogin = {
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  loggedIn: number,
  setLoggedIn: React.Dispatch<React.SetStateAction<number>>,
}
type ContextTypeRegister = {
  username: string,
  setUsername: React.Dispatch<React.SetStateAction<string>>
}

function Inside() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(0);

  return (
    <div id="App">
      <nav className='main'>
        {/* <div>username app: {username}</div>
        <div>loggedIn: {loggedIn}</div> */}
        {/* <div id="left">
          <Link to="/">Home</Link>
          <Link to="/car">Car</Link>
          <Link to="/remote/login">Login</Link>
          <Link to="/remote/register">Register</Link>
          <Link to="/remote">Remote</Link>
          <Link to="/remote/actions">Actions</Link>
        </div> */}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path="/car" element={<Car />} />
        <Route path='remote' element={<Remote />}> 
            <Route path='state' element={<State />} />
            <Route path='actions' element={<Actions />} />
            <Route path='login' element={
                <MyContextLogin.Provider value={{ username, setUsername, loggedIn, setLoggedIn }}>
                    <Login />
                </MyContextLogin.Provider>
            } />
            <Route path='register' element={
              <MyContextRegister.Provider value={{ username, setUsername }}>
                <Register />
              </MyContextRegister.Provider>
            } />
        </Route>
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
