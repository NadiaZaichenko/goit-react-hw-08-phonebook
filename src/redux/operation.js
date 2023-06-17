import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import * as api from 'services/api';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const contactsItems = await axios.get('/contacts');
      return contactsItems.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, phone}, thunkAPI) => {
    try {
      const addNewContact = await axios.post('/contacts', {name, phone});
      return addNewContact;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await axios.delete(`/contacts/${id}`);
      return contactToDelete;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);