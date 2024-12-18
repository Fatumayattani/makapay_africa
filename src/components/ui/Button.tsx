import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-md font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  
  const variants = {
    primary: 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-gray-500',
  };
  
  const sizes = {
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-3.5 py-2.5 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};