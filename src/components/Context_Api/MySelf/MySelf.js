import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h3>My Self</h3>
            <p><small>House: {house} </small></p>
            <Special ></Special>
        </div>
    );
};

export default MySelf;