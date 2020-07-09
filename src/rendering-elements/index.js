import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "Cybersoft";
    lop = "FE42";

    renderInfo = () => {
        return <p>Username: {this.username} -Lop : {this.lop} </p>
    };
    render() {
        return (
            <div>
                <h1>Rendering Elements</h1>
                {/* <p>Username: {this.username} </p>
                <p>Lop : {this.lop}</p> */}
                {this.renderInfo()};
            </div>
        )
    }
}
