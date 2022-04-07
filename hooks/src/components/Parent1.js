import React, { useContext } from 'react'
import { CounterContext } from '../App'

const Parent1 = () => {
    const countContext = useContext(CounterContext)
    return (
        <div>
            <h2>Parent1 - {countContext.countState}</h2>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Parent1