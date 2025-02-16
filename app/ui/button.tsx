import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  onClick: () => void;
  rest: React.ButtonHTMLAttributes<HTMLButtonElement>;
  className: string;
  children: React.ReactNode;
}

export default function Button({
  className,
  children,
  rest,
  onClick,
}: ButtonProps) {
  return (
    <button {...rest} className={clsx(className)} onClick={onClick}>
      {children}
    </button>
  );
}
