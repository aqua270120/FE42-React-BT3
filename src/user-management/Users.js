import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderHTML = () => {
    const { userList, delUser } = this.props;
    return userList.map(user => {
      return (
        <UserItem user={user} key={user.id} delUser={delUser} />
      )
    });
  }
  render() {

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>

            {this.renderHTML()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
