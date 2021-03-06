import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import * as types from './contacts-types';

const itemsInitialState = [
  { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
  { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
  { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = itemsInitialState, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const doubleContact = state.find(
        contact => payload.name.toLowerCase() === contact.name.toLowerCase(),
      );

      if (doubleContact) {
        alert(`${payload.name} is alredy in contacts`);
        return state;
      }

      const newContact = {
        id: uuidv4(),
        name: payload.name,
        number: payload.number,
      };

      return [...state, newContact];

    case types.DELETE:
      const stateWithoutDeletedContacts = state.filter(
        contact => contact.id !== payload,
      );

      return stateWithoutDeletedContacts;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload.toLowerCase();

    default:
      return state;
  }
};

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
