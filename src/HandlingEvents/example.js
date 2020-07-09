import React, { Component } from 'react'

export default class ExHandlingEvent extends Component {
    isLogin = false;
    userName = "Bao"
    // renderHTML = () => {
    //     if (this.isLogin) {
    //         return <p>Hello {this.userName}</p>
    //     }
    //     else {
    //         return <button className="btn btn-success">Log in</button>
    //     }

    // }
    handleOnclick = () => {
        this.isLogin = true;

    }
    renderHTML = () => {
        return this.isLogin ? (

            <p>Hello {this.userName}</p>
        ) : (
                <button className="btn btn-success" onClick={this.handleOnclick}>Log in</button>)

    };
    render() {
        console.log("render");
        return (
            <div >
                {this.renderHTML()}
            </div >
        )
    }
}
