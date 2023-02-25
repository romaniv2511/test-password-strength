export const testPasswordStrength = password => {
  // const letters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM';
  // const digits = '0123456789';
  // const symbols = '!@#$%^&*()_-+=|/.,:;[]{}';
  const letters = '[A-Za-z]';
  const digits = '[0-9]';
  const symbols = '[^0-9]';
  let isLetters = false;
  let isDigits = false;
  let isSymbols = false;

  for (let i = 0; i < password.length; i++) {
    if (!isLetters && letters.indexOf(password[i]) !== -1) isLetters = true;
    else if (!isDigits && digits.indexOf(password[i]) !== -1) isDigits = true;
    else if (!isSymbols && symbols.indexOf(password[i]) !== -1)
      isSymbols = true;
  }

  const strong = isLetters && isDigits && isSymbols;
  const medium =
    (isLetters && isDigits) ||
    (isLetters && isSymbols) ||
    (isDigits && isSymbols);
  const easy = isLetters || isDigits || isSymbols;
  const dangerous = password.length < 8;

  if (!password) return;
  if (dangerous) return 'dangerous';
  if (strong) return 'strong';
  if (medium) return 'medium';
  if (easy) return 'easy';
};
