import React from 'react';
import { useReducer } from 'react';
import CounterTwo from './CounterTwo';


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState

        default:
            return state;
    }
}

const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count: {count} </div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <CounterTwo />
        </div>
    );
};

export default CounterOne;