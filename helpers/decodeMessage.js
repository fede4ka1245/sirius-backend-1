import { shiftAlphabet } from './shiftAlphabet.js';
import { alphabet } from './alphabet.js';

export function decodeMessage(message, rot) {
  const shiftedAlphabet = shiftAlphabet(rot);
  let encryptedMessage = '';

  for (let index = 0; index < message.length; index++) {
    if (message[index] === ' ') {
      encryptedMessage = encryptedMessage.concat(' ');
      continue;
    }

    const letterIndex = shiftedAlphabet.indexOf(message[index].toUpperCase());
    const encryptedLetter = alphabet[letterIndex];

    if (!encryptedLetter) {
      encryptedMessage = encryptedMessage.concat(message[index]);
    } else {
      encryptedMessage = encryptedMessage.concat(alphabet[letterIndex]);
    }
  }

  return encryptedMessage.toLowerCase();
}
