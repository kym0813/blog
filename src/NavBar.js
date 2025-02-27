import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/main">1Home1</Link>
            </li>
            <li>
                <Link to="/about">2About2</Link>
            </li>
            <li>
                <Link to="/articles">3Articles3</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;