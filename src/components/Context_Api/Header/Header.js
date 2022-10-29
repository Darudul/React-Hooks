import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/grandpa">GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;