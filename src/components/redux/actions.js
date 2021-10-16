import * as types from './types';
import { v4 as uuidv4 } from 'uuid';

const addContact = value => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
});

export default { addContact };
