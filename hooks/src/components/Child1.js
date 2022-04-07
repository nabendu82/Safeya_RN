import React, { useContext } from 'react'
import { CounterContext } from '../App'

const Child1 = () => {
    const countContext = useContext(CounterContext)
    return (
        <div>
            <h2>Child1 - {countContext.countState}</h2>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default Child1