import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/main">1Home</Link>
            </li>
            <li>
                <Link to="/about">2About</Link>
            </li>
            <li>
                <Link to="/articles">3Articles</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;