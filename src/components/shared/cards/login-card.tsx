import React, { ReactNode } from 'react';
import { LoginCardStyle } from './styles';

interface CardProps {
  children: ReactNode;
}

const LoginCard: React.FC<CardProps> = ({children}) => {
  return (
    <LoginCardStyle>
      {children}
    </LoginCardStyle>
  );
};

export default LoginCard;