import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  showArrow?: boolean;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  showArrow = true,
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1C1C1C] text-white font-medium text-xs tracking-widest uppercase rounded-none transition-all duration-300 hover:bg-[#111111] hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none group min-h-[44px] cursor-pointer ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 text-[#C8B9A6] transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  showArrow = true,
  disabled = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-transparent border border-[#1C1C1C] text-[#1C1C1C] font-medium text-xs tracking-widest uppercase rounded-none transition-all duration-300 hover:border-[#C8B9A6] hover:text-[#1C1C1C] hover:bg-[#C8B9A6]/10 active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none group min-h-[44px] cursor-pointer ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
};
