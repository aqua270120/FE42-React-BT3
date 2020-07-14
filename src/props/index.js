import React, { Component } from 'react'
import ClassProps from './classProps'
import FunctionDrop from './FunctionDrop'
export default class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Nguyen",
            lop: "FE42"
        };
    }
    render() {
        const { username } = this.state;
        const { lop } = this.state;
        return (
            <div>
                <h1>Props</h1>
                {/* Truyen vao 1 thuoc tinh prop do chinh minh dat ten
                Dat ten la username r  truyen thang username minh boc tach o tren  */}
                <ClassProps tenPropTuDat={username} lop={lop} />
                <ClassProps tenPropTuDat="CyberSoft" lop={lop} />
                {/* <FunctionDrop name={username} lop={lop} /> */}
                <FunctionDrop>
                    <h3>hihihihi</h3>
                    <p>co gai ha lan</p>
                </FunctionDrop>
            </div>
        )
    }
}
