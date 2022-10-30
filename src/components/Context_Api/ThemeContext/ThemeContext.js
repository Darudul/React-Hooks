import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../../GrandPa/GrandPa';
import "./ThemeContext.css"


const ThemeContext = () => {
    const dark = useContext(RingContext)

    const handleButton = () => {
        const theme = dark;
    }
    return (
        <div>
            <div className='darkTheme'>
                <h1>Theme will change <br /> By a single Click</h1>
            </div>
            <button onClick={handleButton}>Click me to see the magic</button>
        </div>
    );
};

export default ThemeContext;