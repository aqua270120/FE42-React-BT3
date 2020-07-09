import React, { Component } from 'react'

export default class HandlingEvents extends Component {
    handleOnclick = () => console.log(123);
    handleParam = (Name, age) => console.log(Name, age);
    render() {
        return (
            <div>
                <h1>Handling Events</h1>
                <button className="btn btn-success" onClick={this.handleOnclick}>Handle Events</button>
                <button className="btn btn-success" onClick={() => { this.handleParam("Nguyen", "18") }}>Handle Events Params</button>
            </div>
        )
    }
}
