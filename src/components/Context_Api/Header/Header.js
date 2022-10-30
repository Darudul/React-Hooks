import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/grandpa">GrandPa</Link>
                <Link to="/theme">Dark Theme</Link>
                <Link to="/reducer">Use Reducer</Link>

            </nav>
        </div>
    );
};

export default Header;