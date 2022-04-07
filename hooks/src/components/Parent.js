import React, { useContext } from 'react'
import Child from './Child'
import { UserContext, ChannelContext, HomeContext } from '../App'

const Parent = () => {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    const home = useContext(HomeContext)

    return (
        <>
            <h1>useContext - {user} - {channel} - {home}</h1>
            <Child />
        </>
    )
}

export default Parent