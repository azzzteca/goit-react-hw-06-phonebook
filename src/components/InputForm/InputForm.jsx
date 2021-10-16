import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactActions from '../redux/actions';
import { useLocalStorage } from '../hooks/useLocalStoraje';
import s from './InputForm.module.css';

function InputForm({ addContact }) {
  return (
    <form onSubmit={addContact}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onsubmit: evt => dispatch(contactActions.addContact(evt.target)),
});

export default connect(null, mapDispatchToProps)(InputForm);

InputForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
