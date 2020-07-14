import React, { Component } from "react";
import SanPham from './san-pham'
export default class DanhSachSanPham extends Component {
  addCart = (product) => {
    this.props.addCart(product);
  }
  detailProduct = (product) => {
    this.props.detailProduct(product);
  }

  addCart = (product) => {
    this.props.addCart(product);
  }
  renderHTML = () => {
    const { dsSanPham } = this.props;
    const { detailProduct } = this.props;
    const { addCart } = this.props;
    return dsSanPham.map((product) => {
      return (
        <SanPham key={product.maSP} sanPham={product} detailProduct={detailProduct} addCart={addCart} />
      )
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <SanPham />
          <SanPham />
          <SanPham /> */}
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}
