import React, { Component } from "react";

class Modal extends Component {
  state = {
    value: {
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "user"
    },
    errors: {
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      type: "user"
    }

  };
  handleChange = (event) => {
    const { value, name } = event.target;
    // this.setState({
    //   value: {
    //     // ...Object la hanh dong clone 1 object khac 
    //     ...this.state.value,
    //     //do trong object clone da co key [name] nen [name]:value se ghi de len va gan gia tri moi cho key do
    //     //neu trong object clone k co key [name] thi [name]:value se duoc them vao object
    //     [name]: value,
    //   }
    // });
    //Cach 2 set state voi callback function
    //Loi ich la kp tao ra bien state moi
    this.setState((state) => {
      return {
        value: {
          ...state.value,
          [name]: value,
        }
      }
    });
  }

  handleBlur = (event) => {
    const { value, name } = event.target;
    const errorMessage = this.validate(value, name);
    this.setState((state) => {
      return {
        errors: {
          ...state.errors,
          [name]: errorMessage,
        }
      }
    });

  }

  validate = (value, name) => {
    let errorMessage = "";
    if (name === "username") {
      errorMessage = !value ? "Username khong duoc de trong" : "";
    }
    if (name === "name") {
      errorMessage = !value ? "Name khong duoc de trong" : "";
    }
    if (name === "email") {
      if (!value) {
        errorMessage = "Email khong duoc de trong"
      }
      else {
        // Su dung regex trong js thi p co .test() 
        const isValid = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(value);
        errorMessage = !isValid ? "Email khong hop le" : "";
      }
    }
    if (name === "phoneNumber") {
      errorMessage = !value ? "SDT khong duoc de trong" : "";
    }
    return errorMessage;
  };
  handleButton = (event) => {
    let isValid = true;
    event.preventDefault();

    for (let key in this.state.value) {
      const errorMessage = this.validate(this.state.value[key], key);

      if (errorMessage) {
        isValid = false;
      }
      this.setState((state) => {
        return {
          errors: {
            ...state.errors,
            [key]: errorMessage
          }
        };
      });
    }
    if (!isValid) return;
    this.props.addUser(this.state.value);
  }
  render() {
    console.log(this.state);
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
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
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" value={this.state.value.username} name="username" onChange={(event) => { this.handleChange(event); console.log(this.state.value) }} onBlur={this.handleBlur} />
                  {this.state.errors.username && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.username}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Name</label>
                  {/* Cách viết thứ 2 thằng handlechange tự hiểu có tham số truyền vào là event */}
                  <input type="text" className="form-control" value={this.state.value.name} name="name" onChange={this.handleChange} onBlur={this.handleBlur} />
                  {this.state.errors.name && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.name}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" value={this.state.value.email} name="email" onChange={(event) => { this.handleChange(event); console.log(this.state.value) }} onBlur={this.handleBlur} />
                </div>
                {this.state.errors.email && (
                  <div className="alert alert-danger">
                    <span>{this.state.errors.email}</span>
                  </div>
                )}
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" value={this.state.value.phoneNumber} name="phoneNumber" onChange={this.handleChange} onBlur={this.handleBlur} />
                  {this.state.errors.phoneNumber && (
                    <div className="alert alert-danger">
                      <span>{this.state.errors.phoneNumber}</span>
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" value={this.state.type}>
                    <option value="user">USER</option>
                    <option value="vip">VIP</option>
                  </select>
                </div>
                {/* KHi sử dụng button thì p ngăn việc button khi click vào sẽ load lại trang bằng cách preventDefault  */}
                <button type="submit" className="btn btn-success" onClick={this.handleButton}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
