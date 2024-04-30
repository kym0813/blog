import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/blog">Home</Link>
            </li>
            <li>
                <Link to="/blog/about">About</Link>
            </li>
            <li>
                <Link to="/blog/articles">Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;