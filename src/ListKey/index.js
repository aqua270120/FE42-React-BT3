import React, { Component } from 'react'

export default class ListNKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProduct: [
                { id: 1, name: "IPhoneX", price: 123456 },
                { id: 2, name: "IPhoneXS", price: 999999 },
                { id: 3, name: "IPhoneXSMax", price: 666666 },
                { id: 4, name: "IPhone11", price: 777777 },
            ]

        }

    }

    renderTable = () => {
        const { listProduct } = this.state;
        // Map duyet va tao mang moi
        // foreach chi duyen mang
        //Return o trong la return 1 cai mang moi
        //Return o ngoai la return cua cai ham
        return listProduct.map((product) => {
            return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });
    };
    render() {
        return (
            <div>
                <h1>List and Keys</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>

                    </thead>
                    <tbody id="a">
                        {this.renderTable()};
                    </tbody>
                </table>
            </div>
        )
    }
}
