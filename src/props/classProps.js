import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        return (
            <div>
                <h1>Class Props</h1>
                <div>{this.props.tenPropTuDat} -  {this.props.lop}</div>
            </div>
        )
    }
}
