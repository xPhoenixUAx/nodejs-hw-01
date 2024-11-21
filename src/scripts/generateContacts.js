import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
/**
@param {number} count
*/
export const generateContacts = async (count) => {
  try {
    const existingContacts = (await readContacts()) || [];

    const newContacts = Array.from({ length: count }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...existingContacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(`Успішно додано ${count} нових контактів.`);
  } catch (error) {
    console.error('Помилка під час генерації контактів:', error);
  }
};

generateContacts(5);
