// TextComponent.tsx
import React from 'react';

interface TextComponentProps {
  text: string;
}

const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default TextComponent;
