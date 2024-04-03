import React, { ReactNode } from 'react';
import { BaseButtonStyle } from './styles';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset"
}

const BaseButton: React.FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <BaseButtonStyle type={type} onClick={onClick? onClick : () => {}}>
      {children}
    </BaseButtonStyle>
  );
};

export default BaseButton;