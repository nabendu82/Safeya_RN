import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState ={
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Error fetching data',
                post: {}
            }
        default:
            return state
    }
}

const DataFetching2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholdwer.typicode.com/posts/1')
            .then(res => {
                dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_ERROR'})
            })
    },[])

    return (
        <div>
            {state.loading ? <h1>Loading...</h1> : <h1>{state.post.title}</h1>}
            {state.error ? <h1>{state.error}</h1> : null}
        </div>
    )
}

export default DataFetching2