import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactList/ContactListItem';

import css from './ContactList.module.scss';

import { selectContacts, selectFilter } from '../../redux/selectors';

const ContactList = () => {
    const filter = useSelector(selectFilter);
    const contacts = useSelector(selectContacts);

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
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
    );
};

export default ContactList;
