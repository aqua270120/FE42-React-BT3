import React, { Component } from 'react'
import data from './data.json'
export default class BTList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMovie: data
        }
        console.log(this.state.listMovie);
    }

    renderTable = () => {
        const { listMovie } = this.state;

        return listMovie.map((movie) => {
            console.log(movie)
            return (
                <div className="col-md-4 mt-4" key={movie.maPhim}>
                    <div className="card">
                        <img src={movie.hinhAnh} className="img-fluid" alt=""></img>
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">{movie.biDanh}</h5>
                            <p className="card-text">{movie.moTa}</p>
                        </div>
                    </div>
                </div>

            )
        })

    }
    render() {
        return (
            <div className="container">
                <h1>Danh Sach Phim</h1>
                <div className="row">
                    {this.renderTable()};

                </div>
            </div>
        )
    }
}
