import { combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import * as types from './types';

const initialState = {
  contacts: {
    items: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const items = (state = initialState.contacts.items, { type, payload }) => {
  switch (type) {
    case types.ADD:
      const doubleContact = state.find(
        contact => payload.name.toLowerCase() === contact.name.toLowerCase(),
      );

      if (doubleContact)
        return alert(`${doubleContact.name} is alredy in contacts`);

      return [...state, payload];

    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, action) => state;

export default combineReducers({
  items,
  filter,
});
