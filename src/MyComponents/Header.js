import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true,
};

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
