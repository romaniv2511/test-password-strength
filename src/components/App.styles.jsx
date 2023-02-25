import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;
export const Input = styled.input`
  padding: 4px 16px;
  width: 256px;
`;
export const PasswordStrengthBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;

const Item = styled.span`
  display: inline-block;
  width: 80px;
  height: 4px;
`;
export const FirstItem = styled(Item)`
  background-color: ${props => {
    switch (props.strength) {
      case 'dangerous':
        return 'red';
      case 'easy':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'strong':
        return 'green';
      default:
        return 'grey';
    }
  }};
`;
export const SecondItem = styled(Item)`
  background-color: ${props => {
    switch (props.strength) {
      case 'dangerous':
        return 'red';
      case 'easy':
        return 'grey';
      case 'medium':
        return 'yellow';
      case 'strong':
        return 'green';
      default:
        return 'grey';
    }
  }};
`;
export const ThirdItem = styled(Item)`
  background-color: ${props => {
    switch (props.strength) {
      case 'dangerous':
        return 'red';
      case 'easy':
        return 'grey';
      case 'medium':
        return 'grey';
      case 'strong':
        return 'green';
      default:
        return 'grey';
    }
  }};
`;
