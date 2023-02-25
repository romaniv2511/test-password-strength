import { useState, useEffect } from 'react';
import { testPasswordStrength } from '../helpers/testPasswordStrength';
import { GlobalStyle } from './GlobalStyle';
import {
  Container,
  Input,
  PasswordStrengthBox,
  FirstItem,
  SecondItem,
  ThirdItem,
} from './App.styles';

export const App = () => {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  useEffect(() => {
    setPasswordStrength(testPasswordStrength(password));
  }, [password, passwordStrength]);

  const handleInput = e => {
    setPassword(e.target.value.trim());
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <p>Please, enter password</p>
        <Input type="text" value={password} onChange={handleInput} />

        <PasswordStrengthBox>
          <FirstItem strength={passwordStrength} />
          <SecondItem strength={passwordStrength} />
          <ThirdItem strength={passwordStrength} />
        </PasswordStrengthBox>
      </Container>
    </>
  );
};
