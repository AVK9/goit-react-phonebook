import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContactThunk } from 'store/contacts/contactsThunk';
import { useEffect } from 'react';
import {
  selectError,
  selectLoading,
  selectVisibleContacts,
} from 'store/contacts/selectorsContacts';
import { useFetchContactsQuery } from '../../services/rtk';

export const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const contacts = useSelector(selectVisibleContacts);

  // const contacts2 = useSelector(selectStateContacts);

  // console.log('contacts111 :>> ', contacts2);
  const { data, isFetching } = useFetchContactsQuery();
  console.log('useFetchContactsQuery :>> ', data);

  useEffect(() => {
    dispatch(getContactThunk());
    // console.log('contacts999 :>> ', contacts);
  }, [dispatch]);

  return (
    <>
      {loading && !error && <p>Loading pleasure wait</p>}
      {error && <p>Error: {error}</p>}
      {contacts.length ? (
        <ul className={css.contactsList}>
          {contacts.map(({ name, number, id }) => (
            <ContactListItem name={name} number={number} key={id} id={id} />
          ))}
        </ul>
      ) : (
        <p className={css.contactsList}>No contacts to filter</p>
      )}
    </>
  );
};
