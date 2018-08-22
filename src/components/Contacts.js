import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Lica',
        email: 'terente@ala.legendar',
        phone: '888-111-9999'
      },
      {
        id: 2,
        name: 'mica',
        email: 'mica@ala.legendar',
        phone: '222-111-9999'
      },
      {
        id: 3,
        name: 'didu',
        email: 'didu@ala.legendar',
        phone: '111-111-9999'
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
export default Contacts;
