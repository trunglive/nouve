import React, { Component } from "react";
import Menu from "react-modal";

const WithMenuToggle = WrappedComponent =>
  class extends Component {
    static displayName = `WithMenuToggle(${WrappedComponent.displayName ||
      WrappedComponent.name})`;

    state = {
      isMenuOpen: false
    };

    componentWillMount() {
      Menu.setAppElement("body");
    }

    handleOpenMenu = (quantity, currentColor, currentSize) => {
      if (quantity > 0 && currentColor && currentSize) {
        this.setState({ isMenuOpen: true });
      }
    };

    handleCloseMenu = () => {
      this.setState({ isMenuOpen: false });
    };

    render() {
      return (
        <WrappedComponent
          handleOpenMenu={this.handleOpenMenu}
          handleCloseMenu={this.handleCloseMenu}
          isMenuOpen={this.state.isMenuOpen}
          {...this.props}
        />
      );
    }
  };

export default WithMenuToggle;
