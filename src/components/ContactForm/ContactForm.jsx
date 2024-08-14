import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperation';
import { selectContacts } from '../../redux/contacts/contactsSelector';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // 1.
  const handleNameChange = event => {
    setName(event.target.value);
  };
  // 2.
  const handleNumberChange = event => {
    setNumber(event.target.value);
  };
  // 3.
  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      Notify.failure(`${name} is already in contacts!`, {
        position: 'center-top',
      });
      return;
    } else {
      Notify.success(`${name} Successfully added to contacts!`, {
        position: 'center-top',
      });
    }

    dispatch(addContact({ name, number }));

    // Reset form field
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formField}>
        <p className={css.formLabel}>Name</p>
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>

      <label className={css.formField}>
        <p className={css.formLabel}>Number</p>
        <input
          className={css.contactFormInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Number"
          value={number}
          onChange={handleNumberChange}
        />
      </label>

      <button className={css.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};
