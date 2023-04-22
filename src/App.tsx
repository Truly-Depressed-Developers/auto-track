import './App.scss';

import { ThemeProvider, createTheme } from '@mui/material';
// import { Routes } from 'react-router';
import { Routes } from 'react-router';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// https://github.com/remix-run/react-router/blob/dev/examples/basic/src/App.tsx
// https://github.com/remix-run/react-router/issues/8439

import { Car } from './pages/Car/Car';
import { Remote } from './pages/Remote/Remote';
import { NotFound } from './pages/NotFound/NotFound';
import { Home } from './pages/Home/Home';

function Inside() {
    return (
        <div id="App">
            <nav className='main'>
                <div id="left">
                    <Link to="/">Home</Link>
                    <Link to="/car">Car</Link>
                    <Link to="/remote">Remote</Link>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
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
