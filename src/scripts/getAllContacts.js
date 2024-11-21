import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    if (!contacts || contacts.length === 0) {
      console.log('Контакти не знайдені');
      return [];
    }
    console.log('Усі контакти', contacts);
    return contacts;
  } catch (error) {
    console.error('Error', error);
    return [];
  }
};

console.log(await getAllContacts());
