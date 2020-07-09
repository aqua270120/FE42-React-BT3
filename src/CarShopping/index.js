import React, { Component } from 'react'

export default class CarShopping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg"
        };
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={this.state.img} className="img-fluid"></img>
                    </div>
                    <div className="col-md-6">
                        <h1>Change Color</h1>
                        <button className="btn m-2 btn-danger" onClick={() => { this.changePic(1) }}>Red</button>
                        <button className="btn m-2 btn-light" onClick={() => { this.changePic(2) }}>Silver</button>
                        <button className="btn m-2 btn-dark" onClick={() => { this.changePic(3) }}>Black</button>
                    </div>
                </div>
            </div>
        )
    }

    changePic = (index) => {
        // debugger;
        if (index == 1) {
            this.setState({
                img: './img/imgRedCar.jpg'
            })
        }
        else if (index == 2) {
            this.setState({
                img: './img/imgSilverCar.jpg'
            })
        }
        else {
            this.setState({
                img: './img/imgBlackCar.jpg'
            })
        }
    }
}
