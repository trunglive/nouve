import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";

class Header extends Component {
  handleOpenCart = () => {
    console.log("thats dope");
    //dispatch an action to open menu checkout modal
  };

  render() {
    return (
      <div className="header">
        <div className="search-bar-container">
          <img
            className="search-bar-container__search-icon"
            src="/icons/search.svg"
          />
          <span>Search</span>
        </div>
        <div className="user-account-container">
          <Link
            to="/collection/all"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span>Shop</span>
          </Link>
          <span>My account</span>
          <img
            className="user-account-container__cart-icon"
            src="/icons/cart.svg"
            onClick={() => this.props.fetchCart(true)}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchCart })(Header);
