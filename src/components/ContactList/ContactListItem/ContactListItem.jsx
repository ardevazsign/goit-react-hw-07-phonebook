// import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../../redux/contacts/contactsSlice';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
    Notify.success(
      `${filteredContact.name} was successfully deleted from your contacts!`,
      { position: 'center-top' }
    );
  };
  return (
    <li className={css.contactListItem}>
      <p>
        {filteredContact.name}: {filteredContact.number}
      </p>
      <button
        onClick={() => handleDelete(filteredContact.id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

//   return (
//     <li className={css.contactListItem}>
//       <p>{filteredContact.name} :</p>
//       <p>{filteredContact.number}</p>

//       <button className={css.deleteBtn} onClick={handleDelete}>
//         Delete
//       </button>
//     </li>
//   );
// };

// ContactListItem.propTypes = {
//   filteredContact: PropTypes.object.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
