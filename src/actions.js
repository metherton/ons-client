/*
 * action types
 */

export const ADD_PERSON = 'ADD_PERSON'
export const SET_INITIAL_GEDCOM_PERSONS = 'SET_INITIAL_GEDCOM_PERSONS'
export const SET_INITIAL_PERSONS = 'SET_INITIAL_PERSONS'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_PERSON = 'SET_PERSON'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addPerson(person) {
  return { type: ADD_PERSON, person }
}

export function setInitialPersons(persons) {
  return { type: SET_INITIAL_PERSONS, persons }
}

export function setInitialGedcomPersons(gedcomPersons) {
  return { type: SET_INITIAL_GEDCOM_PERSONS, gedcomPersons }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setPerson(person) {
  return { type: SET_PERSON, person }
}
