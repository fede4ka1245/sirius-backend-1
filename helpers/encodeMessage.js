import { shiftAlphabet } from './shiftAlphabet.js';
import { alphabet } from './alphabet.js';

export const encodeMessage = (message, rot) => {
  const shiftedAlphabet = shiftAlphabet(rot);
  let encryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    const indexOfLetter = alphabet.indexOf(message[i].toUpperCase());
    encryptedMessage = encryptedMessage.concat(shiftedAlphabet[indexOfLetter]);
  }

  return encryptedMessage.toLowerCase();
};
