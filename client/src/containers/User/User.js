import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div className="user">
        {this.props.children}
      </div>
    );
  }
}

export default User;
