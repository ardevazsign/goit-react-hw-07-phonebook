import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contactsOperation';
//  prettier-ignore
import { selectError, selectIsLoading } from '../redux/contacts/contactsSelector';
// import { setFilter } from '../redux/filterContacts/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const contacts = useSelector(selectContacts);
  // const visibleContacts = useSelector(selectVisibleContacts);
  // const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const handleAddContact = newContact => {
  //   dispatch(addContact(newContact));
  // };

  // const handleDeleteContact = id => {
  //   dispatch(deleteContact(id));
  // };

  // const handleSetFilter = newFilter => {
  //   dispatch(setFilter(newFilter));
  // };

  return (
    <div className={css.mainContainer}>
      <h1 className={css.projectTitle}>Phonebook</h1>
      <ContactForm />
      {/* addContact={handleAddContact} contacts={visibleContacts} */}
      <h2 className={css.contactTitle}>Contacts</h2>
      <Filter />
      {/* filter={filter} setFilter={handleSetFilter} */}
      {/* {isLoading && (
        <b style={{ display: 'block', padding: '0 0 20px 10px' }}>Loading...</b>
      )}
      {error && <b>Error: {error}</b>}
      {visibleContacts && ( */}
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
      {/* ontacts={visibleContacts}
      deleteContact={handleDeleteContact} */}
    </div>
  );
};
