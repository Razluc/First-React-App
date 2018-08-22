import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props.contact; //the best way. Insted of this you need to add on each place this.props.name for example.
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.defaultProps = {
  name: 'Dumitru',
  email: 'max@imo.no',
  phone: '123-123-123'
};
Contact.PropTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
