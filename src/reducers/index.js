import { combineReducers } from 'redux';
import filterBy from './filteringReducer';
import cart from './cartReducer';
import shipping from './shippingReducer';
import sortBy from './sortingReducer';
import modal from './modalReducer';
import search from './searchReducer';
import waypoint from './waypointReducer';
import route from './routingReducer';

const rootReducer = combineReducers({
  filterBy,
  cart,
  shipping,
  sortBy,
  modal,
  search,
  waypoint,
  route
})

export default rootReducer;