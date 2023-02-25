export const testPasswordStrength = password => {
  if (!password) return;

  const lettersRegexp = /[A-Za-z]/;
  const digitsRegexp = /[0-9]/;
  const symbolsRegexp = /[^0-9A-Za-z]/;

  let hasLetters = false;
  let hasDigits = false;
  let hasSymbols = false;

  if (password.match(lettersRegexp)) hasLetters = true;
  if (password.match(digitsRegexp)) hasDigits = true;
  if (password.match(symbolsRegexp)) hasSymbols = true;

  console.log('hasLetters', hasLetters);
  console.log('hasDigits', hasDigits);
  console.log('hasSymbols', hasSymbols);
  const strong = hasLetters && hasDigits && hasSymbols;
  const medium =
    (hasLetters && hasDigits) ||
    (hasLetters && hasSymbols) ||
    (hasDigits && hasSymbols);
  const easy = hasLetters || hasDigits || hasSymbols;
  const dangerous = password.length < 8;

  if (dangerous) return 'dangerous';
  if (strong) return 'strong';
  if (medium) return 'medium';
  if (easy) return 'easy';
};
