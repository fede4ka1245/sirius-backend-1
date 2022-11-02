const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
export function shiftAlphabet(shift) {
  let shiftedAlphabet = '';

  for (let i = 0; i < alphabet.length; i++) {
    const currentLetter = (alphabet[i + shift] === undefined)
      ? (alphabet[i + shift - alphabet.length]) : (alphabet[i + shift]);

    shiftedAlphabet = shiftedAlphabet.concat(currentLetter);
  }

  return shiftedAlphabet;
}
