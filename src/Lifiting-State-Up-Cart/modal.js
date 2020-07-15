import React, { Component } from "react";

export default class Modal extends Component {
  handleCartUpDown = (item, option) => {
    this.props.handleCartUpDown(item, option);
  }
  delProduct = item => {
    this.props.delCart(item);
  }

  formatMoney = (money, quantity) => {
    return new Intl.NumberFormat().format(money * quantity);

  }
  renderCartProduct = () => {
    const { listCart } = this.props;
    if (listCart.length > 0) {
      return listCart.map(item => {
        return (
          <tr key={item.maSP}>
            <td>{item.maSP}</td>
            <td>{item.tenSP}</td>
            <td>
              <img src={item.hinhAnh} width={50} alt="" />
            </td>
            <td>
              {/* Ham co tham so thi p viet theo kieu la () =>{this.handleCartUpDown(item, 2)} */}
              {/* Ham k co tham so thi viet don gian la this.handleCartUpDown()  */}
              <button onClick={() => { this.handleCartUpDown(item, 2) }}>-</button>{item.soLuong}<button onClick={() => { this.handleCartUpDown(item, 1) }}>+</button>
            </td>
            <td>{item.giaBan}</td>
            <td>{this.formatMoney(item.giaBan, item.soLuong)} </td>
            <td>
              <button className="btn btn-danger" onClick={() => { this.delProduct(item) }}>Delete</button>
            </td>
          </tr>
        );
      })
    }
    else {
      return (
        <tr  >
          <td colSpan='7' className='font-weight-light'>Chưa có sản phẩm nào trong giỏ hàng</td>
        </tr >
      )
    }

  };
  render() {
    return (
      <div
        className="modal fade"
        id="myModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderCartProduct()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
