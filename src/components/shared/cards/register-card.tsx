import React, { ReactNode } from 'react';
import { RegisterCardStyle } from './styles';

interface CardProps {
  children: ReactNode;
}

const RegisterCard: React.FC<CardProps> = ({children}) => {
  return (
    <RegisterCardStyle>
      {children}
    </RegisterCardStyle>
  );
};

export default RegisterCard;