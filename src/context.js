import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
      break;

    default:
      return state;
      break;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Lica",
        email: "terente@ala.legendar",
        phone: "888-111-9999"
      },
      {
        id: 2,
        name: "mica",
        email: "mica@ala.legendar",
        phone: "222-111-9999"
      },
      {
        id: 3,
        name: "didu",
        email: "didu@ala.legendar",
        phone: "111-111-9999"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;