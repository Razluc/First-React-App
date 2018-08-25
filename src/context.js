import React, { Component } from "react";

const Context = React.createContext();

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
    ]
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
