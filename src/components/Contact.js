import React, { Component } from "react";
import PropTypes from "prop-types";

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

Contact.defaultProps = {
  name: "Dumitru",
  email: "max@imo.no",
  phone: "123-123-123"
};
Contact.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.email.isRequired,
  phone: PropTypes.number.isRequired
};
export default Contact;
