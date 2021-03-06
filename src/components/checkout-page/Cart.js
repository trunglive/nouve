import React, { Component } from "react";
import { connect } from "react-redux";

import ItemInCart from "../menu-checkout-slider/ItemInCart";
import { calculateQuantityInCart } from "../../utils/calculateQuantityInCart";
import { calculateSubtotal } from "../../utils/calculateSubtotal";

class Cart extends Component {
  render() {
    const { cart, shippingCost, cartState } = this.props;
    const subtotal = calculateSubtotal(cart);
    const total = (calculateSubtotal(cart) + shippingCost).toFixed(2);

    return (
      <div
        className={`checkout-page__right-section ${
          cartState ? "show-cart left-box-shadow" : "hide-cart"
        }`}
      >
        <div className="your-cart-and-number">
          <div className="your-cart">Your cart</div>
          <div className="number">({calculateQuantityInCart(cart)})</div>
        </div>
        <div className="checkout-menu__items-section all-items-in-cart">
          {Object.keys(cart).length > 0 &&
            Object.keys(cart).map(id =>
              cart[id].map(item => (
                <ItemInCart guid={id} {...item} key={item.variationId} />
              ))
            )}
        </div>
        <div className="checkout-menu__subtotal-section">
          <div className="checkout-menu__subtotal-section--price">
            <p>subtotal</p>
            <p>$ {subtotal}</p>
          </div>
          <div className="checkout-menu__subtotal-section--shipping">
            <p>Shipping from Seattle, WA</p>
            <p>$ {shippingCost}</p>
          </div>
          <div className="checkout-menu__subtotal-section--final-total-price">
            <p>total</p>
            <p>$ {total}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart, shipping }) => ({
  cart,
  shippingCost: shipping.cost
});

export default connect(mapStateToProps)(Cart);
