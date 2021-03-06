import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Sidebar from "../components/sidebar/Sidebar";
import SectionNavScrolling from "../components/nav-scrolling/SectionNavScrolling";
import FilterNavScrolling from "../components/nav-scrolling/FilterNavScrolling";
import BackToCollectionScrolling from "../components/nav-scrolling/BackToCollectionScrolling";
import Header from "../components/header/Header";
import MainCartView from "../components/menu-checkout-slider/MainCartView";
import HomePage from "../components/home-page/HomePage";
import CollectionGridPage from "../components/collection-grid-page/CollectionGridPage";
import SingleItemPage from "../components/single-item-page/SingleItemPage";
import CheckoutPage from "..//components/checkout-page/CheckoutPage";
import Footer from "../components/footer/Footer";

const AppRouter = ({ cart, modal, route }) => (
  <Router>
    <div className="main-container">
      <Sidebar isFilterShown={modal.isFilterShown} />
      {route === "/" && <SectionNavScrolling />}
      {(route === "/collection/all" || route === "/collection/all/") && (
        <FilterNavScrolling />
      )}
      {(route === "/collection/:type/:id" || route === "/checkout") && (
        <BackToCollectionScrolling />
      )}
      {route !== "/checkout" && <Header />}
      <MainCartView cart={cart} isCartOpen={modal.isCartOpen} />
      <Switch className="main-content">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/collection/all" component={CollectionGridPage} />
        />
        <Route exact path="/collection/:type/:id" component={SingleItemPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
      {route !== "/checkout" && <Footer />}
    </div>
  </Router>
);

const mapStateToProps = ({ cart, modal, route }) => ({
  cart,
  modal,
  route: route.currentRoute
});

export default connect(mapStateToProps)(AppRouter);
