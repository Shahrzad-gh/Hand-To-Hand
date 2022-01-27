// Tab.js

import React, { Component } from "react";
import PropTypes from "prop-types";
import "../App.css";
export default class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this;

    let className = "nav-item nav-link p-0";

    if (activeTab === label) {
      className += " active";
    }

    return (
      <span className={className} onClick={onClick}>
        {label}
      </span>
    );
  }
}
