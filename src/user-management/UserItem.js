import React, { Component } from "react";

class UserItem extends Component {
  delUser = (user) => {
    this.props.delUser(user);
  }
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => { this.delUser(user) }}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
