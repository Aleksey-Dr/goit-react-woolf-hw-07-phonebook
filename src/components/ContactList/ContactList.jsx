import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader';
import ContactListItem from 'components/ContactList/ContactListItem';

import css from './ContactList.module.scss';

import { fetchContacts } from '../../redux/operations';
import { selectInitial, selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);
    const { isLoading, error } = useSelector(selectInitial);

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
        <div>
            {isLoading && <Loader />}
            {error && <p><b>Error: </b>{error}</p>}
            <ul className={css.list}>
                {filterContacts.map(contact => {
                    return (
                        <ContactListItem
                            key={contact.id}
                            contact={contact}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default ContactList;
