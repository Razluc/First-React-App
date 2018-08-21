import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = this.props;
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

Header.defaultProps = {
  branding: "The app" //when in app.js the header component don't have any props this value will be show up.
};

Header.PropTypes = {
  branding: PropTypes.string.isRequired // Validation for props
};

export default Header;
