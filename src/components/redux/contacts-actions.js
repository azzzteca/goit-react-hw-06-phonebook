import { v4 as uuidv4 } from 'uuid';

export const addContact = ({ name, number }) => ({
  type: 'contacts/add',
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = id => ({
  type: 'contacts/delete',
  payload: {
    id,
  },
});

export const filterContact = value => ({
  type: 'contacts/filter',
  payload: { value },
});
