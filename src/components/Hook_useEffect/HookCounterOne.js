import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const HookCounterOne = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `${count}`
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
};

export default HookCounterOne;