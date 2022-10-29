import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../../GrandPa/GrandPa';

const Aunty = ({ house }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Aunty</h3>
            <p>House: {ring}</p>
        </div>
    );
};

export default Aunty;