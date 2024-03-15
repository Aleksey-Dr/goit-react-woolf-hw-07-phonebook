import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import css from './App.module.scss';

export const App = () => {
    
    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
};
