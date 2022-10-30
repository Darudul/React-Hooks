import React from 'react';
import Father from '../Context_Api/Father/Father';
import Uncle from '../Context_Api/Uncle/Uncle';
import Aunty from '../Context_Api/Aunty/Aunty';
import './GrandPa.css'
import { useState } from 'react';
import { createContext } from 'react';

export const RingContext = createContext('ring')


const GrandPa = () => {
    const [house, setHouse] = useState(1)


    const handleBuyAHouse = () => {
        const newHouseCount = house + 1
        setHouse(newHouseCount)
    }
    return (
        <RingContext.Provider value={house}>
            <div className='grandpa'>
                <h3>GrandPa</h3>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <p><small>House: {house}</small></p>

                <section style={{ display: "flex" }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div >
        </RingContext.Provider >
    );
};

export default GrandPa;         