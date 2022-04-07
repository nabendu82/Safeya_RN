import React, { useReducer } from 'react'
import './App.css';
import HookTimer from './components/HookTimer';
// import Grandparent1 from './components/Grandparent1';
// import Grandparent2 from './components/Grandparent2';
// import GrandParent3 from './components/GrandParent3';

// export const CounterContext = React.createContext()

// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <h1>Count - {count}</h1>
        <Grandparent1 />
        <Grandparent2 />
        <GrandParent3 />
      </CounterContext.Provider> */}
      <HookTimer />
    </div>
  );
}

export default App;
