import { useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';

import { deleteContact } from '../../../redux/contactsSlice';

import css from './ContactListItem.module.scss';

const ContactListItem = ({ contact }) => {
    const { id, name, number } = contact;

    const despatch = useDispatch();

    return (
        <li className={css['list-item']}>
            <span>{name}:</span>
            <span className={css['phone']}>{number}</span>
            <button
                onClick={() => despatch(deleteContact({ id }))}
                className={css['list-item-button']}
            >
                <MdDeleteForever size={'2em'} />
            </button>
        </li>
    );
};

export default ContactListItem;
