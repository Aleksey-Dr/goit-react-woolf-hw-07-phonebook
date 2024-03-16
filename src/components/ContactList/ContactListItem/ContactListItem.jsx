import { useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';

import { deleteContact } from '../../../redux/operations';

import css from './ContactListItem.module.scss';

const ContactListItem = ({ contact }) => {
    const { id, name, phone } = contact;

    const despatch = useDispatch();

    return (
        <li className={css['list-item']}>
            <span className={css.name}>{name}:</span>
            <span className={css.phone}>{phone}</span>
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
