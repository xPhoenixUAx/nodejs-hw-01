import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';
export const writeContacts = async (updatedContacts) => {
  try {
    const filePath = path.resolve(PATH_DB);
    const data = await fs.writeFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error writing contacts:', error);
    return null;
  }
};
