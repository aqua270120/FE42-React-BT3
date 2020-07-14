import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    this.props.detailProduct(this.props.sanPham);
  };
  handleGioHang = () => {
    this.props.addCart(this.props.sanPham);
  }
  render() {
    const { sanPham } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={sanPham.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{sanPham.tenSP}</h4>
            <button className="btn btn-success" onClick={this.handleDetail}>Chi Tiết </button>
            <button className="btn btn-danger" onClick={this.handleGioHang}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
