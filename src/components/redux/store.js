import { createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

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

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      console.log(payload);

      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case 'contacts/delete':
      const stateWithoutDeletedContacts = state.contacts.items.filter(
        contact => contact.id !== payload.id,
      );

      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: stateWithoutDeletedContacts,
        },
      };

    case 'contacts/filter':
      console.log(payload);
      return {
        ...state,
        contacts: { ...state.contacts, filter: payload.value.toLowerCase() },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
