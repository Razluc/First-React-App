import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props; //the best way. Insted of this you need to add on each place this.props.name for example.
    return (
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
