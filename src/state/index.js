import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            userName: "Nguyen"
        };
    }

    renderHTML = () => {
        return this.state.isLogin ? (

            <p>Hello {this.state.userName}</p>

        ) : (
                <button className="btn btn-success" onClick={this.handleLogin}>Log in</button>
            )


    };
    handleLogin = () => {
        this.setState({
            isLogin: true
        });
        // Khong cho phep gan truc tiep 1 value moi vao state
        // this.state.isLogin = true;

    }
    //Khi nao ham render chay lai? Khi state thay doi ham render se chay lai 
    render() {
        console.log("render");
        return (
            <div>
                <h1>State</h1>
                {this.renderHTML()}
            </div>
        )
    }
}
