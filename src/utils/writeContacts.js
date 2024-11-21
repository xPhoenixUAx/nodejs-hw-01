import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const writeContacts = async (updatedContacts) => {
  try {
    const filePath = path.resolve(PATH_DB);
    const jsonData = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(filePath, jsonData, 'utf-8');
    return updatedContacts;
  } catch (error) {
    console.error('Error writing contacts:', error);
    return null;
  }
};
