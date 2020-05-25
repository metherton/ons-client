import { createStore } from 'redux';

var defaultState = {
  persons: []
};
function persons(state = defaultState, action) {
  var newState;
  if (action.type === 'ADD') {
    newState = Object.assign({}, state, {persons: action.data});
    return newState;
  }
  return state;
}

var store = createStore(persons);

export default store;
