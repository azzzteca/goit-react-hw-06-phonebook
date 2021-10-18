import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { v4 as uuidv4 } from 'uuid';

const itemsInitialState = [
  { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
  { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
  { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = itemsInitialState, { type, payload }) => {
  switch (type) {
    case 'contacts/add':
      return [...state, payload];

    case 'contacts/delete':
      const stateWithoutDeletedContacts = state.filter(
        contact => contact.id !== payload.id,
      );

      return stateWithoutDeletedContacts;

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'contacts/filter':
      return {
        filter: payload.value.toLowerCase(),
      };

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
