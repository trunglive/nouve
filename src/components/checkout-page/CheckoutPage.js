import React, { Component } from "react";
import { connect } from "react-redux";

import { displayCurrentRoute } from "../../actions/routingActions";

class CheckoutPage extends Component {
  componentDidMount() {
    this.props.displayCurrentRoute(this.props.match.path);
  }

  render() {
    return (
      <div className="checkout-page">
        <form className="checkout-page__left-section">
          <div className="shipping-section">
            <div className="shipping-section__title checkout-page__title">
              <span>01</span>
              <span>Shipping</span>
            </div>
            <div className="shipping-section__all-shipping-carriers checkout-page__grid">
              <div className="shipping-section__dhl-parcel-service">
                <input type="radio" name="shipping" />
                <label>DHL Parcel Service</label>
              </div>
              <div className="shipping-section__fedex-shipping">
                <input type="radio" name="shipping" />
                <label>Fedex Shipping</label>
              </div>
            </div>
          </div>
          <div className="address-section">
            <div className="address-section__title checkout-page__title">
              <span>02</span>
              <span>Address</span>
            </div>
            <div className="checkout-page__grid"></div>
          </div>
          <div className="payment-section">
            <div className="payment-section__title checkout-page__title">
              <span>03</span>
              <span>Payment</span>
            </div>
            <div className="checkout-page__grid"></div>
          </div>
        </form>
        <div className="checkout-page__right-section" />
      </div>
    );
  }
}

export default connect(
  null,
  { displayCurrentRoute }
)(CheckoutPage);
