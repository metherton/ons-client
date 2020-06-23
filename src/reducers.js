import { combineReducers } from 'redux'
import {
  ADD_PERSON,
  SET_INITIAL_PERSONS,
  SET_INITIAL_GEDCOM_PERSONS,
  TOGGLE_TODO,
  SET_PERSON,
  VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function person(state = {}, action) {
  switch (action.type) {
    case SET_PERSON:
      return action.person
    default:
      return state
  }
}

function persons(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          person: action.person,
        }
      ]
    case SET_INITIAL_PERSONS:
      return Object.assign([], action.persons)

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function gedcomPersons(state = [], action) {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...state,
        {
          person: action.person,
        }
      ]
    case SET_INITIAL_GEDCOM_PERSONS:
      return Object.assign([], action.gedcomPersons)

    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const onsApp = combineReducers({
  person,
  persons,
  gedcomPersons,
})

export default onsApp
