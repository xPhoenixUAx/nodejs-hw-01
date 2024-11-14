import fs from 'fs/promises';
import path from 'path';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const filePath = path.resolve(PATH_DB);

    const data = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return null;
  }
};
