import React from 'react';
import { Link, Navigate } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            This is navbar
            <ul>
                    <Link to="/create-post"><li>Create Post</li></Link>
                    <Link to="/"><li>Home</li></Link>
            </ul>
        </div>
    );
}

export default NavBar;