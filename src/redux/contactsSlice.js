import { createSlice } from '@reduxjs/toolkit';

import contactsData from 'data/contactsData';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: contactsData,
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },

        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact =>
                contact.id !== action.payload.id);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;