import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from './data.json';
export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
      totalAmount: 0
    }
  }
  handleDetailProduct = (product) => {
    this.setState({
      detailProduct: product
    });
  }
  handleAddCart = (product) => {

    let listCart = this.state.listCart;
    let flag = false;
    listCart.forEach(item => {
      if (item.maSP === product.maSP) {
        product.soLuong += 1;
        flag = true;
      }
    })

    if (flag === false) {
      product.soLuong = 1;
      listCart.push(product);
    }
    this.setState({
      listCart
    }, () => {
      console.log(listCart)
      console.log("Succesfully added")
    });
  };
  handleCartUpDown = (product, option) => {
    let listCart = this.state.listCart;
    if (option === 1) {
      product.soLuong += 1;
    }
    if (option === 2) {
      if (product.soLuong > 1) {
        product.soLuong -= 1;
      }
    }
    this.setState({
      listCart
    }, () => {
      console.log(listCart)
      console.log("Succesfully")
    });
  }
  handleDelCart = (product) => {
    let listCart = this.state.listCart;
    listCart.forEach((item, index) => {
      if (item.maSP === product.maSP) {
        listCart.splice(item[index], 1);
      }
    }
    );
    this.setState({
      listCart

    }, () => {
      console.log("Succesfully delete product")
      console.log(listCart)
    });
  }
  countTotal = () => {
    this.state.totalAmount = 0;
    this.state.listCart.forEach(item => {
      this.state.totalAmount += item.soLuong;
    })
  }
  render() {
    const { detailProduct, listCart, listProduct } = this.state;
    { this.countTotal() }
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>

        <div className="container">
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#myModal"
          >
            Giỏ hàng ({this.state.totalAmount})
          </button>
        </div>
        <DanhSachSanPham dsSanPham={listProduct} detailProduct={this.handleDetailProduct} addCart={this.handleAddCart} />
        <Modal listCart={listCart} handleCartUpDown={this.handleCartUpDown} delCart={this.handleDelCart} />
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src="./img/vsphone.jpg" alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
