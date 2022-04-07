import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.passRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    handleClick = () => {
        console.log("User entered: " + this.inputRef.current.value + " " + this.passRef.current.value)
    }

    render() {
        return (
            <>
                <input type="text" ref={this.inputRef} />
                <input type="password" ref={this.passRef} />
                <button onClick={this.handleClick}>Click</button>
            </>
        )
    }
}

export default RefsDemo
