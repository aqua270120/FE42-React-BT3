import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ]
    };
  }

  delUser = (user) => {
    let userList = this.state.userList;
    userList.forEach((item, index) => {
      if (item.id === user.id) {
        userList.splice(item[index], 1);
      }
    });

    this.setState({
      userList
    }
      , () => {
        console.log("Del Thanh Cong")
      })
  }
  render() {
    const { userList } = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={userList} delUser={this.delUser} />
        <Modal />
      </div>
    );
  }
}

export default Home;
