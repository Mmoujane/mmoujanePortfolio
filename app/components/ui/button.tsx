import React from 'react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: React.ElementType;
  isActive?: boolean;
  className?: string;
  href: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  icon: Icon,
  isActive = false,
  className = '',
  href,
  ...props
}) => {
  const classes = `px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors ${
    isActive
      ? 'bg-cyan-600 text-white'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
  } ${className}`;

  return (
    <a href={href} className={classes} {...props}>
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </a>
  );
};

export default Button;