import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.scss';

import { addContact } from '../../redux/contactsSlice';
import { selectContacts } from '../../redux/selectors';

const ContactForm = () => {
    const despatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const onAddContact = (name, number) => despatch(addContact(name, number));

    // ================== STATE
    const [id, setId] = useState(nanoid());
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    // ================== /STATE

    // ================== LOGIC
    const handleInput = evt => {
        const { name, value } = evt.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        const includesName = contacts?.find(contact =>
            contact.name.toLowerCase() === name.toLowerCase());

        includesName
            ? Notify.warning(name + ' is already in contacts')
            : onAddContact({ name, number, id });

        reset();
    };

    const reset = () => {
        setId(nanoid());
        setName('');
        setNumber('');
    };
    // ================== /LOGIC

    return (
        <div className={css['form-wrapper']}>
            <form
                onSubmit={handleSubmit}
                name="contact-form"
                className={css.form}
            >
                <div className={css['form-label-wrapper']}>
                    <input
                        onChange={handleInput}
                        value={name}
                        id="name"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder=" "
                        className={css['form-input']}
                    />
                    <label htmlFor="name" className={css['form-label']}>
                        Name
                    </label>
                </div>
                <div className={css['form-label-wrapper']}>
                    <input
                        onChange={handleInput}
                        value={number}
                        id="phone"
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder=" "
                        className={css['form-input']}
                    />
                    <label htmlFor="phone" className={css['form-label']}>
                        Number
                    </label>
                </div>
                <button type="submit" className={css['form-button']}>
                    Add contact
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
