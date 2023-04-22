import React, { useState, useEffect } from 'react';
import './Remote.scss';
import { Link, Outlet } from 'react-router-dom';

function Remote() {
    return(
        <div id="remote" style={{padding: "20px"}}>
            {/* <Link to="state">State</Link>
            <Link to="location">Location</Link>
            <Link to="actions">Actions</Link>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link> */}
            <Outlet />
        </div>
    )
}

export { Remote };
