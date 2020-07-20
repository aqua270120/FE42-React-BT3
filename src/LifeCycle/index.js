import React, { Component } from 'react'

export default class Parent extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor")
        this.state = {
            count: 0,
        };
    }
    handleClick = () => {
        this.setState((state) => {
            return {
                count: state.count + 1
            };
        });
    };
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate")
        console.log("prevState", prevState.count)
        console.log("state", this.state.count)
    }
    render() {
        console.log("render", this.state.count)
        return (
            <div>
                <button onClick={this.handleClick}></button>
            </div>
        )
    }
}
